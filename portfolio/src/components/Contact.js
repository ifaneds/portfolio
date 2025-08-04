import React, { useRef, useState, useCallback } from "react";

export default function Contact() {
  const formRef = useRef({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = useCallback((e) => {
    formRef.current[e.target.id] = e.target.value;
  }, []);

  const handleOpenEmailApp = useCallback((e) => {
    e.preventDefault();

    const recipientEmail = "ifaneds1@gmail.com";
    const formData = formRef.current;

    const subject = encodeURIComponent(
      `Portfolio Contact: Message from ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Message:\n${formData.message}`
    );

    const mailtoLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;

    setStatus("Your email app is opening...");

    // Clear form data immediately without setTimeout
    formRef.current = { name: "", email: "", message: "" };
    
    // Use a single timeout to update status
    const timeoutId = setTimeout(() => {
      setStatus("Please send the message from your email application.");
    }, 1500);

    return () => clearTimeout(timeoutId);
  }, []);

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
              placeholder="Your name"
              defaultValue=""
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
              defaultValue=""
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
              defaultValue=""
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
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
