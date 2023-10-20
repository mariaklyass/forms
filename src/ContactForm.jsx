import React from "react";
import "./index.css";

function Contact() {
  return (
    <div>
      <h1 className="h1">Contact Form (go ahead, send me a message 🤗)</h1>
      <div>
        <form
          action="https://getform.io/f/b5be1e78-5f6c-4621-bdfe-42c88e597693"
          method="POST"
        >
          <input
            className="input"
            type="text"
            name="name"
            placeholder="Name"
            required
            minLength={3}
          />
          <input
            className="input"
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <textarea
            className="input"
            name="message"
            placeholder="Message"
            rows="10"
            required
          />
          <div className="center">
            <button className="contact-button" type="submit">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
