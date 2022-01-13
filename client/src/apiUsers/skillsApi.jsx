import { useState, useEffect } from "react";
import axios from "axios";

function SkillApi() {
    const [dataSkill, setdataSkill] = useState([]);

  //get data skill listening
  useEffect(() => {
    const skillApi = async () => {
      const data = await axios.get("http://localhost:5000/api/skills");
      setdataSkill(data.data);
    };
    skillApi();
  }, []);

  return {
    dataSkill: [dataSkill, setdataSkill] 
  };
}
export default SkillApi;
