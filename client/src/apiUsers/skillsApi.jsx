import { useState, useEffect } from "react";
import axios from "axios";

function SkillApi() {
  const [dataListening, setdataListening] = useState([]);
  const [dataReading, setdataReading] = useState([]);
  const [dataSpeaking, setdataSpeaking] = useState([]);
  const [dataWriting, setdataWriting] = useState([]);

  //get data skill listening
  useEffect(() => {
    const listeningApi = async () => {
      const data = await axios.get("http://localhost:5000/api/listening");
      setdataListening(data.data);
    };
    listeningApi();
  }, []);

  //get data skill listening
  useEffect(() => {
    const readingApi = async () => {
      const data = await axios.get("http://localhost:5000/api/reading");
      setdataReading(data.data);
    };
    readingApi();
  }, []);

  useEffect(() => {
    const speakingApi = async () => {
      const data = await axios.get("http://localhost:5000/api/speaking");
      setdataSpeaking(data.data);
    };
    speakingApi();
  }, []);

  //     //get data skill writing
  useEffect(() => {
    const writingApi = async () => {
      const data = await axios.get("http://localhost:5000/api/writing");
      setdataWriting(data.data);
    };
    writingApi();
  }, []);

  return {
    dataListening: [dataListening, setdataListening],
    dataReading: [dataReading, setdataReading],
    dataSpeaking: [dataSpeaking, setdataSpeaking],
    dataWriting: [dataWriting, setdataWriting],
  };
}
export default SkillApi;
