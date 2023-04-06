module.exports = {
    mode   : "jit",
    content: [
        "./views/pages/**/*.ejs",
        "./views/components/**/*.ejs",
    ],
    theme  : {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1280px"
        },
        extend: {
            container: {
                center: true,
                padding: "1rem"
            },
        }
    },
}