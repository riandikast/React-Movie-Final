import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ScrollToTop from "./routes/ScrollToTop";
import { themeState } from "./components/Navbar";
import { useAtom } from "jotai";
function App() {
  const [darkMode, setDarkMode] = useAtom(themeState);
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-screen top-0 fixed z-50">
          <Navbar />
        </div>

        <div className={`justify-center items-center mt-20 z-0 ${darkMode? 'bg-[#192026]' : 'bg-[#ffffff]'}`}>
          <AnimatedRoutes></AnimatedRoutes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
