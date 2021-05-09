import React, { useState} from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Loader from "react-loader-spinner";
import 'react-notifications/lib/notifications.css';
import notificationsound from '../assets/notification.mp3';
import sendIcon from "../assets/send.svg";
import {toast } from 'react-toastify';

init("user_NITjmkLgyLOvo8wvCW52i");

function Contact() {
  const [name, setName] = useState({ value: "", error: false });
  const [email, setEmail] = useState({ value: "", error: false });
  const [subject, setSubject] = useState({ value: "", error: false });
  const [message, setMessage] = useState({ value: "", error: false });
  const [sending, setSending] = useState(false);



  const mailValid = () => {
    if (
      !/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
        email.value
      )
    ) {
      return true;
    } else {
      return false;
    }
  };

  const setError = (e, value) => {
    if (`${e.target.name}` === "Name") {
      console.log(name);
      setTimeout(() => {
        setName({ ...name, error: value });
      }, 3000);
    }
    if (`${e.target.name}` === "Email") {
      setEmail({ ...email, error: value });
    }
    if (`${e.target.name}` === "Subject") {
      setSubject({ ...subject, error: value });
    }
    if (`${e.target.name}` === "Message") {
      setMessage({ ...message, error: value });
    }
  };
  const formValidation = (e) => {
    let bottomLine = e.target.nextSibling.nextSibling;
    let errorText = e.target.nextSibling.nextSibling.nextSibling;
    console.log(e.type);

    if (e.target.value.trim() === "") {
      if (e.type === "blur") {
        setError(e, true);
      }

      errorText.innerHTML = `*${e.target.name} is a required field`;
      errorText.style.opacity = "1";
      bottomLine.style.backgroundColor = "#ff0033";
      e.target.style.boxShadow = "0px 2px 5px -1px rgba(255, 0, 51, .25)";
      return true;
    } else if (e.target.name === "Email") {
      if (mailValid()) {
        bottomLine.style.backgroundColor = "#ff0033";
        errorText.innerHTML = "*Please enter a valid email";
        errorText.style.opacity = "1";
        e.target.style.boxShadow = "0px 2px 5px -1px rgba(255, 0, 51, .25)";
        if (e.type === "blur") {
          setError(e, true);
        }
        return true;
      } else {
        bottomLine.style.backgroundColor = "rgba(45, 190, 205, 1)";

        errorText.style.opacity = "0";
        if (e.type === "blur") {
          setError(e, false);
        }
        e.target.style.boxShadow = "0px 2px 5px -1px rgba(45, 190, 205, .25)";
        return false;
      }
    } else {
      bottomLine.style.backgroundColor = "rgba(45, 190, 205, 1)";
      if (e.type === "blur") {
        setError(e, false);
      }
      errorText.style.opacity = "0";

      e.target.style.boxShadow = "0px 2px 5px -1px rgba(45, 190, 205, .25)";
      return false;
    }
  };

  const playNotification = () => {
    const audio = new Audio(notificationsound);
    audio.play();
  }
  const sendContact = (e) => {
    e.preventDefault();

    if(sending)
    {
      return
    }

    setSending(true);
   

    if(name.value==="" || email.value==="" || subject.value==="" || message.value==="" ) {
   
      toast.error('Please fill all the required details.', {
        position: toast.POSITION.TOP_CENTER,
        toastId: "error-sending"
      })
      setSending(false);
      return
    }
    if(email.error ){

     
      toast.error('Please enter a valid E-mail Id.', {
        position: toast.POSITION.TOP_CENTER,
        toastId: "error-sending"
      })
      setSending(false);
      return
    }
    

    emailjs
      .send("service_5tajkbl", "template_p0yatcf", {
        from_name: name.value,
        message: message.value,
        subject: subject.value,
        email: email.value,
        to_name: "Saurav",
        reply_to: "singhsaurav1999@gmail.com",
      })
      .then((res) => {
        console.log(res);
        console.log("Email successfully sent!");
        setName({ value: "", error: "" });
        setEmail({ value: "", error: "" });
        setSubject({ value: "", error: "" });
        setMessage({ value: "", error: "" });
       
       
        toast.success('Message received. Thank you for your interest.', {
          position: toast.POSITION.TOP_CENTER,
          toastId: "success-sending",
          onOpen:() => { playNotification();}
        })
        setSending(false);
      })
      .catch((err) =>
      {
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
        // playNotification();
     
        toast.error('Something went wrong. Please connect through other medium.', {
          position: toast.POSITION.TOP_CENTER,
          toastId: "error-sending"
        })
      
    })
  };

  return (
    <div className="section contact grid" >
      <div className="contact-content grid">
        <p className="primary-heading" id="contact">CONTACT ME</p>
        <h2>Get In Touch</h2>
        <div className="form-container">
          <form className="contact__form" autoComplete="off">
            <div className="input-group">
              <input
                required
                type="text"
                name="Name"
                value={name.value}
                onChange={(e) => {
                  setName({ value: e.target.value, error: "" });
                  formValidation(e);
                }}
                onBlur={formValidation}
              />
              <label htmlFor="name" className="input-group__placeholder">
                Name*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                name="Email"
                value={email.value}
                onChange={(e) => {
                  setEmail({ value: e.target.value, error: "" });
                  formValidation(e);
                }}
                onBlur={formValidation}
              />
              <label htmlFor="email" className="input-group__placeholder">
                Email*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div className="input-group">
              <input
                required
                type="text"
                name="Subject"
                value={subject.value}
                onChange={(e) => {
                  setSubject({ value: e.target.value, error: "" });
                  formValidation(e);
                }}
                onBlur={formValidation}
              />
              <label htmlFor="subject" className="input-group__placeholder">
                Subject*
              </label>

              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div className="input-group">
              <textarea
                required
                name="Message"
                rows="9"
                value={message.value}
                onChange={(e) => {
                  setMessage({ value: e.target.value, error: "" });
                  formValidation(e);
                }}
                onBlur={formValidation}
              ></textarea>
              <label htmlFor="subject" className="input-group__placeholder">
                Message*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>

            {/* <button className="button" type="submit">
              Send
            </button> */}

            <button className="btn-yellow" type="submit" onClick={sendContact}>
            {/* <div className="loader">
                  <Loader
                    type="ThreeDots"
                    color="#503291"
                    height={50}
                    width={50}
                  />
                </div> */}
              {sending ? (
                <div className="loader">
                  <Loader
                    type="ThreeDots"
                    color="#503291"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                <div className="button-content"><div className="icon-container"><img className="icon" src={sendIcon} alt="cv icon"></img></div>Send</div>
              )}
            </button>
            {/* <Button
              size="big"
              appearance="highlight"
              className="button"
              onClick={sendContact}
            >
              
            </Button> */}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
