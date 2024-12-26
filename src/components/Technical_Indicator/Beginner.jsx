import "./Tech_Section.css";
import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { signalsData } from "../../assets/data/TechData";
import { DataContext } from "../../context/DataContext";

export default function Beginner() {
  const { activeTimeframe, activeSymbol } = useContext(DataContext);

  const [data, setData] = useState([]);

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
  }, [activeTimeframe, activeSymbol]);

  console.log(data);

  return (
    <>
      <div className="tech_section">
        {signalsData.map((item) => (
          <div key={item.id} className="values_signal">
            <p className="valueName">{item.name}</p>
            {data.map((item) => (
              <p key={item.id} className="num_status"></p>
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
