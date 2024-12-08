import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GuestbookPage from "./pages/GuestbookPage";
import Home from "./pages/Home";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";

gsap.registerPlugin(ScrollTrigger);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/page4" element={<Page4 />} />
        <Route path="/page5" element={<Page5 />} />
        <Route path="/guestbook" element={<GuestbookPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
