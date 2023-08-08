import { Route, Routes } from "react-router";
import "./App.css";
import PageNotFound from "./Page/PageNotFound";
import HomePage from "./Page/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
