import { useState, useEffect } from "react";
import styles from "../components/TypingTextCycle.module.css";

const phrases = [
  "Web Developer",
  "Frontend Enthusiast",
  "Passionate learner",
  "Problem solver",
  "UI/UX Designer",
];

const TypingTextCycle = () => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentPhrase, setCurrentPhrase] = useState("");
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const phrase = phrases[currentPhraseIndex];
    const typingDelay = 100;
    const erasingDelay = 50;
    const pauseDelay = 1550;

    let timeout;

    if (!isErasing) {
      if (currentPhrase === phrase) {
        timeout = setTimeout(() => {
          setIsErasing(true);
        }, pauseDelay);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase(phrase.slice(0, currentPhrase.length + 1));
        }, typingDelay);
      }
    } else {
      if (currentPhrase === "") {
        setIsErasing(false);
        setCurrentPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
      } else {
        timeout = setTimeout(() => {
          setCurrentPhrase(currentPhrase.slice(0, currentPhrase.length - 1));
        }, erasingDelay);
      }
    }

    return () => clearTimeout(timeout);
  }, [currentPhrase, currentPhraseIndex, isErasing]);

  return (
    <div className={styles.text_job_container}>
      &lt;/&gt;
      <span className={styles.inner_text}>
        {currentPhrase} <span className={styles.cursor} />
      </span>
    </div>
  );
};

export default TypingTextCycle;
