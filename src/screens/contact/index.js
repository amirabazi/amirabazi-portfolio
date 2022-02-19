import { React, useState, useEffect } from "react";
import Input from "../../components/input";

const Contact = () => {

    const [data, setData] = useState("");
    const [formData, setFormData] = useState({
        name: String
    })

    return (
        <div className="contact">
            <h1>If you like my work feel free to contact me</h1>
            <form className="contact-form">
                <Input type="text" placeHolder="Name" valueSetter={setFormData} />
            </form>
        </div>
    );
};

export default Contact;
