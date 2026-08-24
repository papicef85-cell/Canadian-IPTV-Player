/**
 * Utility functions for Canadian IPTV Player
 */

const Utils = {
    /**
     * Format time from 24-hour format
     * @param {string} time - Time in HH:MM format
     * @returns {string} Formatted time string
     */
    formatTime: function(time) {
        if (!time) return 'N/A';
        const [hours, minutes] = time.split(':').map(Number);
        const date = new Date(2000, 0, 1, hours, minutes);
        return date.toLocaleTimeString('en-CA', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        });
    },

    /**
     * Format date for display
     * @param {Date} date - Date object
     * @returns {string} Formatted date string
     */
    formatDate: function(date) {
        if (!(date instanceof Date)) return 'N/A';
        return date.toLocaleDateString('en-CA', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    },

    /**
     * Format duration in minutes to readable string
     * @param {number} minutes - Duration in minutes
     * @returns {string} Formatted duration
     */
    formatDuration: function(minutes) {
        if (!minutes) return '0m';
        const hours = Math.floor(minutes / 60);
        const mins = minutes % 60;
        if (hours === 0) return `${mins}m`;
        if (mins === 0) return `${hours}h`;
        return `${hours}h ${mins}m`;
    },

    /**
     * Get current time as HH:MM string
     * @returns {string} Current time
     */
    getCurrentTime: function() {
        const now = new Date();
        return String(now.getHours()).padStart(2, '0') + ':' +
               String(now.getMinutes()).padStart(2, '0');
    },

    /**
     * Get day of week from date
     * @param {Date} date - Date object
     * @returns {string} Day name
     */
    getDayOfWeek: function(date) {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return days[date.getDay()];
    },

    /**
     * Check if date is today
     * @param {Date} date - Date to check
     * @returns {boolean} True if date is today
     */
    isToday: function(date) {
        const today = new Date();
        return date.getDate() === today.getDate() &&
               date.getMonth() === today.getMonth() &&
               date.getFullYear() === today.getFullYear();
    },

    /**
     * Debounce function
     * @param {function} func - Function to debounce
     * @param {number} wait - Wait time in ms
     * @returns {function} Debounced function
     */
    debounce: function(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    /**
     * Throttle function
     * @param {function} func - Function to throttle
     * @param {number} limit - Time limit in ms
     * @returns {function} Throttled function
     */
    throttle: function(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    /**
     * Deep clone object
     * @param {object} obj - Object to clone
     * @returns {object} Cloned object
     */
    deepClone: function(obj) {
        if (obj === null || typeof obj !== 'object') return obj;
        if (obj instanceof Date) return new Date(obj.getTime());
        if (obj instanceof Array) return obj.map(item => this.deepClone(item));
        if (obj instanceof Object) {
            const cloned = {};
            for (const key in obj) {
                if (obj.hasOwnProperty(key)) {
                    cloned[key] = this.deepClone(obj[key]);
                }
            }
            return cloned;
        }
    },

    /**
     * Check if string is URL
     * @param {string} str - String to check
     * @returns {boolean} True if valid URL
     */
    isValidURL: function(str) {
        try {
            new URL(str);
            return true;
        } catch (e) {
            return false;
        }
    },

    /**
     * Get URL parameters
     * @returns {object} Query parameters
     */
    getURLParams: function() {
        const params = {};
        new URLSearchParams(window.location.search).forEach((value, key) => {
            params[key] = value;
        });
        return params;
    },

    /**
     * Store data in localStorage
     * @param {string} key - Storage key
     * @param {*} value - Value to store
     */
    setLocalStorage: function(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.warn('localStorage error:', e);
        }
    },

    /**
     * Get data from localStorage
     * @param {string} key - Storage key
     * @param {*} defaultValue - Default if not found
     * @returns {*} Stored value or default
     */
    getLocalStorage: function(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (e) {
            console.warn('localStorage error:', e);
            return defaultValue;
        }
    },

    /**
     * Remove item from localStorage
     * @param {string} key - Storage key
     */
    removeLocalStorage: function(key) {
        try {
            localStorage.removeItem(key);
        } catch (e) {
            console.warn('localStorage error:', e);
        }
    },

    /**
     * Log with timestamp
     * @param {string} message - Message to log
     * @param {*} data - Optional data
     */
    log: function(message, data = null) {
        const time = new Date().toLocaleTimeString('en-CA');
        console.log(`[${time}] ${message}`, data || '');
    },

    /**
     * Log error with timestamp
     * @param {string} message - Error message
     * @param {Error} error - Error object
     */
    logError: function(message, error = null) {
        const time = new Date().toLocaleTimeString('en-CA');
        console.error(`[${time}] ERROR: ${message}`, error || '');
    }
};
