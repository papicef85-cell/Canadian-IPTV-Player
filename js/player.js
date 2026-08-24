// Video Player Management

class PlayerManager {
    constructor() {
        this.videoPlayer = document.getElementById('videoPlayer');
        this.currentChannel = null;
    }

    playChannel(channel) {
        this.currentChannel = channel;
        
        // Update UI
        const channelNameEl = document.getElementById('currentChannel');
        const programEl = document.getElementById('currentProgram');

        if (channelNameEl) {
            channelNameEl.textContent = `${channel.logo} ${channel.name}`;
        }

        if (programEl) {
            programEl.textContent = channel.description;
        }

        // Load stream (Note: M3U8 URLs should point to actual legal streams)
        if (this.videoPlayer && channel.m3u8) {
            this.videoPlayer.src = channel.m3u8;
            try {
                this.videoPlayer.load();
                // Attempt to play
                const playPromise = this.videoPlayer.play();
                if (playPromise !== undefined) {
                    playPromise.catch(error => {
                        console.log('Playback prevented:', error);
                        if (programEl) {
                            programEl.textContent = 'Stream unavailable or requires authentication';
                        }
                    });
                }
            } catch (error) {
                console.error('Player error:', error);
                if (programEl) {
                    programEl.textContent = 'Error loading stream';
                }
            }
        }
    }

    stop() {
        if (this.videoPlayer) {
            this.videoPlayer.pause();
            this.videoPlayer.currentTime = 0;
        }
    }

    pause() {
        if (this.videoPlayer) {
            this.videoPlayer.pause();
        }
    }

    resume() {
        if (this.videoPlayer) {
            this.videoPlayer.play();
        }
    }

    setVolume(level) {
        if (this.videoPlayer) {
            this.videoPlayer.volume = Math.max(0, Math.min(1, level));
        }
    }

    toggleFullscreen() {
        if (this.videoPlayer) {
            if (this.videoPlayer.requestFullscreen) {
                this.videoPlayer.requestFullscreen();
            }
        }
    }
}

// Initialize Player Manager
const playerManager = new PlayerManager();
