import React, {useState} from "react";
import Joi from "joi-browser";

const ContactForm = () => {
    const [client, setClient] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

    const [errors, setErrors] = useState({});
    const [success, setSuccess] = useState(false);

    const schema = {
        name: Joi.string().min(1).max(20).required(),
        email: Joi.string().email().required(),
        subject: Joi.string().min(1).max(30).required(),
        message: Joi.string().min(1).max(255).required(),
    };

    const validateForm = (event) => {
        event.preventDefault();
        const result = Joi.validate(client, 
            schema, { abortEarly: false });
        console.log(result);
        const { error } = result;
        if (!error) {
            setSuccess(true)
            clearState();
          return null;
        } else {
          const errorData = {};
          for (let item of error.details) {
            const name = item.path[0];
            const message = item.message;
            errorData[name] = message;
          }
          setSuccess(false)
          console.log(errors);
          setErrors(errorData);
          return errorData;
        }
      };
      
      const handleSave = (event) => {
        const { name, value } = event.target;
        let errorData = { ...errors };
        const errorMessage = validateProperty(event);
        if (errorMessage) {
          errorData[name] = errorMessage;
        } else {
          delete errorData[name];
        }
        let clientData = { ...client };
        clientData[name] = value;
        setClient(clientData);
        setErrors(errorData);
      };
      
      const validateProperty = (event) => {
        const { name, value } = event.target;
        const obj = { [name]: value };
        const subSchema = { [name]: schema[name] };
        const result = Joi.validate(obj, subSchema);
        const { error } = result;
        return error ? error.details[0].message : null;
      };
      const clearState = () => {
        setClient({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      };


    return (
        <form onSubmit={validateForm} className="contact-form">
            {success && <p className="alert success">Thank you for your message. It has been sent.</p> }
            <label htmlFor="name">
                Your Name (required) 
            {errors.name && (
                <span className="alert alert-danger">
                    {errors.name}
                </span>
                )}</label>
            <input type="text" name="name" value={client.name} onChange={handleSave}/>
            
            <label htmlFor="email">
                Your Email (required)
                {errors.email && (
                <span className="alert alert-danger">
                    {errors.email}
                </span>
                )}
            </label>
            <input type="email" name="email" value={client.email} onChange={handleSave}/>
            <label htmlFor="subject">
                Subject
                {errors.subject && (
                <span className="alert alert-danger">
                    {errors.subject}
                </span>
                )}
            </label>
            <input type="text" name="subject" value={client.subject} onChange={handleSave}/>
            <label htmlFor="message">
                Your Message
                {errors.message && (
                <span className="alert alert-danger">
                    {errors.message}
                </span>
                )}
            </label>
            <textarea name="message" id="" cols="30" rows="10" value={client.message} onChange={handleSave}></textarea>
            <input type="submit" value="SEND" />
        </form>
    )
}

export default ContactForm;