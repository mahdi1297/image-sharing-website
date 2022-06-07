import React from "react";
import styles from "./style.module.scss";

type Props = {
  classname: string;
  message: string;
};

const Alert: React.FC<Props> = ({ classname, message }) => {
  return <div className={styles.alert__body}>{message}</div>;
};

export default Alert;
