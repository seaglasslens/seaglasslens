/*
import { useState, useContext } from "react";
import { AppContextValue, AppContext } from "../app/AppContext.tsx";
import { Link } from "react-router-dom";
import {
  content,
  initialTokens,
  initialName,
  initialScores,
} from "./quiz-content.tsx";
import { motion, AnimatePresence } from "framer-motion";
import PageTransition from "../page-transition/PageTransition.tsx";
import turtleNeutralAsset from "../../assets/turtle-neutral.png";
import turtleLaughingAsset from "../../assets/turtle-laughing.png";
import turtleMewingAsset from "../../assets/turtle-mewing.png";
import turtleThinkingAsset from "../../assets/turtle-thinking.png";
import turtleSmilingAsset from "../../assets/turtle-smiling.png";
import turtleEmbarrassedAsset from "../../assets/turtle-embarrassed.png";
import cloudAsset from "../../assets/cloud.png";
import jellyTraitsAsset from "../../assets/jelly-traits.png";
import nautilusTraitsAsset from "../../assets/nautilus-traits.png";
import coralTraitsAsset from "../../assets/coral-traits.png";
import crabTraitsAsset from "../../assets/crab-traits.png";
import sharkTraitsAsset from "../../assets/shark-traits.png";
import angelTraitsAsset from "../../assets/angel-traits.png";
import fishTraitsAsset from "../../assets/fish-traits.png";
import sealTraitsAsset from "../../assets/seal-traits.png";
import starTraitsAsset from "../../assets/star-traits.png";
import hermitTraitsAsset from "../../assets/hermit-traits.png";
import rayTraitsAsset from "../../assets/ray-traits.png";
import turtleTraitsAsset from "../../assets/turtle-traits.png";
import { clickUISound } from "../app/audio.tsx";
import LockScreen from "../lock-screen/LockScreen.tsx";

const variants = {
  quizModuleInitial: { y: "111vh" },
  quizModuleAnimate: {
    y: "0",
    transition: {
      type: "spring",
      damping: 8,
      duration: 0.8,
      delay: 5.6,
    },
  },
  quizModuleExit: {
    y: "-111vh",
    transition: {
      duration: 1.5,
      ease: "anticipate",
    },
  },
  optionsModuleInitial: { y: "-111vh" },
  optionsModuleAnimate: {
    y: "0",
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  optionsModuleExit: {
    y: "-111vh",
    transition: {
      duration: 1.5,
      ease: "anticipate",
    },
  },
  dialogueInitial: { opacity: 0 },
  dialogueAnimate: (index: number) => ({
    opacity: 1,
    transition: { duration: 0, delay: 0.02 * index },
  }),
  titleScreenInitial: {
    y: "0",
  },
  titleScreenAnimate: {
    y: "-111vh",
    transition: {
      duration: 0,
      delay: 8.5,
    },
  },
  resultsInitial: { y: "-111vh" },
  resultsAnimate: {
    y: "0",
    transition: {
      type: "spring",
      duration: 1.75,
      delay: 1.5,
    },
  },
  resultsExit: {
    y: "-111vh",
    transition: {
      duration: 1.75,
      ease: "anticipate",
    },
  },
  loadingScreenInitial: {
    y: "0",
  },
  loadingScreenAnimate: {
    y: "-111vh",
    transition: {
      duration: 0,
      delay: 2.95,
    },
  },
};
*/

