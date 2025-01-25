import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import "./MailingList.css";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function MailingList() {
  const { t } = useTranslation();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [birthday, setBirthday] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [isMobileLandscape, setIsMobileLandscape] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      const isLandscape = window.matchMedia("(orientation: landscape)").matches;
      setIsMobileLandscape(window.innerWidth < 1200 && isLandscape);
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
    } else if (email === "") {
      setErrMsg(t("Please give your email!"));
    } else if (!emailValidation(email)) {
      setErrMsg(t("Give a valid Email!"));
    } else if (phoneNumber === "") {
      setErrMsg(t("Phone Number is required!"));
    } else if (birthday === "") {
      setErrMsg(t("Birthday is required!"));
    } else {
      setSuccessMsg(t(`Thanks dear, Your Msgs has been sent successfully!`));
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
          <h2 className="mailing_h2">{t("Get in touch")}</h2>
          <div className="mailing_details">
            <h4 className="mailing_h4">{t("Visit us")}</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Come say hello at out office HQ.</p>
              <p className="mailing_p2">
                67 Wisteria Way Croydon South VIC 3136 AU
              </p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">{t("Chat to us")}</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Our friendly team is here to help.</p>
              <p className="mailing_p2">hello@paysphere.com</p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">{t("Call us")}</h4>
            <div className="mailing_p">
              <p className="mailing_p1">Mon-Fir from 8am to 5pm.</p>
              <p className="mailing_p2">(+995) 555-55-55-55</p>
            </div>
          </div>
          <div className="mailing_details">
            <h4 className="mailing_h4">{t("Social Media")}</h4>
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
          <form onSubmit={handleSend} className="mailing_form">
            {errMsg && <p className="mailing_err_msg">{errMsg}</p>}
            {successMsg && <p className="mailing_success_msg">{successMsg}</p>}

            {isMobileLandscape ? (
              <>
                <div className="mailing_field_group">
                  <div className="mailing_field">
                    <p className="mailing_label">{t("Name")}</p>
                    <input
                      type="text"
                      className="mailing_input"
                      placeholder={t("Enter your name")}
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="mailing_field">
                    <p className="mailing_label">{t("Email")}</p>
                    <input
                      type="email"
                      className="mailing_input"
                      placeholder={t("Enter your email")}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="mailing_field_group">
                  <div className="mailing_field">
                    <p className="mailing_label">{t("Phone Number")}</p>
                    <input
                      type="text"
                      className="mailing_input"
                      placeholder={t("Enter your phone number")}
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>

                  <div className="mailing_field">
                    <p className="mailing_label">{t("Birthday")}</p>
                    <input
                      type="date"
                      className="mailing_input"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="mailing_field">
                  <p className="mailing_label">{t("Name")}</p>
                  <input
                    type="text"
                    className="mailing_input"
                    placeholder={t("Enter your name")}
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>

                <div className="mailing_field">
                  <p className="mailing_label">{t("Email")}</p>
                  <input
                    type="email"
                    className="mailing_input"
                    placeholder={t("Enter your email")}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="mailing_field">
                  <p className="mailing_label">{t("Phone Number")}</p>
                  <input
                    type="text"
                    className="mailing_input"
                    placeholder={t("Enter your phone number")}
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                <div className="mailing_field">
                  <p className="mailing_label">{t("Birthday")}</p>
                  <input
                    type="date"
                    className="mailing_input"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
              </>
            )}

            <div className="mailing_submit">
              <button
                className="mailing_submit_button"
                type="submit"
                onClick={handleSend}
              >
                {t("Submit")}
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
