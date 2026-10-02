const menuButton = document.querySelector("#menuButton");
const menu = document.querySelector("#menuPrincipal");
const themeButton = document.querySelector("#themeButton");
const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

menuButton.addEventListener("click", () => {
  const isOpen = menu.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll("#menuPrincipal a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

themeButton.addEventListener("click", () => {
  const darkMode = document.body.classList.toggle("dark");
  themeButton.setAttribute("aria-pressed", String(darkMode));
  themeButton.textContent = darkMode ? "Modo claro" : "Modo escuro";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "Mensagem enviada com sucesso! (Demonstração)";
  form.reset();
});
