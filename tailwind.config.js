module.exports = {
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        content: [
            './public/*.html',
            './src/**/*.tsx',
            './src/**/**/*.tsx',
            './src/**/*.jsx',
        ]
    },
    theme: {
        extend: {
            colors: {
                blue: {
                    '400': '#006eaf'
                }
            }
        }
    },
    variants: {},
    plugins: [],
}