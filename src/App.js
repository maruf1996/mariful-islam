import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Route/Route";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="font-montserrat">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
