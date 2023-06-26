'use client';

import { FunctionComponent } from "react";
import styles from "./Loading-filler.module.css";

export const LoadingFiller: FunctionComponent<{loadingText: string}> = ({loadingText}) => {
  
  return (
    <div className={styles.loading_container}>
      <span className={styles.loading_text}>
        {loadingText}
      </span>
    </div>
  );
}
