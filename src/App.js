import "./styles/app.scss";
import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ArticleStartCoding from "./routes/articlePages/ArticleStartCoding";
import ArticleImprovingWeb from "./routes/articlePages/ArticleImprovingWeb";
import ArticleMyColleagues from "./routes/articlePages/ArticleMyColleagues";
import ArticleCollectionsDapps from "./routes/articlePages/ArticleCollectionsDapps";
import ArticleTypescript from "./routes/articlePages/ArticleTypescript";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="how-i-started-coding" element={<ArticleStartCoding />} />
          <Route path="improving-the-web" element={<ArticleImprovingWeb />} />
          <Route path="my-colleagues" element={<ArticleMyColleagues />} />
          <Route
            path="collections-dapps"
            element={<ArticleCollectionsDapps />}
          />
          <Route
            path="collections-dapps"
            element={<ArticleCollectionsDapps />}
          />
          <Route path="typescript" element={<ArticleTypescript />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
