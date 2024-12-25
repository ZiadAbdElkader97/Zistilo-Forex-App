import "./News.css";
// import axios from "axios";
// import { useEffect, useState } from "react";

export default function News() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await axios.get(
  //       ""
  //     );
  //     const apiData = response.data;
  //     setData(apiData);
  //   };
  //   fetchData();
  // }, []);

  // console.log(data);

  return (
    <div className="news">
      <div className="news_content">
        <div className="news_section">
          {/* {data.map((item) => (
            <div key={item.id} className="news_info"></div>
          ))} */}
        </div>
      </div>
    </div>
  );
}
