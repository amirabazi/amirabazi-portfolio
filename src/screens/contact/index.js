import { React, useState, useEffect } from "react";
import Input from "../../components/input";
import { FaUserAlt, FaMailBulk, FaAlignJustify } from "react-icons/fa";
import { BiText } from "react-icons/bi";
import Fade from 'react-reveal/Fade';

const Contact = () => {

    const [messageSent, setMessageSent] = useState(false);
    const [formData, setFormData] = useState({
        name: String,
        mail: String,
        subject: String,
        message: String,
    })
    const nameHandle = (e) => {
        setFormData({ ...formData, name: (e.target.value) });
    }
    const mailHandle = (e) => {
        setFormData({ ...formData, mail: (e.target.value) });
    }
    const subjectHandle = (e) => {
        setFormData({ ...formData, subject: (e.target.value) });
    }
    const messageHandle = (e) => {
        setFormData({ ...formData, message: (e.target.value) });
    }

    const submitMessage = (e) => {
        e.preventDefault();
        setMessageSent(true);
        setFormData({
            name: String,
            mail: String,
            subject: String,
            message: String,
        });
    }

    useEffect(() => {
        setTimeout(() => {
            setMessageSent(false);
        }, 3000)
    }, [messageSent])

    return (
        <div className="contact">
            <Fade bottom >
                <h2>If you like my work feel free to contact me</h2>
                <div className="contact-wrapper">
                    <form className="contact-form" onSubmit={(e) => { submitMessage(e) }}>
                        <Input type="text"
                            icon={<FaUserAlt />}
                            placeHolder="Full Name"
                            className="contact-input"
                            value={formData?.name}
                            changeHandler={nameHandle} />
                        <Input type="text"
                            icon={<FaMailBulk />}
                            placeHolder="Mail"
                            className="contact-input"
                            value={formData?.mail}
                            changeHandler={mailHandle} />
                        <Input type="text"
                            icon={<FaAlignJustify />}
                            placeHolder="Subject"
                            className="contact-input"
                            value={formData?.subject}
                            changeHandler={subjectHandle} />
                        <div className="textarea-input">
                            <span className="input-icon"><BiText /></span>
                            <textarea required
                                name="message"
                                id="message"
                                placeholder="Message"
                                cols="30"
                                rows="10"
                                value={formData?.message}
                                onChange={(e) => { messageHandle(e) }}
                            >
                            </textarea>
                        </div>
                        <button type="submit">Send Message</button>
                        {messageSent ?
                            <p className="notification">Message sent sucessfully</p>
                            : null
                        }
                    </form>
                    <div className="info">
                        <p>Amir Abazi</p>
                        <p>BiH, Sarajevo</p>
                        <p>abaziamirr@gmail.com</p>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default Contact;
