import React from "react";
import { Box } from "@mui/material";
import { LooksOne, LooksTwo, Looks3 } from "@mui/icons-material";
import styles from "./FormFlow.module.css";

const FormFlow = ({ panel }) => {
  return (
    <>
      <div className={styles.container}>
        <Box
          className={`${styles.iconContainer} ${
            panel === "panel1" || styles.inactive
          }`}
        >
          <LooksOne fontSize="large" />
        </Box>
        <Box className={styles.line}></Box>
        <Box
          className={`${styles.iconContainer} ${
            panel === "panel2" || styles.inactive
          }`}
        >
          <LooksTwo fontSize="large" />
        </Box>
        <Box className={styles.line}></Box>
        <Box
          className={`${styles.iconContainer} ${
            panel === "panel3" || styles.inactive
          }`}
        >
          <Looks3 fontSize="large" />
        </Box>
      </div>

      <div
        className={styles.container}
        style={{ justifyContent: "space-between", width: "83%" }}
      >
        <div className={`${panel === "panel1" || styles.inactive}`}>
          Basic Info
        </div>
        <div className={`${panel === "panel2" || styles.inactive}`}>
          Contact Info
        </div>
        <div className={`${panel === "panel3" || styles.inactive}`}>
          Login Info
        </div>
      </div>
    </>
  );
};

export default FormFlow;
