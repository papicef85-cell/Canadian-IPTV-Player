// Main Application Logic

class IPTVApp {
    constructor() {
        this.channelManager = channelManager;
        this.epgManager = epgManager;
        this.playerManager = playerManager;
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderInitialUI();
    }

    setupEventListeners() {
        // Channel search
        const channelSearch = document.getElementById('channelSearch');
        if (channelSearch) {
            channelSearch.addEventListener('input', (e) => {
                this.channelManager.searchChannels(e.target.value);
                this.channelManager.renderChannelList('channelList');
            });
        }

        // Year filter
        const yearSelect = document.getElementById('yearSelect');
        if (yearSelect) {
            yearSelect.addEventListener('change', (e) => {
                const year = e.target.value === 'all' ? CONFIG.epg.defaultYear : parseInt(e.target.value);
                this.epgManager.setSelectedYear(year);
                if (this.channelManager.getCurrentChannel()) {
                    this.epgManager.renderEPGTimeline(this.channelManager.getCurrentChannel().id);
                    this.epgManager.renderAllChannelsSchedule();
                }
            });
        }

        // Date filter
        const dateSelect = document.getElementById('dateSelect');
        if (dateSelect) {
            // Set today's date as default
            const today = new Date().toISOString().split('T')[0];
            dateSelect.value = today;
            dateSelect.addEventListener('change', (e) => {
                this.epgManager.setSelectedDate(e.target.value);
                if (this.channelManager.getCurrentChannel()) {
                    this.epgManager.renderEPGTimeline(this.channelManager.getCurrentChannel().id);
                    this.epgManager.renderAllChannelsSchedule();
                }
            });
        }

        // Channel selection event
        document.addEventListener('channelSelected', (e) => {
            const channel = e.detail;
            this.playerManager.playChannel(channel);
            this.epgManager.renderEPGTimeline(channel.id);
            this.epgManager.renderAllChannelsSchedule();
        });
    }

    renderInitialUI() {
        // Render channel list
        this.channelManager.renderChannelList('channelList');
        
        // Render EPG for first channel
        if (this.channelManager.getAllChannels().length > 0) {
            const firstChannel = this.channelManager.getAllChannels()[0];
            this.channelManager.setCurrentChannel(firstChannel.id);
            this.playerManager.playChannel(firstChannel);
            this.epgManager.renderEPGTimeline(firstChannel.id);
        }

        // Render schedule
        this.epgManager.renderAllChannelsSchedule();
    }
}

// Initialize app when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        const app = new IPTVApp();
    });
} else {
    const app = new IPTVApp();
}
