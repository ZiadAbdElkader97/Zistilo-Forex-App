import "./SubscriptionPlans.css";
import { useEffect, useState } from "react";
import { LuRocket } from "react-icons/lu";
import { TiStar } from "react-icons/ti";
import { useTranslation } from "react-i18next";
import { IoMdArrowDropright, IoMdArrowDropdown } from "react-icons/io";

export default function SubscriptionPlans() {
  const { t } = useTranslation();

  const [activePlan, setActivePlan] = useState("monthly");
  const [isMobileView, setIsMobileView] = useState(false);

  const [openedPlan, setOpenedPlan] = useState(null);

  const handleToggleContent = (id) => {
    setOpenedPlan((prevOpenedPlan) => (prevOpenedPlan === id ? null : id));
  };

  useEffect(() => {
    const checkScreenSize = () => {
      const isTargetWidth = window.innerWidth < 1200;
      setIsMobileView(isTargetWidth);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

  const switchPlan = (plan) => {
    setActivePlan(plan);
  };

  return (
    <>
      {isMobileView ? (
        <>
          <div className="subPlans">
            <div className="subPlans_details">
              <span>
                {t(
                  "Get the right plan for your business. plans can be upgraded in the future."
                )}
              </span>
              <div className="details_btn">
                <button
                  className={
                    activePlan === "monthly" ? "btn1 btn_active" : "btn1"
                  }
                  onClick={() => switchPlan("monthly")}
                >
                  {t("Monthly")}
                </button>
                <button
                  className={
                    activePlan === "yearly" ? "btn2 btn_active" : "btn2"
                  }
                  onClick={() => switchPlan("yearly")}
                >
                  {t("Yearly")}
                </button>
              </div>
            </div>

            <div className="plan_section">
              <div className="plan" onClick={() => handleToggleContent(1)}>
                <i className="plan_icon">
                  {openedPlan === 1 ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                </i>
                <p className="plan_name">{t("Basic Plan")}</p>
              </div>
              {openedPlan === 1 && (
                <div className="plan_content">
                  {activePlan === "monthly" ? (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#3498db" }}>
                        {t("Basic Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$4.99</h3>
                        <span>/ {t("month")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("2TB additional storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 1GB file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 5 projects")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  ) : (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#3498db" }}>
                        {t("Basic Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$24.99</h3>
                        <span>/ {t("year")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("2TB additional storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 1GB file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 5 projects")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  )}
                </div>
              )}
              <div className="plan" onClick={() => handleToggleContent(2)}>
                <i className="plan_icon">
                  {openedPlan === 2 ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                </i>
                <p className="plan_name">{t("Standard Plan")}</p>
              </div>
              {openedPlan === 2 && (
                <div className="plan_content">
                  {activePlan === "monthly" ? (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#2ecc71" }}>
                        {t("Standard Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$9.99</h3>
                        <span>/ {t("month")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("10TB additional storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 10 projects")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  ) : (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#2ecc71" }}>
                        {t("Standard Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$29.99</h3>
                        <span>/ {t("year")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("10TB additional storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Up to 10 projects")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  )}
                </div>
              )}
              <div className="plan" onClick={() => handleToggleContent(3)}>
                <i className="plan_icon">
                  {openedPlan === 3 ? (
                    <IoMdArrowDropdown />
                  ) : (
                    <IoMdArrowDropright />
                  )}
                </i>
                <p className="plan_name">{t("Premium Plan")}</p>
              </div>
              {openedPlan === 3 && (
                <div className="plan_content">
                  {activePlan === "monthly" ? (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#9b59b6" }}>
                        {t("Premium Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$19.99</h3>
                        <span>/ {t("month")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Permanent Membership")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  ) : (
                    <div className="subPlans_card">
                      <p className="plan_name" style={{ color: "#9b59b6" }}>
                        {t("Premium Plan")}
                      </p>
                      <div className="plan_price">
                        <h3>$39.99</h3>
                        <span>/ {t("year")}</span>
                      </div>
                      <div className="plan_menu">
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited storage")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Unlimited file size")}</p>
                        </div>
                        <div className="plan_menu_list">
                          <i>
                            <TiStar />
                          </i>
                          <p>{t("Permanent Membership")}</p>
                        </div>
                      </div>
                      <button className="subPlans_btn">{t("Get Plan")}</button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="subPlans">
            <div className="subPlans_header">
              <h2>{t("Choose your plan")}</h2>
              <div className="details">
                <i>
                  <LuRocket />
                </i>
                <p>{t("14 days free trial")}</p>
              </div>
            </div>
            <div className="subPlans_details">
              <span>
                {t(
                  "Get the right plan for your business. plans can be upgraded in the future."
                )}
              </span>
              <div className="details_btn">
                <button
                  className={
                    activePlan === "monthly" ? "btn1 btn_active" : "btn1"
                  }
                  onClick={() => switchPlan("monthly")}
                >
                  {t("Monthly")}
                </button>
                <button
                  className={
                    activePlan === "yearly" ? "btn2 btn_active" : "btn2"
                  }
                  onClick={() => switchPlan("yearly")}
                >
                  {t("Yearly")}
                </button>
              </div>
            </div>
            {/* Monthly Plan */}
            {activePlan === "monthly" && (
              <div className="subPlans_cards">
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#3498db" }}>
                    {t("Basic Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$4.99</h3>
                    <span>/ {t("month")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("2TB additional storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 1GB file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 5 projects")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#2ecc71" }}>
                    {t("Standard Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$9.99</h3>
                    <span>/ {t("month")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("10TB additional storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 10 projects")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#9b59b6" }}>
                    {t("Premium Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$19.99</h3>
                    <span>/ {t("month")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Permanent Membership")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
              </div>
            )}

            {/* Yearly Plan */}
            {activePlan === "yearly" && (
              <div className="subPlans_cards">
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#3498db" }}>
                    {t("Basic Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$24.99</h3>
                    <span>/ {t("year")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("2TB additional storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 1GB file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 5 projects")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#2ecc71" }}>
                    {t("Standard Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$29.99</h3>
                    <span>/ {t("year")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("10TB additional storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Up to 10 projects")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
                <div className="subPlans_card">
                  <p className="plan_name" style={{ color: "#9b59b6" }}>
                    {t("Premium Plan")}
                  </p>
                  <div className="plan_price">
                    <h3>$39.99</h3>
                    <span>/ {t("year")}</span>
                  </div>
                  <div className="plan_menu">
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited storage")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Unlimited file size")}</p>
                    </div>
                    <div className="plan_menu_list">
                      <i>
                        <TiStar />
                      </i>
                      <p>{t("Permanent Membership")}</p>
                    </div>
                  </div>
                  <button className="subPlans_btn">{t("Get Plan")}</button>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
}
