import React, { useState, useEffect } from "react";

function TextAnimator({ text }) {
  const [animatedText, setAnimatedText] = useState("");
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimatedText(text.substring(0, index));
      index++;
      if (index > text.length) {
        clearInterval(interval);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [text, index]);

  return <p>{animatedText}</p>;
}
export default TextAnimator;
