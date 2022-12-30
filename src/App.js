import "./App.css";
import { useEffect, useState } from "react";
import ScoreList from "./components/ListView";
import axios from "axios";

function App() {
  const [scoreList, setScoreList] = useState([]);
  useEffect(() => {
    axios.get("/user/score").then((response) => {
      //console.log(response.data);
      setScoreList(response.data);
    });
  }, []);

  return (
    <div
      style={{
        margin: 30,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h3> Top Ten Players</h3>
      <ScoreList scoreList={scoreList} />
    </div>
  );
}

export default App;
