module.exports = {
    baseUrl: 'http://bhagavadgitausa.com',
    mappings: [
        // 1. Static Informational Pages
        {
            originalUrl: '/Default.html',
            pageTitle: 'BhagavadGita Home',
            newPath: 'index.html',
            category: 'Home',
            type: 'static'
        },
        {
            originalUrl: '/AUM_OM.htm',
            pageTitle: 'About AUM / AUM-OM',
            newPath: 'about/about-aum.html',
            category: 'About',
            type: 'static'
        },
        {
            originalUrl: '/SayingsOfRamakrishnaParamahamsa.pdf',
            pageTitle: 'Sayings of Sri Ramakrishna',
            newPath: 'resources/ramakrishna-sayings.html',
            category: 'Resources',
            type: 'article'
        },
        // 2. Bhagavad Gita Chapters (Full List)
        ...Array.from({ length: 18 }, (_, i) => {
            const num = (i + 1).toString().padStart(2, '0');
            return {
                originalUrl: `/bg${num}.htm`,
                pageTitle: `Bhagavad Gita Chapter ${i + 1}`,
                newPath: `bhagavadgita/chapters/bg${num}.html`,
                category: 'BhagavadGita',
                type: 'chapter',
                chapter: i + 1
            };
        }),
        // 3. Yogic & Spiritual Topics
        {
            originalUrl: '/kundalini_power.htm',
            pageTitle: 'Kundalini Power',
            newPath: 'yoga/kundalini.html',
            category: 'Yoga',
            type: 'article'
        },
        {
            originalUrl: '/kundalini-serpent power.htm',
            pageTitle: 'Kundalini Serpent Power',
            newPath: 'yoga/kundalini-serpent.html',
            category: 'Yoga',
            type: 'article'
        },
        {
            originalUrl: '/SivaSutras.htm',
            pageTitle: 'Siva Sutras',
            newPath: 'yoga/siva-sutras.html',
            category: 'Yoga',
            type: 'article'
        },
        {
            originalUrl: '/BINDU.htm',
            pageTitle: 'BINDU',
            newPath: 'yoga/bindu.html',
            category: 'Yoga',
            type: 'article'
        },
        {
            originalUrl: '/TANTRA.htm',
            pageTitle: 'TANTRA',
            newPath: 'tantra/tantra-intro.html',
            category: 'Tantra',
            type: 'article'
        },
        // 4. Upanishads (Selected)
        { originalUrl: '/IsaUpanisad.htm', pageTitle: 'Isa Upanishad', newPath: 'upanishads/individual/isa.html', category: 'Upanishads' },
        { originalUrl: '/JabalaUpanisad.htm', pageTitle: 'Jabala Upanishad', newPath: 'upanishads/individual/jabala.html', category: 'Upanishads' },
        { originalUrl: '/KathaUpanisad.htm', pageTitle: 'Katha Upanishad', newPath: 'upanishads/individual/katha.html', category: 'Upanishads' },
        { originalUrl: '/MandukyaUpanisad.htm', pageTitle: 'Mandukya Upanishad', newPath: 'upanishads/individual/mandukya.html', category: 'Upanishads' }
    ],
    navigation: {
        home: { title: 'Home', href: '/index.html' },
        gita: {
            title: 'Bhagavad Gita',
            items: [
                { title: 'Overview', href: '/bhagavadgita/introduction.html' },
                { title: 'Chapters', href: '/bhagavadgita/chapters/' }
            ]
        },
        upanishads: {
            title: 'Upanishads',
            items: [
                { title: 'Isa', href: '/upanishads/individual/isa.html' },
                { title: 'Jabala', href: '/upanishads/individual/jabala.html' },
                { title: 'Katha', href: '/upanishads/individual/katha.html' },
                { title: 'Mandukya', href: '/upanishads/individual/mandukya.html' }
            ]
        },
        yoga: {
            title: 'Yoga & Spiritual',
            items: [
                { title: 'Kundalini', href: '/yoga/kundalini.html' },
                { title: 'Siva Sutras', href: '/yoga/siva-sutras.html' },
                { title: 'Bindu', href: '/yoga/bindu.html' },
                { title: 'Tantra', href: '/tantra/tantra-intro.html' }
            ]
        },
        about: {
            title: 'About',
            items: [
                { title: 'Mission', href: '/about/about-mission.html' },
                { title: 'About AUM', href: '/about/about-aum.html' },
                { title: 'Ramakrishna Sayings', href: '/resources/ramakrishna-sayings.html' }
            ]
        }
    }
};
