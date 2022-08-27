import React, {useRef} from 'react'
//import emailjs from 'emailjs-com'
import emailjs from '@emailjs/browser';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_e5ps6bg', 'firstTemplate', form.current, 's93xUaAHL_O2-o8KW')
    .then((result) => {
        console.log(result.text);
      
    }, (error) => {
        console.log(error.text);
        
    });

    e.target.reset();
};

  return (
    <section id='contact'>
<h5>Get In Touch</h5>
<h2>Contact Me</h2>
<div className="container contact__container">

  <div className="contact__options">
<article className="contact__option">
  <MdOutlineEmail className='contact__option-icon'/>
  <h4>Email</h4>
  <h5>rafa@yahoo.com</h5>
  <a href='mailto:rafa@yahoo.com' target='_blank' >Send a message</a>
</article>

<article className="contact__option">
  <RiMessengerLine className='contact__option-icon'/>
  <h4>Messenger</h4>
  <h5>Rafa O</h5>
  <a href='https://m.me/ralphael.oshun' target='_blank'>Send a message</a>
</article>

<article className="contact__option">
  <BsWhatsapp  className='contact__option-icon'/>
  <h4>WhatsApp</h4>
  <h5>+447584040980</h5>
  <a href='https://api.whatsapp.com/send?phone=+447584040980' target='_blank'>Send a message</a>
</article>

  </div>

  {/**End Of Contact Option */}
  <form ref={form} onSubmit={sendEmail}>
<input type='text' name='name' placeholder='Your Full Name' required  />

<input type='email' name='email' placeholder='Your Email' required />
<textarea name='message' rows='7' placeholder='Your Message' required ></textarea>
<button type='submit' className='btn btn-primary' value='Send' >Send Message</button>


  </form>
</div>

    </section>
  )
}

export default Contact