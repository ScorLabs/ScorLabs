"use strict";

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

function setMenu(open) {
  menu.setAttribute("aria-expanded", String(open));
  menu.setAttribute("aria-label", open ? "关闭导航菜单" : "打开导航菜单");
  nav.classList.toggle("is-open", open);
}

menu.addEventListener("click", () => setMenu(menu.getAttribute("aria-expanded") !== "true"));
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) setMenu(false);
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && menu.getAttribute("aria-expanded") === "true") {
    setMenu(false);
    menu.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!nav.contains(event.target) && !menu.contains(event.target)) setMenu(false);
});
window.matchMedia("(min-width: 761px)").addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});
