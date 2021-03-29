import React, { useContext } from "react";
import Question from "./components/Question";
import ScoreModal from "./components/ScoreModal";
import { Context } from "./GlobalContext";
import Footer from "./components/Footer";

export default function App() {
  const { isShowModal } = useContext(Context);

  return (
    <div className="container">
      {isShowModal ? <ScoreModal /> : <Question />}
      {/* <Footer /> */}
    </div>
  );
}
