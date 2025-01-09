"use client";

import React, { useState, useEffect } from "react";

const TypeWriterEffect = () => {
  const textPhrases = [
    "Web Developer",
    "App Developer",
    "Web Designer",
    "Freelancer",
    "Student",
  ];
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0); // State to track the current phrase index
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer;

    const handleTyping = () => {
      const currentText = textPhrases[currentPhraseIndex];
      setDisplayText(currentText.substring(0, counter));

      if (!isDeleting && counter < currentText.length) {
        setCounter((prev) => prev + 1);
      } else if (isDeleting && counter > 0) {
        setCounter((prev) => prev - 1);
      } else if (isDeleting) {
        setIsDeleting(false);
        setCounter(0);
        // Cycle to the next phrase in the array
        setCurrentPhraseIndex((prev) => (prev + 1) % textPhrases.length);
      } else {
        setIsDeleting(true);
      }
    };

    timer = setInterval(handleTyping, 100);

    return () => clearInterval(timer);
  }, [counter, isDeleting, currentPhraseIndex]);
  return (
    <div className="">
      <div className="">
        <h1 className=" text-blue-600 pl-2">{displayText}</h1>
      </div>
    </div>
  );
};

export default TypeWriterEffect;
