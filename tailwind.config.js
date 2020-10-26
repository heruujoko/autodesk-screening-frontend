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
                    '300': '#90cdf4',
                    '400': '#006eaf',
                    '700': '#2b6cb0'
                }
            }
        }
    },
    variants: {},
    plugins: [],
}