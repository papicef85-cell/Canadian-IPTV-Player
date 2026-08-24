// Channel Management

class ChannelManager {
    constructor() {
        this.channels = CONFIG.channels;
        this.currentChannel = null;
        this.filteredChannels = this.channels;
    }

    getAllChannels() {
        return this.channels;
    }

    getChannel(channelId) {
        return this.channels.find(ch => ch.id === channelId);
    }

    searchChannels(query) {
        if (!query) {
            this.filteredChannels = this.channels;
            return this.filteredChannels;
        }

        const lowerQuery = query.toLowerCase();
        this.filteredChannels = this.channels.filter(ch =>
            ch.name.toLowerCase().includes(lowerQuery) ||
            ch.category.toLowerCase().includes(lowerQuery) ||
            ch.description.toLowerCase().includes(lowerQuery)
        );
        return this.filteredChannels;
    }

    getChannelsByCategory(category) {
        return this.channels.filter(ch => ch.category === category);
    }

    getCategories() {
        const categories = new Set(this.channels.map(ch => ch.category));
        return Array.from(categories).sort();
    }

    setCurrentChannel(channelId) {
        this.currentChannel = this.getChannel(channelId);
        return this.currentChannel;
    }

    getCurrentChannel() {
        return this.currentChannel;
    }

    renderChannelList(containerId, channels = this.filteredChannels) {
        const container = document.getElementById(containerId);
        if (!container) return;

        container.innerHTML = '';

        channels.forEach(channel => {
            const channelElement = document.createElement('div');
            channelElement.className = 'channel-item';
            channelElement.textContent = `${channel.logo} ${channel.name}`;
            channelElement.title = channel.description;

            channelElement.addEventListener('click', () => {
                // Remove active class from all items
                document.querySelectorAll('.channel-item').forEach(item => {
                    item.classList.remove('active');
                });
                // Add active class to clicked item
                channelElement.classList.add('active');
                // Trigger channel selection
                this.setCurrentChannel(channel.id);
                dispatchEvent(new CustomEvent('channelSelected', { detail: channel }));
            });

            container.appendChild(channelElement);
        });
    }
}

// Initialize Channel Manager
const channelManager = new ChannelManager();
