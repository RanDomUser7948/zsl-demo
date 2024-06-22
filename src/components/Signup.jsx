import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Signup.module.css";
import FormFlow from "./FormFlow";
import AccordionForm from "./AccordionForm";
import { LooksOne, LooksTwo, Looks3, Looks } from "@mui/icons-material";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";

const accordionStyle = {
  borderRadius: "15px",
  marginTop: "10px",
  // marginBottom: "20px",
  "&:before": {
    display: "none",
    // marginTop: "20px",
    marginBottom: "10px",
  },
};
const Signup = () => {
  const [details, setDetails] = useState({});

  const handleSubmit = (event, panel) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    let data = {};
    formData.entries().forEach(([key, value]) => (data[key] = value));
    setDetails((prevValue) => {
      const updatedState = { ...prevValue, ...data };
      if (panel === "panel3")
        alert(`Your data is ${JSON.stringify(updatedState)}`);
      return updatedState;
    });
    if (panel === "panel1") setExpanded("panel2");
    if (panel === "panel2") setExpanded("panel3");
  };
  const [expanded, setExpanded] = useState("panel1");

  const accordionChange = (panel) => (event, expanded) => {
    setExpanded(panel);
  };

  const [subscription, setSubscription] = useState("");
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className={styles.formContainer}
      style={{ width: `${showForm ? "800px" : "600px"} ` }}
    >
      <h2>{`${
        !showForm ? "" : subscription === "teacher" ? "Teacher" : "Instiution"
      } Signup`}</h2>
      {!showForm ? (
        <div className={styles.box}>
          <h3 style={{ marginBottom: "5px", marginTop: "10px" }}>
            Subscription Type
          </h3>
          <h4 style={{ marginBottom: "5px", marginTop: "0px" }}>
            *All Fields required
          </h4>
          <h5 style={{ marginBottom: "5px", marginTop: "0px" }}>
            Subscription Type
          </h5>
          <select
            defaultValue=""
            onChange={(event) => setSubscription(event.target.value)}
            style={{
              marginBottom: "10px",
              marginTop: "0px",
              borderRadius: "5px",
              height: "40px",
            }}
          >
            <option disabled value="">
              {" "}
              -- select an option --{" "}
            </option>
            <option value="teacher">Teacher</option>
            <option value="institution">Institution</option>
          </select>
          <button
            disabled={subscription.length == 0}
            onClick={() => setShowForm(true)}
          >
            Next
          </button>
        </div>
      ) : (
        <>
          <FormFlow panel={expanded} />
          <>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={accordionChange("panel1")}
              sx={accordionStyle}
            >
              <AccordionSummary
                // expandIcon={<ExpandMore />}
                aria-controls="panel1-content"
                id="panel1-header"
              >
                <Typography className={styles.typography}>
                  <LooksOne className={styles.icon} />
                  Basic Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form
                  className={styles.form}
                  onSubmit={(event) => handleSubmit(event, "panel1")}
                >
                  {subscription === "institution" && (
                    <>
                      <label htmlFor="instutionName">Insitution Name</label>
                      <input
                        id="instutionName"
                        type="text"
                        required
                        name="instutionName"
                      />
                    </>
                  )}
                  <label htmlFor="firstName">First Name</label>
                  <input id="firstName" type="text" required name="firstName" />
                  <label htmlFor="lastName">Last Name</label>
                  <input id="lastName" type="text" required name="lastName" />
                  <button
                  // onClick={(event) => {
                  //   event.preventDefault();
                  //   handleClick("panel1");
                  // }}
                  >
                    Next
                  </button>
                </form>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={accordionChange("panel2")}
              sx={accordionStyle}
              disabled={expanded === "panel1"}
            >
              <AccordionSummary
                // expandIcon={<ExpandMore />}
                aria-controls="panel2-content"
                id="panel2-header"
              >
                <Typography className={styles.typography}>
                  <LooksTwo className={styles.icon} />
                  Contact Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form
                  className={styles.form}
                  onSubmit={(event) => handleSubmit(event, "panel2")}
                >
                  <label htmlFor="mobileNumber">Mobile Number</label>
                  <input
                    id="mobileNumber"
                    type="text"
                    name="mobileNumber"
                    required
                  />
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" required />
                  <label htmlFor="address">
                    {subscription === "institution" && `Institution`} Address
                  </label>
                  <input id="address" type="text" name="address" required />
                  <button>Next</button>
                </form>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={accordionChange("panel3")}
              sx={accordionStyle}
              disabled={expanded === "panel1" || expanded === "panel2"}
            >
              <AccordionSummary
                // expandIcon={<ExpandMore />}
                aria-controls="panel3-content"
                id="panel3-header"
              >
                <Typography className={styles.typography}>
                  <Looks3 className={styles.icon} />
                  Login Info
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <form
                  className={styles.form}
                  onSubmit={(event) => handleSubmit(event, "panel3")}
                >
                  <label htmlFor="userName">User Name</label>
                  <input id="userName" type="text" required name="userName" />
                  <label htmlFor="password">Password</label>
                  <input
                    id="password"
                    type="password"
                    required
                    name="password"
                  />
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    id="confirmPassword"
                    type="password"
                    required
                    name="confirmPassword"
                  />
                  <button>Create</button>
                </form>
              </AccordionDetails>
            </Accordion>
          </>
        </>
      )}
    </div>
  );
};

export default Signup;
