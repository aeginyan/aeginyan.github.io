// Each name must match a [data-theme] block in css/styles.css.
const themes = ["gulf", "mclaren", "jps", "martini"];
const root = document.documentElement;

root.dataset.theme = themes[Math.floor(Math.random() * themes.length)];

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".monogram").addEventListener("click", () => {
        root.dataset.theme = themes[(themes.indexOf(root.dataset.theme) + 1) % themes.length];
    });
});
