import { apiRequest } from "./http.js";

export function submitContactForm(formData) {
  return apiRequest("/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });
}
