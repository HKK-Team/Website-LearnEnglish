import { useState, useEffect } from "react";
import axios from "axios";

function ReadingApi() {
  const [vocData, setvocData] = useState([]);


  useEffect(() => {
    const vocabularyApi = async () => {
      const data = await axios.get("http://localhost:5000/api/vocabulary");
      setvocData(data.data);
    };
    vocabularyApi();
  }, []);

  return {
    vocData: [vocData, setvocData],
  };
}
export default ReadingApi;
