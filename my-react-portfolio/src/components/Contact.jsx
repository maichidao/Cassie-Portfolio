import { useState } from "react";
import "../css/Contact.css";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialFormData = { name: "", email: "", message: "" };
const initialErrors = { name: "", email: "", message: "" };

function Contact() {
    const [formData, setFormData] = useState(initialFormData);
    const [errors, setErrors] = useState(initialErrors);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const validate = () => {
        const newErrors = { name: "", email: "", message: "" };
        let isValid = true;

        if (formData.name.trim() === "") {
        newErrors.name = "Please enter your name.";
        isValid = false;
        }
        if (!EMAIL_REGEX.test(formData.email.trim())) {
        newErrors.email = "Invalid email address.";
        isValid = false;
        }
        if (formData.message.trim() === "") {
        newErrors.message = "Please enter a mesage.";
        isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 

        if (!validate()) {
        setSubmitted(false);
        return;
        }

        // TODO: send formData to a real server
        console.log("Contact data:", formData);

        setSubmitted(true);
        setFormData(initialFormData);
        setErrors(initialErrors);

        setTimeout(() => setSubmitted(false), 4000);
    };

    return (
        <section id="contact" className="contact">
        <h2 className="section-title">Get in touch</h2>

        <div className="contact-panel">
            <form onSubmit={handleSubmit} noValidate>
            <div className={`field ${errors.name ? "invalid" : ""}`}>
                <label htmlFor="name">Full Name</label>
                <input
                type="text"
                id="name"
                placeholder="Nguyễn Văn A"
                value={formData.name}
                onChange={handleChange}
                />
                {errors.name && <div className="field-error">{errors.name}</div>}
            </div>

            <div className={`field ${errors.email ? "invalid" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                placeholder="abc@email.com"
                value={formData.email}
                onChange={handleChange}
                />
                {errors.email && <div className="field-error">{errors.email}</div>}
            </div>

            <div className={`field ${errors.message ? "invalid" : ""}`}>
                <label htmlFor="message">Your message</label>
                <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                ></textarea>
                {errors.message && (
                <div className="field-error">{errors.message}</div>
                )}
            </div>

            <button type="submit" className="btn btn-primary">
                Send Message
            </button>

            {submitted && (
                <div className="form-msg show">
                Sent successfully! Thanks for reaching out, I'll get back to you soon.
                </div>
            )}
            </form>
        </div>
        </section>
    );
}

export default Contact;
