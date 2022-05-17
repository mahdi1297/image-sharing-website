import React, { useState } from "react";
import styles from "./style.module.scss";

type Props = {
  title: string;
  position?: "TOP" | "BUTTOM" | "LEFT" | "RIGHT";
  children: any;
};

const Tooltip: React.FC<Props> = ({ title, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const mouseEnterHandler = () => {
    setIsHovered(true);
  };

  const mouseLeaveHandler = () => {
    setIsHovered(false);
  };

  return (
    <>
      <span onMouseEnter={mouseEnterHandler} onMouseLeave={mouseLeaveHandler}>
        <span
          className={`${styles.tooltip} ${
            isHovered ? styles.show : styles.hide
          }`}
        >
          {title}
        </span>
        {children}
      </span>
    </>
  );
};

export default Tooltip;
