import React from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';


export default function Contact() {
    const form=useRef()
    
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_5d5l5xa', 'template_mss1bcw', form.current, 'v6xi4gl_cSNzGhAwZ')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
      };

  return (
    <div>
      <section>
        <form action=""  ref={form} onSubmit={sendEmail}>
        <div className="container">
            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
            <input type="email" className="form-control" id="exampleFormControlInput1" name='user_email' placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your Full Name</label>
            <input type="text" className="form-control" id="fullName" name='user_name 'placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Enter your PRN number</label>
            <input type="" className="form-control" id="prn" placeholder=""/>
            </div>

            <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Your Abstract</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" name='message'rows="3"></textarea>
            </div>

            <div className="mb-3">
            <button type="submit" className="btn btn-success">Send Request</button>
            </div>
            


        </div>
        </form>
      </section>
    </div>
  )
}
