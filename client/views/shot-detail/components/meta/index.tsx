import React, { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@shared/button";
import IconsFill from "@shared/icons-fill";
import styles from "./style.module.scss";

type Props = {
  title?: string;
  city?: string;
  country?: string;
  publishedDate?: any;
  tags?: [string] | any;
};

const ShotDetailMeta: React.FC<Props> = ({
  title,
  city,
  country,
  publishedDate,
  tags,
}) => {
  const [date, setDate] = useState();

  useEffect(() => {
    const dt: any = new Date(publishedDate).toLocaleString("IR-fa");
    setDate(dt);
  }, [publishedDate]);

  return (
    <div className="container mt-30">
      <div className={styles.meta__container}>
        <ul className={styles.meta__list}>
          <li>
            <div>
              <IconsFill type="camera-fill" />
            </div>
            <p>{title && title}</p>
          </li>
          <li>
            <div>
              <IconsFill type="location-fill" />
            </div>
            <p>
              {city && city}, {country && country}
            </p>
          </li>
          <li>
            <div>
              <IconsFill type="date-fill" />
            </div>
            <p>Publised At {date}</p>
          </li>
        </ul>

        <ul className={styles.meta__tags}>
          {tags &&
            tags.map((t: any, l: any) => (
              <li key={l}>
                <Button classname="btn-link-outline btn-sm">
                  <Link href="/">{t}</Link>
                </Button>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
};

export default ShotDetailMeta;
