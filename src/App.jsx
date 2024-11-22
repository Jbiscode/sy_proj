import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
