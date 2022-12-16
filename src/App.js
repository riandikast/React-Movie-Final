import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./routes/AnimatedRoutes";
import ScrollToTop from "./routes/ScrollToTop";
function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-screen top-0 fixed z-50">
          <Navbar />
        </div>

        <div className="justify-center items-center mt-20 z-0 ">
          <AnimatedRoutes></AnimatedRoutes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