const Quiz = () => {
  /*
  const { soundSetting } = useContext(AppContext) as AppContextValue;

  const [questionIndex, setQuestionIndex] = useState(0);
  const [optionIndex, setOptionIndex] = useState<number | null>(null);
  const [responseIndex, setResponseIndex] = useState<number | null>(null);
  const [tokens, setTokens] = useState(initialTokens);
  const [name, setName] = useState(initialName);
  const [scores, setScores] = useState(initialScores);
  // const [display, setDisplay] = useState(false);
  const { dialogue, options, response } = content.questions[questionIndex];

  // update relevant states when user selects an option
  const handleOptionClick = (index: number) => {
    // used to create dynamic classes for options (selected state)
    // used to enable next button
    setOptionIndex(index);
    // used to record response
    setResponseIndex(index);
  };

  // advance to next question
  const handleNextClick = () => {
    // update tokens
    if (optionIndex === null) {
      setTokens([...tokens, ""]);
    } else {
      setTokens([...tokens, options[optionIndex][1]]);
    }

    // update scores
    if (responseIndex !== null) {
      const newScores = scores.map((score, index) => {
        if (response[responseIndex].includes(index)) {
          // tally score
          return score + 1;
        } else {
          return score;
        }
      });
      setScores(newScores);
    }
    //console.log("scores", scores);

    // reset relevant states
    setOptionIndex(null);
    setResponseIndex(null);

    // load next question or reset quiz
    if (questionIndex !== content.questions.length - 1) {
      setQuestionIndex((prev) => prev + 1);
    } else {
      setDisplay(true);
    }
  };

  // populate options module with appropriate content
  const renderOptionsModule = () => {
    // generate input field
    if (questionIndex === 0) {
      return (
        <input
          type="text"
          id="nameInput"
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
          placeholder="name"
          minLength={1}
          maxLength={12}
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck="false"
          onKeyDown={(event) => {
            event.key === "Enter" && event.currentTarget.blur();
          }}
          tabIndex={1}
        />
      );
    }
    // or generate list of options
    else {
      return (
        <>
          {questionIndex === 10 && (
            <div className="cloud">
              <img src={cloudAsset} alt="A bumpy cloud floating up and down" />
            </div>
          )}
          {options.map((option, index) => (
            <button
              key={index}
              className={
                "q" +
                questionIndex +
                "op" +
                index +
                " option" +
                (optionIndex === index ? " selected" : "")
              }
              onClick={() => {
                if (soundSetting) {
                  clickUISound.play();
                }
                handleOptionClick(index);
              }}
              tabIndex={1}
            >
              {option[0]}
            </button>
          ))}
        </>
      );
    }
  };

  // render turtle with expression based on question
  const renderTurtle = () => {
    return (
      <img
        className="filter"
        src={
          {
            0: turtleNeutralAsset,
            1: turtleLaughingAsset,
            2: turtleMewingAsset,
            3: turtleThinkingAsset,
            4: turtleSmilingAsset,
            5: turtleNeutralAsset,
            6: turtleLaughingAsset,
            7: turtleMewingAsset,
            8: turtleNeutralAsset,
            9: turtleEmbarrassedAsset,
            10: turtleMewingAsset,
            11: turtleSmilingAsset,
          }[questionIndex]
        }
        alt="Seaglass Turtle animation"
      />
    );
  };

  // render dialogue with typewriter effect
  const renderDialogue = () => {
    return (
      <motion.p key={questionIndex} className="dialogue">
        {setDialogue()
          .split("")
          .map((char: string, index: number) => (
            <motion.span
              key={index}
              variants={variants}
              initial="dialogueInitial"
              whileInView="dialogueAnimate"
              viewport={{ once: true }}
              custom={index}
            >
              {char}
            </motion.span>
          ))}
      </motion.p>
    );
  };

  // update dialogue with token
  const setDialogue = () => {
    //console.log(tokens);
    if (questionIndex === 0) {
      return dialogue;
    } else {
      return dialogue
        .replace("token", tokens[tokens.length - 1])
        .replace("name", name);
    }
  };

  // determine if next button should be disabled
  const toggleNext = () => {
    if (questionIndex === 0) {
      return !name;
    } else {
      return optionIndex === null;
    }
  };

  // calculate results and display user's sea critter
  const renderResults = () => {
    // calculate results
    const maxScore = Math.max(...scores);
    const potentialResults = [];
    for (let i = 0; i < scores.length; i++) {
      if (scores[i] === maxScore) {
        potentialResults.push(i);
      }
    }
    const finalResults =
      potentialResults[Math.floor(Math.random() * potentialResults.length)];
    return (
      <img
        src={
          {
            0: jellyTraitsAsset,
            1: nautilusTraitsAsset,
            2: coralTraitsAsset,
            3: crabTraitsAsset,
            4: sharkTraitsAsset,
            5: angelTraitsAsset,
            6: fishTraitsAsset,
            7: sealTraitsAsset,
            8: starTraitsAsset,
            9: hermitTraitsAsset,
            10: rayTraitsAsset,
            11: turtleTraitsAsset,
          }[finalResults]
        }
        alt="Quiz results sea critter traits"
      />
    );
  };

  // reset quiz
  const handleTryAgainClick = () => {
    setQuestionIndex(0);
    setOptionIndex(null);
    setResponseIndex(null);
    setTokens(initialTokens);
    setName(initialName);
    setScores(initialScores);
    setDisplay(false);
  };
*/

  return (
    <>
    </>
  );
};

export default Quiz;

/*

<PageTransition>
        <div className="quiz-background">
          <nav>
            <Link to="/" className="home" tabIndex={1} />
          </nav>
          {!display ? (
            <AnimatePresence initial={true} mode="wait">
              <motion.div
                key="quiz-module"
                className="quiz-module"
                variants={variants}
                initial="quizModuleInitial"
                animate="quizModuleAnimate"
                exit="quizModuleExit"
              >
                <div className="frame-accent-one" />
                <div className="frame-accent-two" />
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={questionIndex}
                    className="options-module"
                    variants={variants}
                    initial="optionsModuleInitial"
                    animate="optionsModuleAnimate"
                    exit="optionsModuleExit"
                  >
                    {renderOptionsModule()}
                  </motion.div>
                </AnimatePresence>
                <div className="dialogue-module">
                  <div className="turtle">{renderTurtle()}</div>
                  <div className="frame-clip" />
                  <div className="bubble">
                    {renderDialogue()}
                    <div className="bubble-accent-one" />
                    <div className="bubble-accent-two" />
                  </div>
                  <button
                    className="next"
                    onClick={handleNextClick}
                    disabled={toggleNext()}
                    tabIndex={1}
                  />
                </div>
              </motion.div>
              <motion.div
                key="title-screen"
                className="title-screen"
                variants={variants}
                initial="titleScreenInitial"
                animate="titleScreenAnimate"
              />
            </AnimatePresence>
          ) : (
            <AnimatePresence initial={true} mode="wait">
              <motion.div
                key="results"
                className="results"
                variants={variants}
                initial="resultsInitial"
                animate="resultsAnimate"
                exit="resultsExit"
              >
                {renderResults()}
                <button
                  className="try-again"
                  onClick={handleTryAgainClick}
                  tabIndex={1}
                />
              </motion.div>
              <motion.div
                key="loading-screen"
                className="loading-screen"
                variants={variants}
                initial="loadingScreenInitial"
                animate="loadingScreenAnimate"
              />
            </AnimatePresence>
          )}
        </div>
      </PageTransition>

*/
