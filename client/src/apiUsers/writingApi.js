import { useState, useEffect } from "react";
import axios from "axios";

function ReadingApi() {
  const [dataWriting, setdataWriting] = useState([]);

  //     //get data skill writing
  useEffect(() => {
    const writingApi = async () => {
      const data = await axios.get("http://localhost:5000/api/writing");
      setdataWriting(data.data);
    };
    writingApi();
  }, []);

  return {
    dataWriting: [dataWriting, setdataWriting],
  };
}
export default ReadingApi;
