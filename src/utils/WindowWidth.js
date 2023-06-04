import { useState, useEffect } from "react";

function getWindowWidth() {
  const { innerWidth: width } = window;
  return { width };
}

export default function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());

  useEffect(() => {
    function handleWindowWidth() {
      setWindowWidth(getWindowWidth());
    }

    window.addEventListener('resize', handleWindowWidth)
  }, [])

  return windowWidth;
}

function getScreenWidth() {
  const { width } = window.screen;
  return { width };
}

export function useScreenWidth() {
  const [screenWidth, setScreenWidth] = useState(getScreenWidth());
  return screenWidth;
}
