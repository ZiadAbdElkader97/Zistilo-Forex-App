import "./Tech_Section.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Beginner() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_beginner_api.php",
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
          <div key={item.id} className="tech_values"></div>
        ))}
      </div>
    </>
  );
}
