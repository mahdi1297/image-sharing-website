import { useState, useEffect } from "react";
import { SCROLL_DOWN, SCROLL_UP } from "constaints/consts";

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState("UP");

  let scrollableElement: any = "";

  // Checks if is in browser because server cant find document or window
  if (typeof window !== "undefined") {
    scrollableElement = document.body;
  }

  useEffect(() => {
    // Sets scroll direction state
    const checkScrollDirection = (event: any) => {
      if (checkScrollIsUp(event)) {
        setScrollDirection(SCROLL_UP);
      } else {
        setScrollDirection(SCROLL_DOWN);
      }
    };

    // Checks direction of scroll
    const checkScrollIsUp = (event: any) => {
      if (event.wheelDelta) {
        return event.wheelDelta > 0;
      }
      return event.deltaY < 0;
    };

    scrollableElement.addEventListener("wheel", checkScrollDirection);

    return () => {
      scrollableElement.removeEventListener("wheel", checkScrollDirection);
    };
  }, [scrollableElement]);

  return scrollDirection;
};

export default useScrollDirection;
