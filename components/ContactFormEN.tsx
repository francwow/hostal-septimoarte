"use client";

import { useState } from "react";
import Icon from "./GoogleIcon";

const ContactFormEN = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [message, setMessage] = useState("");
  const data = { name, message, email };

  function ValidateEmail(input: string) {
    const validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (input.match(validRegex)) {
      setValidEmail(true);
      return true;
    } else {
      setValidEmail(false);
      return false;
    }
  }

  return (
    <div className="form-wrapper">
      <h3>Suggestions Mailbox</h3>
      <form
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          console.log("not ready to send yet");
          setError(false);
          setSuccess(false);

          if (data.name.length === 0) {
            setError(true);
            setNameError(true);
          } else {
            setNameError(false);
          }

          if (data.email.length === 0) {
            setError(true);
            ValidateEmail(data.email);
          } else {
            ValidateEmail(data.email);
          }

          if (data.message.length === 0) {
            setError(true);
            setMessageError(true);
          } else {
            setMessageError(false);
          }

          if (
            data.name.length > 0 &&
            data.message.length > 0 &&
            ValidateEmail(data.email) === true
          ) {
            setError(false);
            setSuccess(true);
            setName("");
            setEmail("");
            setMessage("");
            console.log("message sent successfully");
            fetch("/contacto/api", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(data),
            });
          }
        }}
        className="contact-form"
      >
        <div className="field-list">
          <fieldset>
            <legend className="title">
              <span>Name</span>
              <span className="label-secondary">(required)</span>
            </legend>
            <div className="form-field-container">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  className={nameError ? "error-field" : ""}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  id="name"
                  value={name}
                />
              </div>
            </div>
          </fieldset>
          <div className="form-item">
            <label htmlFor="email">
              <span>Email</span>
              <span className="label-secondary">(required)</span>
            </label>
            <input
              className={!validEmail ? "error-email" : ""}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              id="email"
              value={email}
            />
            {!validEmail ? (
              <div style={{ marginTop: "0px" }} className="error-msg-wrapper">
                <div>
                  <h4 className="error-msg">
                    <div className="error-icon">
                      <span>!</span>
                    </div>
                    Please enter a valid email address.
                  </h4>
                </div>
              </div>
            ) : null}
          </div>
          <div className="form-item">
            <label htmlFor="message">
              <span>Message</span>
              <span className="label-secondary">(required)</span>
            </label>
            <textarea
              className={messageError ? "error-field" : ""}
              onChange={(e) => setMessage(e.target.value)}
              id="message"
              value={message}
            />
          </div>
        </div>
        {error ? (
          <div className="error-msg-wrapper">
            <div>
              <h4 className="error-msg">
                <div className="error-icon">
                  <span>!</span>
                </div>
                Please fill the required fields.
              </h4>
            </div>
          </div>
        ) : null}

        {success ? (
          <div className="success-msg-wrapper">
            <div>
              <h4 className="success-msg">
                <div className="success-icon">
                  <Icon icon="check" />
                </div>
                Message sent successfully.
              </h4>
            </div>
          </div>
        ) : null}

        <div className="form-btn-wrapper">
          <input
            type="submit"
            name="submit"
            className="form-submit"
            id="submit"
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactFormEN;
