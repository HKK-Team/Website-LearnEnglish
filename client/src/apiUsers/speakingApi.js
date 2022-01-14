// import { useState, useEffect } from "react";
// import axios from "axios";

// function ReadingApi() {
//     const [dataSpeaking, setdataSpeaking] = useState([]);

//   useEffect(() => {
//     const speakingApi = async () => {
//       const data = await axios.get("http://localhost:5000/api/speaking");
//       setdataSpeaking(data.data);
//     };
//     speakingApi();
//   }, []);

//   return {
//     dataSpeaking: [dataSpeaking, setdataSpeaking] 
//   };
// }
// export default ReadingApi;
