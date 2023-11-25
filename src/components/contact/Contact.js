import React, { useRef, useState } from 'react'
import dubbeez from '../../assets/dubbeez-logo.png'
import glo from '../../assets/glo-els_collections.png'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import InstagramIcon from '../../assets/instagram.png'
import Github from '../../assets/Github (2).png'
import emailjs from '@emailjs/browser';
import './contact.css'
import { toast } from 'react-toastify'

function Contact() {
  const form = useRef()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  let facebookLink = "https://www.facebook.com/princes.jp.3?mibextid=nW3QTL"
  let twitterLink = "@pauljul08641909"
  let github = "https://github.com/Sagacious247"

  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleEmail = (e) => {setEmail(e.target.value)}
  const handleMessage = (e) => {setMessage(e.target.value)}

  const sendEmail = (e) => {
    e.preventDefault();
    if(name === "" || email === "" || message === "") {
      toast.error("Fill in the form before submiting")
      return
    }

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY )
      .then((result) => {
          console.log(result.text);
          toast.success('Email sent successful.')
          
      }, (error) => {
          toast.error('Something went wrong', error);
        });
        setName("")
        setEmail("")
        setMessage("")
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

  return (
    <section className='contactContainer'>
        <div id='clients'>
         <h1 className='contactTitle'>My Clients</h1>
         <p className='clientsDetails'>I have had the opportunity to work with a diverse groupt of companies.
            Some of the notable companies i have worked with includes:
         </p>
         <div className='clientImgs'>
            <img className='clientImg'  src={glo} alt='Collections'/>
            <img className='clientImg' src={dubbeez} alt='Dubbeez Ventures'/>
            <img className='clientImg' src={FacebookIcon} alt='Collections'/>
            <img className='clientImg' src={dubbeez} alt='Dubbeez Ventures'/>
            
         </div>
        </div>
        <div id='contacts'>
          <div className='contactTitle'>Contact Me</div>
          <span className='contactDetails'>Please fill out the form below to discuss any work opportunities.</span>
          <form 
          className='contactForm' 
          ref={form} 
          onSubmit={sendEmail}>
            <input type='text' 
            className='name'
            placeholder='Your Name' 
            name='name'
            value={name}
            onChange={handleName}
            />
            <input 
            type='email' 
            className='email'
            placeholder='Your Email' 
            name='email'
            value={email}
            onChange={handleEmail}
            />
            <textarea 
            className='msg' 
            name='message'
            rows="5" 
            placeholder='Your Message'
            value={message}
            onChange={handleMessage}
            >
            </textarea>
            <button type='submit' value="send" className='submitBtn'>submit</button>
            <div className='links'>
              
              <a href={github}>
                <img src={Github} alt='Youtube' className='link'/>
              </a>
              <a href={facebookLink}>
                <img src={FacebookIcon} alt='Facebook' className='link'/>
              </a>
              <a href={twitterLink}>
                <img src={TwitterIcon} alt='Twitter' className='link'/>
              </a>
                <img src={InstagramIcon} alt='Instagram' className='link'/>
            </div>
          </form>
        </div>
    </section>
  )
}

export default Contact