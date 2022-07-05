import "./styles/app.scss";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ArticleStartCoding from "./routes/articlePages/ArticleStartCoding";
import ArticleImprovingWeb from "./routes/articlePages/ArticleImprovingWeb";
import ArticleMyFirstGf from "./routes/articlePages/ArticleFirstGf";
import ArticleMyColleagues from "./routes/articlePages/ArticleMyColleagues";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="how-i-started-coding" element={<ArticleStartCoding />} />
          <Route path="improving-the-web" element={<ArticleImprovingWeb />} />
          <Route path="my-first-gf" element={<ArticleMyFirstGf />} />
          <Route path="my-colleagues" element={<ArticleMyColleagues />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
