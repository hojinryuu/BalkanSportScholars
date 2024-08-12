import { useState } from 'react';
import '../styles/contact.css';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const contact = { name, email, message };

        const response = await fetch('/api/contacts', {
            method: 'POST',
            body: JSON.stringify(contact),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();

        if (!response.ok) {
            setError(json.error);
        }
        if (response.ok) {
            setName('');
            setEmail('');
            setMessage('');
            setError(null);
            console.log('new form added', json);
        }
    };

    return (
        <section className="contact">
            <div className="container-contact">
                <h1>Contact Us</h1>
                <div className="contact-temp">
                    <div className="contact-form">
                        <form onSubmit={handleSubmit}>
                            <input
                                type="text"
                                name="name"
                                placeholder="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></textarea>
                            <input type="submit" value="Submit" />
                            {error && <div className="error">{error}</div>}
                        </form>
                    </div>
                    <div className="contact-info">
                        <h1>Contact Information</h1>
                        <div className="contact-icons">
                            <i className="material-icons">email</i>
                            <span>balkansportscholars@gmail.com</span>
                        </div>
                        <div className="contact-icons">
                            <i className="material-icons">phone</i>
                            <span>+12523738698, +13472781736, +355698355522</span>
                        </div>
                        <div className="social">
                            <div className="social-logo">
                                <i id="social-icon" className="fab fa-facebook"></i>
                                <span>Balkan Sport Scholars</span>
                            </div>
                            <div className="social-logo">
                                <i id="social-icon" className="fab fa-instagram"></i>
                                <span>balkansportscholars</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
