/*
import { useEffect, useState } from "react";
import AppProvider from "./AppContext.tsx";
import { urls } from "../../assets/asset-urls.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import LockScreen from "../lock-screen/LockScreen.tsx";
import Spinner from "../spinner/Spinner.tsx";
import Home from "../home/Home.tsx";
import Quiz from "../quiz/Quiz.tsx";
import ToggleBar from "../toggle-bar/ToggleBar.tsx";
import { AnimatePresence } from "framer-motion";
*/
import LockScreen from "../lock-screen/LockScreen.tsx";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../home/Home.tsx";
import Quiz from "../quiz/Quiz.tsx";

function App() {
  /*
  const [isLoading, setIsLoading] = useState(true);

  const cacheAssets = async (srcs: string[]): Promise<void> => {
    const promises = srcs.map((src: string) => {
      return new Promise<void>((resolve, reject) => {
        const img = new (window as any).Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => reject();
      });
    });
    await Promise.all(promises);
    setIsLoading(false);
  };

  useEffect(() => {
    cacheAssets(urls);
  }, []);

  const location = useLocation();
*/
  const location = useLocation();

  return (
    <>
      <LockScreen />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
      </Routes>
    </>
  );
}

export default App;

/*
{isLoading ? (
        <Spinner />
      ) : (
        <>
          <AppProvider>
            <AnimatePresence initial={false} mode="wait">
              <Routes location={location} key={location.pathname}>
                <Route index element={<Home />} />
                <Route path="/quiz" element={<Quiz />} />
              </Routes>
            </AnimatePresence>
            <ToggleBar />
          </AppProvider>
        </>
      )}
*/
