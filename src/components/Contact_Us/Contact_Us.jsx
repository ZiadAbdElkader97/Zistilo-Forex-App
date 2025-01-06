import "./Contact_Us.css";
import { useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

export default function Contact_Us() {
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [attachPic, setAttachPic] = useState(null);

  // ============== Email Validation Start ==============

  const emailValidation = () => {
    return String(email)
      .toLocaleLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
  };

  // ============== Email Validation End ==============

  const handleSend = (e) => {
    e.preventDefault();
    if (username === "") {
      setErrMsg("UserName is required!");
    } else if (phoneNumber === "") {
      setErrMsg("Phone Number is required!");
    } else if (email === "") {
      setErrMsg("Please give your email!");
    } else if (!emailValidation(email)) {
      setErrMsg("Give a valid Email!");
    } else if (subject === "") {
      setErrMsg("please give your subject!");
    } else if (message === "") {
      setErrMsg("Message is required!");
    } else {
      setSuccessMsg(`Thanks dear, Your Msgs has been sent successfully!`);
      setErrMsg("");
      setUsername("");
      setEmail("");
      setSubject("");
      setPhoneNumber("");
      setMessage("");
      setAttachPic("");
    }
  };

  return (
    <div className="contact">
      <div className="contact_left">
        <div className="contact_left_info">
          <h2 className="contact_h2">Get in touch</h2>
          <div className="contact_details">
            <h4 className="contact_h4">Visit us</h4>
            <div className="contact_p">
              <p className="contact_p1">Come say hello at out office HQ.</p>
              <p className="contact_p2">
                67 Wisteria Way Croydon South VIC 3136 AU
              </p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">Chat to us</h4>
            <div className="contact_p">
              <p className="contact_p1">Our friendly team is here to help.</p>
              <p className="contact_p2">hello@paysphere.com</p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">Call us</h4>
            <div className="contact_p">
              <p className="contact_p1">Mon-Fir from 8am to 5pm.</p>
              <p className="contact_p2">(+995) 555-55-55-55</p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">Social Media</h4>
            <div className="contact_icons">
              <i>
                <FaFacebook />
              </i>
              <i>
                <FaLinkedinIn />
              </i>
              <i>
                <FaInstagram />
              </i>
              <i>
                <FaTwitter />
              </i>
            </div>
          </div>
        </div>
      </div>
      <div className="contact_right">
        <div className="contact_right_info">
          <form className="contact_form">
            {errMsg && <p className="contact_err_msg">{errMsg}</p>}
            {successMsg && <p className="contact_success_msg">{successMsg}</p>}
            <div className="contact_name_phone">
              <div className="contact_field" style={{ width: "47%" }}>
                <p className="contact_label">Name</p>
                <input
                  type="text"
                  className="contact_input"
                  placeholder="Enter your name"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="contact_field" style={{ width: "48%" }}>
                <p className="contact_label">Phone Number</p>
                <input
                  type="text"
                  className="contact_input"
                  placeholder="Enter your phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>

            <div className="contact_field">
              <p className="contact_label">Email</p>
              <input
                type="email"
                className="contact_input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contact_field">
              <p className="contact_label">Subject</p>
              <input
                type="text"
                className="contact_input"
                placeholder="Enter your subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              />
            </div>

            <div className="contact_field">
              <p className="contact_label">Message</p>
              <textarea
                className="contact_textarea"
                placeholder="Write your message"
                cols={30}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>

            <div className="contact_field">
              <p className="contact_label">Attach Picture</p>
              <input
                type="file"
                accept="image/*"
                className="contact_attach"
                value={attachPic}
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (file && file.size > 1024 * 1024) {
                    alert("The file size must be less than 1MB.");
                    e.target.value = "";
                  } else {
                    setAttachPic(e.target.value);
                  }
                }}
              />
            </div>

            <div className="contact_submit">
              <button
                className="contact_submit_button"
                type="submit"
                onClick={handleSend}
              >
                Send Message
              </button>
            </div>
            {errMsg && <p className="contact_err_msg">{errMsg}</p>}
            {successMsg && <p className="contact_success_msg">{successMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
