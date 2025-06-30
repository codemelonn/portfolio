/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html", "./src/**/*.js"],
    theme: {
        colors: {
            antiqueWhite: "#faebd7",
            alabaster: "#eefef8",

            puce: "#cc8899",
            cherryBlossomPink: "#e9acbb",
            softPink: "#f5c8c4",
            springCoral: "#f59c9a",
            peachFuzz: "#ffbe98",

            peach: "#fcebbf",
            butterYellow: "#ffe7ab",

            columbiaBlue: "#c9b297",
            periwinklePaleBlue: "#9eccf0",
            azure: "#d6e6e7",

            cambridgeBlue: "#8fbc93",
            pistachioGreen: "#c5dba9",
            citron: "#c5cc82",
            mossGreen: "#97a13b",

            amaranthPink: "#e0a3bb",
            lavenderBlush: "#f4dfe6",

            sweetPink: "#f1d1da", 
            windowGrey: "#bebbb0", 
            titlePink: "#eeb1bf", 
        },

        fontFamily: {
            byteBounce: ['"Byte Bounce"', "sans-serif"],
            orangeKid: ['"Orange Kid"', "sans-serif"], 
            retroByte: ['"Retro Byte"', "sans-serif"], 
            vpPixel: ['"VP Pixel"', "sans-serif"], 
            computerPixel: ['"Computer Pixel"', "sans-serif"], 
            ffPath: ['"FF Path"', "sans-serif"], 
            blockBlueprint: ['"Block Blueprint"', "sans-serif"], 
            
        },

        extend: {},
    },
    plugins: [],
};
