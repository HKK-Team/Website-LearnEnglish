import { useState, useEffect } from "react";
import axios from "axios";

function ListeningApi() {
  const [dataListening, setdataListening] = useState([]);

  //get data skill listening
  useEffect(() => {
    const listeningApi = async () => {
      const data = await axios.get("http://localhost:5000/api/listening");
      setdataListening(data.data);
    };
    listeningApi();
  }, []);

  return {
    dataListening: [dataListening, setdataListening],
  };
}
export default ListeningApi;
