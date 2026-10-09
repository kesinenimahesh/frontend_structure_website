import { submitContactForm } from "../api/contact.api.js";
import { isValidEmail } from "../utils/validators.js";

export function initContactPage() {
  const form = document.querySelector("#contact-form");
  const status = document.querySelector("#form-status");

  if (!form || !status) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!form.reportValidity()) return;

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      message: String(formData.get("message") || "").trim()
    };

    if (!isValidEmail(payload.email)) {
      status.textContent = "Please enter a valid email address.";
      status.classList.add("error");
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = "Sending…";

    try {
      await submitContactForm(payload);
      status.textContent = "Thank you. Your enquiry was sent successfully.";
      status.classList.add("success");
      form.reset();
    } catch (error) {
      status.textContent =
        "We could not send your enquiry. Please check that the backend API is running and configured, then try again.";
      status.classList.add("error");
      console.error("Contact form request failed:", error.message);
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
