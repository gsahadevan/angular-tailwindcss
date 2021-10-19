const colors = require('tailwindcss/colors');
module.exports = {
    mode: 'jit',
    purge: ['./src/**/*.{html,ts}'],
    darkMode: 'class', // or 'media' or 'class'
    theme: {
        extend: {
            colors: {
                gray: colors.trueGray,
                gray: {
                    900: '#202225',
                    800: '#2f3136',
                    700: '#36393f',
                    600: '#4f545c',
                    400: '#d4d7dc',
                    300: '#e3e5e8',
                    200: '#ebedef',
                    100: '#f2f3f5',
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
