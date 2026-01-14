/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.html", "./src/**/*.js"],
    theme: {
        extend: {
            colors: {
                // BROWNS / NEUTRALS
                vanilla: "#fff9f5",
                vanillaCream: "#fff3ec",
                sailboatMarina: "#f2ead5",
                bone: "#e6d7c4",
                tan: "#cfbb9a",
                milkTeaBrown: "#a58d7f",
                milkBrown: "#a2756c",
                ashyBrown: "#5e473d",
                coffeeBrown: "#5e4034",
                cocoaBrown: "#6e4b47",
                cocoaText: "#5c4238",
                ink: "#38221a",
                inkBlack: "#2f1e1e",
                cafeNoir: "#4b3d1a",
                blushMilk: "#fae7e7",

                // GREENS / EARTH TONES
                mintGlint: "#d0eed6",
                mintDust: "#cbe3c0",
                mossGreen: "#899064",
                melonRind: "#a7a155",
                kombuGreen: "#364025",

                // YELLOWS / WARM TONES
                sweetTarts: "#d3c98b",
                nuttyBrown: "#a66c44",

                // PINKS / BLUSHES
                whisperPink: "#fce9ec",
                blushPink: "#f2b6cc",
                bubblegumPink: "#fca3bf",
                shellPink: "#f7b2b7",
                dutchTulips: "#f5b6a7",
                roseBlush: "#d8a48f",
                peachBlush: "#bb8487",
                sweetPink: "#ffd3da",
                sweeterPink: "#ffdbe0",
            },

            fontFamily: {
                vpPixel: ['"VP Pixel"', "sans-serif"],
                blockBlueprint: ['"Block Blueprint"', "sans-serif"],
                MicrosoftOG: ['"Microsoft OG"', "sans-serif"],
                VCR: ['"VCR"', "sans-serif"],
                NDS: ['"NDS"', "sans-serif"],
            },
        },
    },
    plugins: [],
};
