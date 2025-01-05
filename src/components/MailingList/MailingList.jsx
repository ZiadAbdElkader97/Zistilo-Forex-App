import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./MailingList.css";
import { useState } from "react";

export default function MailingList() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

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
    } else if (birthday === "") {
      setErrMsg("Birthday is required!");
    } else {
      setSuccessMsg(`Thanks dear, Your Msgs has been sent successfully!`);
      setErrMsg("");
      setUsername("");
      setEmail("");
      setPhoneNumber("");
      setBirthday("");
    }
  };

  return (
    <div className="mailing_list">
      <div className="mailing_left">
        <div className="mailing_left_info">
          <h2 className="mailing_h2">Get in touch</h2>
          <div className="mailing_details">
            <h4 className="mailing_h4">Visit us</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Come say hello at out office HQ.</p>
              <p className="mailing_p2">
                67 Wisteria Way Croydon South VIC 3136 AU
              </p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">Chat to us</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Our friendly team is here to help.</p>
              <p className="mailing_p2">hello@paysphere.com</p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">Call us</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Mon-Fir from 8am to 5pm.</p>
              <p className="mailing_p2">(+995) 555-55-55-55</p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">Social Media</h4>
            <div className="mailing_icons">
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
      <div className="mailing_right">
        <div className="mailing_right_info">
          <form className="mailing_form">
            {errMsg && <p className="mailing_err_msg">{errMsg}</p>}
            {successMsg && <p className="mailing_success_msg">{successMsg}</p>}
            <div className="mailing_field">
              <p className="mailing_label">Name</p>
              <input
                type="text"
                className="mailing_input"
                placeholder="Enter your name"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="mailing_field">
              <p className="contact_label">Email</p>
              <input
                type="email"
                className="mailing_input"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="mailing_field">
              <p className="mailing_label">Phone Number</p>
              <input
                type="text"
                className="mailing_input"
                placeholder="Enter your phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>

            <div className="mailing_field">
              <p className="mailing_label">Birthday</p>
              <input
                type="date"
                className="mailing_input"
                placeholder="Enter your phone number"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="mailing_submit">
              <button
                className="mailing_submit_button"
                type="submit"
                onClick={handleSend}
              >
                Submit
              </button>
            </div>
            {errMsg && <p className="mailing_err_msg">{errMsg}</p>}
            {successMsg && <p className="mailing_success_msg">{successMsg}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}
