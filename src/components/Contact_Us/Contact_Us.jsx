import "./Contact_Us.css";
import { useEffect, useState } from "react";
import {
  FaFacebook,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function Contact_Us() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [attachPic, setAttachPic] = useState(null);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobileView(window.innerWidth >= 481 && window.innerWidth <= 767);
    };
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
      setErrMsg(t("UserName is required!"));
    } else if (phoneNumber === "") {
      setErrMsg(t("Phone Number is required!"));
    } else if (email === "") {
      setErrMsg(t("Please give your email!"));
    } else if (!emailValidation(email)) {
      setErrMsg(t("Give a valid Email!"));
    } else if (subject === "") {
      setErrMsg(t("please give your subject!"));
    } else if (message === "") {
      setErrMsg(t("Message is required!"));
    } else {
      setSuccessMsg(t("Thanks dear, Your Msgs has been sent successfully!"));
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
          <h2 className="contact_h2">{t("Get in touch")}</h2>
          <div className="contact_details">
            <h4 className="contact_h4">{t("Visit us")}</h4>
            <div className="contact_p">
              <p className="contact_p1">Come say hello at out office HQ.</p>
              <p className="contact_p2">
                67 Wisteria Way Croydon South VIC 3136 AU
              </p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">{t("Chat to us")}</h4>
            <div className="contact_p">
              <p className="contact_p1">Our friendly team is here to help.</p>
              <p className="contact_p2">hello@paysphere.com</p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">{t("Call us")}</h4>
            <div className="contact_p">
              <p className="contact_p1">Mon-Fir from 8am to 5pm.</p>
              <p className="contact_p2">(+995) 555-55-55-55</p>
            </div>
          </div>
          <div className="contact_details">
            <h4 className="contact_h4">{t("Social Media")}</h4>
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
          <form onSubmit={handleSend} className="contact_form">
            {errMsg && <p className="contact_err_msg">{errMsg}</p>}
            {successMsg && <p className="contact_success_msg">{successMsg}</p>}

            {isMobileView ? (
              <>
                <div className="contact_name_phone">
                  <div className="contact_field" style={{ width: "47%" }}>
                    <p className="contact_label">{t("Name")}</p>
                    <input
                      type="text"
                      className="contact_input"
                      placeholder={t("Enter your name")}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="contact_field" style={{ width: "48%" }}>
                    <p className="contact_label">{t("Phone Number")}</p>
                    <input
                      type="text"
                      className="contact_input"
                      placeholder={t("Enter your phone number")}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="contact_field">
                    <p className="contact_label">{t("Email")}</p>
                    <input
                      type="email"
                      className="contact_input"
                      placeholder={t("Enter your email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div className="contact_name_phone">
                  <div className="contact_sub_msg">
                    <div className="contact_field">
                      <p className="contact_label">{t("Subject")}</p>
                      <input
                        type="text"
                        className="contact_input"
                        placeholder={t("Enter your subject")}
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                      />
                    </div>

                    <div className="contact_field">
                      <p className="contact_label">{t("Attach Picture")}</p>
                      <input
                        type="file"
                        accept="image/*"
                        className="contact_attach"
                        value={attachPic}
                        onChange={(e) => {
                          const file = e.target.files[0];
                          if (file && file.size > 1024 * 1024) {
                            alert(t("The file size must be less than 1MB."));
                            e.target.value = "";
                          } else {
                            setAttachPic(e.target.value);
                          }
                        }}
                      />
                    </div>
                  </div>

                  <div className="contact_field">
                    <p className="contact_label">{t("Message")}</p>
                    <textarea
                      className="contact_textarea"
                      placeholder={t("Write your message")}
                      cols={10}
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="contact_name_phone">
                  <div className="contact_field" style={{ width: "47%" }}>
                    <p className="contact_label">{t("Name")}</p>
                    <input
                      type="text"
                      className="contact_input"
                      placeholder={t("Enter your name")}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="contact_field" style={{ width: "48%" }}>
                    <p className="contact_label">{t("Phone Number")}</p>
                    <input
                      type="text"
                      className="contact_input"
                      placeholder={t("Enter your phone number")}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <div className="contact_field">
                  <p className="contact_label">{t("Email")}</p>
                  <input
                    type="email"
                    className="contact_input"
                    placeholder={t("Enter your email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="contact_field">
                  <p className="contact_label">{t("Subject")}</p>
                  <input
                    type="text"
                    className="contact_input"
                    placeholder={t("Enter your subject")}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </div>

                <div className="contact_field">
                  <p className="contact_label">{t("Message")}</p>
                  <textarea
                    className="contact_textarea"
                    placeholder={t("Write your message")}
                    cols={10}
                    rows={5}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>

                <div className="contact_field">
                  <p className="contact_label">{t("Attach Picture")}</p>
                  <input
                    type="file"
                    accept="image/*"
                    className="contact_attach"
                    value={attachPic}
                    onChange={(e) => {
                      const file = e.target.files[0];
                      if (file && file.size > 1024 * 1024) {
                        alert(t("The file size must be less than 1MB."));
                        e.target.value = "";
                      } else {
                        setAttachPic(e.target.value);
                      }
                    }}
                  />
                </div>
              </>
            )}

            <div className="contact_submit">
              <button
                className="contact_submit_button"
                type="submit"
                onClick={handleSend}
              >
                {t("Send Message")}
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
