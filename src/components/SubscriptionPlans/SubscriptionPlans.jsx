import "./SubscriptionPlans.css";
import { useState } from "react";
import { LuRocket } from "react-icons/lu";
import { TiStar } from "react-icons/ti";

export default function SubscriptionPlans() {
  const [activePlan, setActivePlan] = useState("monthly");

  const switchPlan = (plan) => {
    setActivePlan(plan);
  };

  return (
    <div className="subPlans">
      <div className="subPlans_header">
        <h2>Choose your plan</h2>
        <div className="details">
          <i>
            <LuRocket />
          </i>
          <p>14 days free trial</p>
        </div>
      </div>
      <div className="subPlans_details">
        <span>
          Get the right plan for your business. plans can be upgraded in the
          future.
        </span>
        <div className="details_btn">
          <button
            className={activePlan === "monthly" ? "btn1 btn_active" : "btn1"}
            onClick={() => switchPlan("monthly")}
          >
            Monthly
          </button>
          <button
            className={activePlan === "yearly" ? "btn2 btn_active" : "btn2"}
            onClick={() => switchPlan("yearly")}
          >
            Yearly
          </button>
        </div>
      </div>
      {/* Monthly Plan */}
      {activePlan === "monthly" && (
        <div className="subPlans_cards">
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#3498db" }}>
              Basic Plan
            </p>
            <div className="plan_price">
              <h3>$4.99</h3>
              <span>/ month</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>2TB additional storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 1GB file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 5 projects</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#2ecc71" }}>
              Standard Plan
            </p>
            <div className="plan_price">
              <h3>$9.99</h3>
              <span>/ month</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>10TB additional storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 10 projects</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#9b59b6" }}>
              Premium Plan
            </p>
            <div className="plan_price">
              <h3>$19.99</h3>
              <span>/ month</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Permanent Membership</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
        </div>
      )}

      {/* Yearly Plan */}
      {activePlan === "yearly" && (
        <div className="subPlans_cards">
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#3498db" }}>
              Basic Plan
            </p>
            <div className="plan_price">
              <h3>$24.99</h3>
              <span>/ year</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>2TB additional storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 1GB file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 5 projects</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#2ecc71" }}>
              Standard Plan
            </p>
            <div className="plan_price">
              <h3>$29.99</h3>
              <span>/ year</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>10TB additional storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Up to 10 projects</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
          <div className="subPlans_card">
            <p className="plan_name" style={{ color: "#9b59b6" }}>
              Premium Plan
            </p>
            <div className="plan_price">
              <h3>$39.99</h3>
              <span>/ year</span>
            </div>
            <div className="plan_menu">
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited storage</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Unlimited file size</p>
              </div>
              <div className="plan_menu_list">
                <i>
                  <TiStar />
                </i>
                <p>Permanent Membership</p>
              </div>
            </div>
            <button className="subPlans_btn">Get Plan</button>
          </div>
        </div>
      )}
    </div>
  );
}
