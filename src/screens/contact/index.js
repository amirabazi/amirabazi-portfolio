import { React, useState, useEffect } from "react";
import Input from "../../components/input";
import { FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";

const Contact = () => {

    const [data, setData] = useState("");
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

    return (
        <div className="contact">
            <h1>If you like my work feel free to contact me</h1>
            <form className="contact-form">
                <Input type="text"
                    icon={<FaLinkedinIn />}
                    placeHolder="Full Name"
                    className="contact-input"
                    value={formData?.name}
                    changeHandler={nameHandle} />
                <Input type="text"
                    placeHolder="Mail"
                    className="contact-input"
                    value={formData?.mail}
                    changeHandler={mailHandle} />
                <Input type="text"
                    placeHolder="Subject"
                    className="contact-input"
                    value={formData?.subject}
                    changeHandler={subjectHandle} />
                <Input type="text"
                    placeHolder="Message"
                    className="contact-input"
                    value={formData?.message}
                    changeHandler={messageHandle} />
            </form>
        </div>
    );
};

export default Contact;
