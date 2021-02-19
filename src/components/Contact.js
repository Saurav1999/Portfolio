import React, { useState} from "react";
import { init } from "emailjs-com";
import emailjs from "emailjs-com";
import Loader from "react-loader-spinner";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import notificationsound from '../assets/notification.mp3';

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
      // notificationRef.addNotification({ text: 'Some info', isInfo: true });
      playNotification();
      NotificationManager.error('Please fill all the required details.',"Couldn't send your message",2500);
      setSending(false);
      return
    }
    if(email.error ){
      playNotification();
      NotificationManager.error('Please enter a valid E-mail Id.',"Couldn't send your message",2500);
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
        playNotification();
        NotificationManager.success('Thank you.',"Message sent successfully",2500);
        setSending(false);
      })
      .catch((err) =>
      {
        console.error(
          "There has been an error.  Here some thoughts on the error that occured:",
          err
        )
        playNotification();
        NotificationManager.error('Something went wrong. Please connect through other medium',"Couldn't send your message",2500);
      
    })
  };

  return (
    <div className="section contact grid" >
      <div className="contact-content grid">
        <p className="primary-heading" id="contact">CONTACT ME</p>
        <h2>Get In Touch</h2>
        <div className="form-container">
        <NotificationContainer/>
          <form class="contact__form" autoComplete="off">
            <div class="input-group">
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
              <label htmlFor="name" class="input-group__placeholder">
                Name*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div class="input-group">
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
              <label htmlFor="email" class="input-group__placeholder">
                Email*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div class="input-group">
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
              <label htmlFor="subject" class="input-group__placeholder">
                Subject*
              </label>

              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>
            <div class="input-group">
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
              <label htmlFor="subject" class="input-group__placeholder">
                Message*
              </label>
              <div className="bottom-line"></div>
              <div className="error">*This is a required field</div>
            </div>

            {/* <button class="button" type="submit">
              Send
            </button> */}

            <button className="btn-yellow" type="submit" onClick={sendContact}>
              {sending ? (
                <div className="loader">
                  <Loader
                    type="ThreeDots"
                    color="#1b1b25"
                    height={50}
                    width={50}
                  />
                </div>
              ) : (
                "Send"
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
