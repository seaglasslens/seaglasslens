import homeAudioAsset from "../../assets/home.wav";
import quizAudioAsset from "../../assets/quiz.wav";
import openAudioAsset from "../../assets/open.wav";
import closeAudioAsset from "../../assets/close.wav";
import clickAudioAsset from "../../assets/click.wav";

export const backgroundAudio = new Audio();
backgroundAudio.loop = true;
const initialPath = window.location.pathname;
if (initialPath === "/") {
  backgroundAudio.src = homeAudioAsset;
} else if (initialPath === "/quiz") {
  backgroundAudio.src = quizAudioAsset;
}

export const openUISound = new Audio(openAudioAsset);
export const closeUISound = new Audio(closeAudioAsset);
export const clickUISound = new Audio(clickAudioAsset);

export const audioTransition = async (path: String, musicSetting: boolean) => {
  if (musicSetting) {
    await fadeOut();
  }
  if (path === "/") {
    backgroundAudio.src = homeAudioAsset;
  } else if (path === "/quiz") {
    backgroundAudio.src = quizAudioAsset;
  }
  if (musicSetting) {
    backgroundAudio.volume = 1;
    backgroundAudio.play();
  }
};

export const fadeOut = () => {
  return new Promise<void>((resolve) => {
    if (backgroundAudio.volume > 0.005) {
      backgroundAudio.volume -= 0.005;
      setTimeout(fadeOut, 5);
    } else {
      backgroundAudio.volume = 0;
      backgroundAudio.pause();
    }
    setTimeout(resolve, 3750);
  });
};
