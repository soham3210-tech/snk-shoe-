import { Fragment } from "react";
import "../CSS/Contact.css";

import {
    Email,
    Phone,
    Store,
    LocationOn,
} from "@mui/icons-material";

const Contact = () => {
    return (
        <Fragment>
            <section className="contact-page-container">
                {/* LEFT */}
                <div className="contact-page-info">
                    <h1 className="contact-heading">Contact Us</h1>

                    <p className="contact-paragraph">
                        If you have any questions, feedback, or concerns about
                        <strong> SpectaStyle</strong>, we are here to assist you. Our team
                        is dedicated to providing top-quality shoes and exceptional customer
                        service. You can reach us through email, phone, or by filling out
                        the contact form. Your satisfaction is our priority, and we'll
                        respond as quickly as possible.
                    </p>

                    <h2 className="contact-subheading">Reach Us</h2>

                    <p className="contact-paragraph">
                        <strong>Email:</strong> support@spectastyle.com
                        <br />
                        <strong>Phone:</strong> +91 565 8989 878
                        <br />
                        <strong>Address:</strong> 1234 Smart Street, Nagpur 440058
                    </p>

                    <h2 className="contact-subheading">Visit Our Store</h2>

                    <p className="contact-paragraph">
                        Experience our latest footwear collection in person. Our friendly
                        team is always ready to help you find the perfect pair.
                    </p>

                    <h2 className="contact-subheading">Stay Connected</h2>

                    <p className="contact-paragraph">
                        Follow SpectaStyle on social media for the newest arrivals,
                        exclusive offers, style inspiration, and customer updates.
                    </p>

                    <div className="contact-social-icons">
                        <Email />
                        <Phone />
                        <LocationOn />
                        <Store />
                    </div>
                </div>

                {/* RIGHT */}
                <div className=" contact-page-form">
                    <h2 className="contact-subheading">Send Us a Message</h2>

                    <form>
                        <div className="contact-form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder="Your Full Name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <button type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>
        </Fragment>
    );
};

export default Contact;