import "./styles/app.scss";
import * as React from "react";
import Navbar from "./components/Nacbar";
import MainContent from "./components/MainContent";
import Articles from "./components/Articles";

function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Articles />
    </div>
  );
}

export default App;
