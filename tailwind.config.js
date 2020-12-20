module.exports = {
    theme: {},
    variants: {
        extend: {
            margin: ['first', 'last'],
        }
    },
    plugins: [],
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            'components/**/*.vue',
            'layouts/**/*.vue',
            'pages/**/*.vue',
            'plugins/**/*.js',
            'nuxt.config.js',
            // TypeScript
            'plugins/**/*.ts',
            'nuxt.config.ts'
        ],
        options: {
            safelist: ['ml-8', 'ml-16', 'ml-24', 'ml-32'],
        }
    }
}
