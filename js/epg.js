// EPG (Electronic Program Guide) Management

class EPGManager {
    constructor() {
        this.epgData = {};
        this.selectedYear = CONFIG.epg.defaultYear;
        this.selectedDate = new Date();
        this.programs = [];
        this.initializeEPGData();
    }

    initializeEPGData() {
        // Sample EPG data structure for 2005-2013
        CONFIG.epg.years.forEach(year => {
            this.epgData[year] = this.generateSampleEPGForYear(year);
        });
    }

    generateSampleEPGForYear(year) {
        const programs = {};
        const samplePrograms = [
            { title: 'Morning News', duration: 60 },
            { title: 'Sports Update', duration: 30 },
            { title: 'Current Affairs', duration: 60 },
            { title: 'Documentary Feature', duration: 90 },
            { title: 'Midday Live', duration: 120 },
            { title: 'Afternoon Movie', duration: 120 },
            { title: 'Evening News', duration: 60 },
            { title: 'Prime Time Drama', duration: 60 },
            { title: 'Sports Tonight', duration: 120 },
            { title: 'Late Night Show', duration: 60 }
        ];

        CONFIG.channels.forEach(channel => {
            programs[channel.id] = [];
            let currentHour = 0;
            let programIndex = 0;

            while (currentHour < 24) {
                const program = samplePrograms[programIndex % samplePrograms.length];
                programs[channel.id].push({
                    id: `${channel.id}-${year}-${currentHour}`,
                    title: `${program.title} (${year})`,
                    startTime: `${String(currentHour).padStart(2, '0')}:00`,
                    duration: program.duration,
                    channel: channel.id,
                    channelName: channel.name,
                    year: year,
                    description: `${program.title} - Aired in ${year} on ${channel.name}`,
                    genre: channel.category
                });

                currentHour += Math.ceil(program.duration / 60);
                programIndex++;
            }
        });

        return programs;
    }

    getProgramsForDate(channelId, date, year) {
        if (!this.epgData[year] || !this.epgData[year][channelId]) {
            return [];
        }
        return this.epgData[year][channelId];
    }

    setSelectedYear(year) {
        if (CONFIG.epg.years.includes(year)) {
            this.selectedYear = year;
            return true;
        }
        return false;
    }

    setSelectedDate(date) {
        this.selectedDate = new Date(date);
    }

    getSelectedYear() {
        return this.selectedYear;
    }

    getSelectedDate() {
        return this.selectedDate;
    }

    renderEPGTimeline(channelId) {
        const programs = this.getProgramsForDate(channelId, this.selectedDate, this.selectedYear);
        
        const timeSlots = document.getElementById('timeSlots');
        const programsContainer = document.getElementById('programsContainer');

        if (!timeSlots || !programsContainer) return;

        // Clear existing content
        timeSlots.innerHTML = '';
        programsContainer.innerHTML = '';

        // Render time slots
        timeSlots.innerHTML = '<div class="time-slot">Time</div>';
        CONFIG.epg.timeSlots.forEach(time => {
            const timeSlot = document.createElement('div');
            timeSlot.className = 'time-slot';
            timeSlot.textContent = time;
            timeSlots.appendChild(timeSlot);
        });

        // Render programs
        programsContainer.innerHTML = '<div class="channel-column">Channel</div>';
        programs.forEach(program => {
            const programBlock = document.createElement('div');
            programBlock.className = 'program-block';
            programBlock.innerHTML = `
                <div class="program-title">${program.title}</div>
                <div class="program-time">${program.startTime}</div>
                <div class="program-duration">${program.duration}m</div>
            `;

            programBlock.addEventListener('click', () => {
                this.showProgramDetails(program);
            });

            programsContainer.appendChild(programBlock);
        });
    }

    showProgramDetails(program) {
        const details = document.getElementById('programDetails');
        if (details) {
            details.innerHTML = `
                <h4>${program.title}</h4>
                <p><strong>Channel:</strong> ${program.channelName}</p>
                <p><strong>Time:</strong> ${program.startTime}</p>
                <p><strong>Duration:</strong> ${program.duration} minutes</p>
                <p><strong>Genre:</strong> ${program.genre}</p>
                <p><strong>Year:</strong> ${program.year}</p>
                <p><strong>Description:</strong> ${program.description}</p>
            `;
        }
    }

    renderAllChannelsSchedule() {
        const scheduleList = document.getElementById('scheduleList');
        if (!scheduleList) return;

        scheduleList.innerHTML = '';
        let itemCount = 0;

        CONFIG.channels.forEach(channel => {
            const programs = this.getProgramsForDate(channel.id, this.selectedDate, this.selectedYear);
            programs.slice(0, 3).forEach(program => {
                if (itemCount < 8) {
                    const item = document.createElement('div');
                    item.className = 'schedule-item';
                    item.innerHTML = `
                        <div class="time">${program.startTime}</div>
                        <div class="title">${program.title}</div>
                    `;
                    scheduleList.appendChild(item);
                    itemCount++;
                }
            });
        });
    }
}

// Initialize EPG Manager
const epgManager = new EPGManager();
