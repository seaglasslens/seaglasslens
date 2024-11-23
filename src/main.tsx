import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/app/App.tsx";
import "./components/app/App.scss";
import "./components/lock-screen/LockScreen.scss";
import "./components/spinner/Spinner.scss";
import "./components/home/Home.scss";
import "./components/contact/Contact.scss";
import "./components/staff/Staff.scss";
import "./components/magnifier/Magnifier.scss";
import "./components/egg/Egg.scss";
import "./components/quiz/Quiz.scss";
import "./components/page-transition/PageTransition.scss";
import "./components/artists/Artists.scss";
import "./components/modal/Modal.scss";
import "./components/toggle-bar/ToggleBar.scss";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
