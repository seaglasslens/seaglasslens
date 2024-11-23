import * as React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { backgroundAudio, audioTransition } from "./audio.tsx";

export interface AppContextValue {
  soundSetting: boolean;
  musicSetting: boolean;
  toggleSound: () => void;
  toggleMusic: () => void;
  keyboardNavigation: boolean;
  rerenderCount: number;
  rerender: () => void;
  resetRerenderCount: () => void;
}

export const AppContext = React.createContext<AppContextValue | null>(null);

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // toggle UI sounds and background music
  const [soundSetting, setSoundSetting] = useState(false);
  const [musicSetting, setMusicSetting] = useState(false);

  const toggleSound = () => {
    setSoundSetting((prev) => !prev);
  };
  const toggleMusic = () => {
    if (musicSetting) {
      backgroundAudio.pause();
    } else {
      backgroundAudio.play();
    }
    setMusicSetting((prev) => !prev);
  };

  // change background audio when user navigates to different page
  let location = useLocation();

  useEffect(() => {
    audioTransition(location.pathname, musicSetting);
  }, [location]);

  // detect keyboard navigation at any moment
  const [keyboardNavigation, setKeyboardNavigation] = useState(false);

  console.log("app context is rerendered, keyboardNavigation");
  console.log(keyboardNavigation);

  useEffect(() => {
    const detectKeyboard = (event: KeyboardEvent) => {
      if (event.key === "Tab" && !keyboardNavigation) {
        setKeyboardNavigation((prev) => !prev);
      }
    };

    const detectMouse = (event: MouseEvent) => {
      if (
        !document.activeElement?.contains(event.target as Node) &&
        keyboardNavigation
      ) {
        setKeyboardNavigation((prev) => !prev);
      }
    };

    document.addEventListener("keydown", detectKeyboard);
    document.addEventListener("mousedown", detectMouse);

    return () => {
      document.removeEventListener("keydown", detectKeyboard);
      document.removeEventListener("mousedown", detectMouse);
    };
  }, [keyboardNavigation]);

  // hacky method to force parent rerender when child is rerendered
  const [rerenderCount, setRerenderCount] = useState(0);
  console.log("app context is rerendered, rerender");
  console.log(rerenderCount);
  const rerender = () => {
    setRerenderCount((prev) => prev + 1);
  };
  const resetRerenderCount = () => {
    setRerenderCount(0);
  };

  return (
    <AppContext.Provider
      value={{
        soundSetting: soundSetting,
        musicSetting: musicSetting,
        toggleSound: toggleSound,
        toggleMusic: toggleMusic,
        keyboardNavigation: keyboardNavigation,
        rerenderCount: rerenderCount,
        rerender: rerender,
        resetRerenderCount: resetRerenderCount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
