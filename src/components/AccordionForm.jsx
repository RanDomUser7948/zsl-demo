import { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import { ExpandMore } from "@mui/icons-material";
import styles from "./AccordionForm.module.css";
import { useParams } from "react-router-dom";
const AccordionForm = (props) => {
  const params = useParams();
  const state = props.state;
  const [expanded, setExpanded] = useState("panel1");

  const accordionChange = (panel) => (event, isExpanded) => {
    setExpanded(panel);
  };

  return (
    <div className={styles.formContainer}>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={accordionChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography>Basic Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={styles.form}>
            <label htmlFor="firstName">First Name</label>
            <input id="firstName" type="text" />
            <label htmlFor="lastName">Last Name</label>
            <input id="lastName" type="text" />
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={accordionChange("panel2")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography>Contact Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={styles.form}>
            <label htmlFor="mobileNumber">Mobile Number</label>
            <input id="mobileNumber" type="text" />
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
            <label htmlFor="institutionAddress">Institution Address</label>
            <input id="institutionAddress" type="text" />
          </form>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={accordionChange("panel3")}
      >
        <AccordionSummary
          expandIcon={<ExpandMore />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography>Login Info</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <form className={styles.form}>
            <label htmlFor="userName">User Name</label>
            <input id="userName" type="text" />
            <label htmlFor="password">Password</label>
            <input id="password" type="password" />
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input id="confirmPassword" type="password" />
          </form>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default AccordionForm;
