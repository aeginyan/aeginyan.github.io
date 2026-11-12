// The liveries, in the order the monogram cycles through them.
// Each name must match a [data-theme="..."] block in css/styles.css.
const themes = ["gulf", "mclaren", "jps"];

const root = document.documentElement;

// Start on a random livery.
root.dataset.theme = themes[Math.floor(Math.random() * themes.length)];

// Clicking the æ moves to the next livery.
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("monogram").addEventListener("click", () => {
        const next = (themes.indexOf(root.dataset.theme) + 1) % themes.length;
        root.dataset.theme = themes[next];
    });
});
