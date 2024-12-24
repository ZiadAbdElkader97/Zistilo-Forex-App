import "./Tech_Section.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Intermediate() {
  // eslint-disable-next-line no-unused-vars
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://notifications.copyforexsignals.com/apii/indicators_for_intermediate_api.php",
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
        <div></div>
      </div>
    </>
  );
}
