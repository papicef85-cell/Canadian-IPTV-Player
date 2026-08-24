// Configuration for Canadian IPTV Player

const CONFIG = {
    // Canadian Specialty Networks (Legal/Public)
    channels: [
        {
            id: 'tsn',
            name: 'TSN (Sports)',
            category: 'Sports',
            logo: '🏆',
            m3u8: 'https://example.com/tsn/live.m3u8',
            description: 'The Sports Network - Canadian sports coverage'
        },
        {
            id: 'sn',
            name: 'Sportsnet',
            category: 'Sports',
            logo: '⚽',
            m3u8: 'https://example.com/sportsnet/live.m3u8',
            description: 'Sportsnet - Canadian sports and entertainment'
        },
        {
            id: 'ctv',
            name: 'CTV',
            category: 'General',
            logo: '📺',
            m3u8: 'https://example.com/ctv/live.m3u8',
            description: 'CTV Television Network - Canadian broadcast television'
        },
        {
            id: 'cbc',
            name: 'CBC Television',
            category: 'General',
            logo: '🍁',
            m3u8: 'https://example.com/cbc/live.m3u8',
            description: 'Canadian Broadcasting Corporation Television'
        },
        {
            id: 'global',
            name: 'Global TV',
            category: 'General',
            logo: '🌍',
            m3u8: 'https://example.com/global/live.m3u8',
            description: 'Global Television Network - Canadian broadcasts'
        },
        {
            id: 'htv',
            name: 'History TV',
            category: 'Documentary',
            logo: '📚',
            m3u8: 'https://example.com/history/live.m3u8',
            description: 'History Television - Canadian documentary and historical programs'
        },
        {
            id: 'disc',
            name: 'Discovery',
            category: 'Documentary',
            logo: '🔍',
            m3u8: 'https://example.com/discovery/live.m3u8',
            description: 'Discovery Channel Canada - Educational programming'
        },
        {
            id: 'bravo',
            name: 'Bravo',
            category: 'Entertainment',
            logo: '🎭',
            m3u8: 'https://example.com/bravo/live.m3u8',
            description: 'Bravo! Canada - Entertainment programming'
        },
        {
            id: 'slice',
            name: 'Slice',
            category: 'Lifestyle',
            logo: '🎬',
            m3u8: 'https://example.com/slice/live.m3u8',
            description: 'Slice - Canadian lifestyle and entertainment'
        },
        {
            id: 'showcase',
            name: 'Showcase',
            category: 'Entertainment',
            logo: '🎪',
            m3u8: 'https://example.com/showcase/live.m3u8',
            description: 'Showcase - Canadian drama and entertainment'
        }
    ],

    // EPG Timeline Settings
    epg: {
        timeSlots: ['00:00', '02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
        years: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013],
        defaultYear: 2013,
        programDuration: 60 // minutes
    },

    // UI Settings
    ui: {
        theme: 'light',
        language: 'en-CA',
        dateFormat: 'yyyy-MM-dd'
    }
};
