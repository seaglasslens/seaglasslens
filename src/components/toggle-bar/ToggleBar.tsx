import { useContext } from "react";
import { AppContextValue, AppContext } from "../app/AppContext.tsx";

const ToggleBar = () => {
  const { soundSetting, musicSetting, toggleSound, toggleMusic } = useContext(
    AppContext
  ) as AppContextValue;

  return (
    <>
      <div className="toggle-bar">
        <button
          className={"sound-toggle" + (soundSetting ? " sound-on" : "")}
          onClick={toggleSound}
          tabIndex={2}
        />
        <button
          className={"music-toggle" + (musicSetting ? " music-on" : "")}
          onClick={toggleMusic}
          tabIndex={2}
        />
      </div>
    </>
  );
};

export default ToggleBar;
