import "./Tech_Section.css";
import axios from "axios";
import { useState, useEffect } from "react";
// import { signalsData } from "../../assets/data/TechData";

export default function Beginner() {
  const [data, setData] = useState([]);

  // const keysToCompare = signalsData.map((key) => key.key);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_beginner_api.php?timeframe=30",
        {
          headers: {
            "Content-Type": "application/json",
            api_password: "5BhZWHeSp463Q7sU",
          },
        }
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  // console.log(data);

  return (
    <>
      <div className="tech_section">
        {data.map((item) => (
          <div key={item.id} className="values_signal">
            <p className="value">{item.bb_value}</p>
            <p className="num_status">{item.value}</p>
          </div>
        ))}

        {data.map((item) => (
          <div key={item.id} className="tech_values"></div>
        ))}
      </div>
    </>
  );
}
