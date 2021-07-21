import React from 'react';
import '../styles/Contact.css';
import emailjs from 'emailjs-com';


function Contact() {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_1uj3ulq', 'template_ms24n89', e.target, 'user_t1FqZ8AjB9XGvKmpGfhRS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Email sent successfully!")

    }

    return (
        <form onSubmit={sendEmail} className="contact-me" id="contact-me">
            <p>If You Have Any Projects in Mind...</p>
            <h1>Contact Me</h1> 
            <div className="contact-form">
                <div className="contact-form-left">
                    <label for="first-name">First Name</label>
                    <input type="text" id="first-name" name="first-name" required/>  
                    <label for="last-name">Last Name</label>
                    <input type="text" id="last-name" name="last-name" placeholder="Optional"/>
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required/>
                    <label for="phone-number">Phone Number</label>
                    <input type="text" id="phone-number" name="phone-number" placeholder="Optional"/>
                </div>
                <div className="contact-form-right">
                    <label for="form-message" required>Message</label>
                    <textarea id="form-message" name="form-message"></textarea>
                </div>
                
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Contact