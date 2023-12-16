import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import App from "./App.tsx";
import "@arco-themes/react-colorblue/css/arco.css";

import "./index.css";

const lenis = new Lenis();

const raf = (time: number) => {
  lenis.raf(time);
  requestAnimationFrame(raf);
};

requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("app")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
