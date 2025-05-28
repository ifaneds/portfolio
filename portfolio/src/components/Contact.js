import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleOpenEmailApp = (e) => {
    e.preventDefault(); // Prevent default form submission to the server

    // 1. IMPORTANT: Replace 'your.email@example.com' with YOUR ACTUAL EMAIL ADDRESS
    const recipientEmail = "ifaneds1@gmail.com";

    // 2. Encode subject and body to handle special characters and line breaks
    // %0D%0A represents a new line in URL encoding
    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    // Construct the mailto link
    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

    // Attempt to open the user's default email client
    window.location.href = mailtoLink;

    setStatus("Your email app is opening...");

    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setStatus("Please send the message from your email application.");
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-heading">Get in Touch</h2>
      <div className="contact-form-container">
        <p className="contact-intro-text">
          Have a question or want to work together? Fill out the form, and your
          email application will open for you to send the message.
        </p>
        <form onSubmit={handleOpenEmailApp} className="contact-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="form-input"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="form-input"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              rows="6"
              className="form-textarea"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit" // Use type="submit" so HTML5 form validation still works
            className="submit-button"
          >
            Open Email App to Send Message
          </button>
          {status && (
            <p
              className={`status-message ${
                status.includes("sent")
                  ? "success"
                  : status.includes("opening")
                  ? "info"
                  : "error"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
