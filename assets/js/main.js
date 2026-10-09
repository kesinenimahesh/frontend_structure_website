import { initNavbar } from "./components/navbar.js";
import { initFooter } from "./components/footer.js";
import { initContactPage } from "./pages/contact.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();
  initFooter();

  const page = document.body.dataset.page;
  if (page === "contact") {
    initContactPage();
  }
});
