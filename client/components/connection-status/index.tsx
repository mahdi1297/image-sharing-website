import React, { useEffect, useState } from "react";
import styles from "./style.module.scss";

enum Status {
  "ONLINE",
  "OFFLINE",
}

const ConnectionStatus = () => {
  const [status, setStatus] = useState<Status>();
  const [indicatorTime, setIndicatorTime] = useState(false);

  useEffect(() => {
    if (navigator.onLine) {
    } else {
      setIndicatorTime(true);
      setStatus(Status.OFFLINE);

      setTimeout(() => {
        setIndicatorTime(false);
      }, 10000);
    }

    window.addEventListener("online", () => {
      setIndicatorTime(true);
      setStatus(Status.ONLINE);

      setTimeout(() => {
        setIndicatorTime(false);

        if (typeof window !== "undefined") {
          window.location.href = "/";
        }
      }, 10000);
    });

    window.addEventListener("offline", () => {
      setIndicatorTime(true);
      setStatus(Status.OFFLINE);

      setTimeout(() => {
        setIndicatorTime(false);
      }, 10000);
    });
  }, []);

  return (
    <div>
      {indicatorTime === true && (
        <div
          className={`${styles.internet__alert} ${
            status === Status.ONLINE ? styles.online : styles.offline
          }
          `}
        >
          {status === Status.ONLINE ? (
            <span>You are online now</span>
          ) : (
            <span>You are offline now</span>
          )}
        </div>
      )}
    </div>
  );
};

export default ConnectionStatus;
