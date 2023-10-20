import * as React from "react";
import MobileStepper from "@mui/material/MobileStepper";
import Button from "@mui/material/Button";
import "/src/index.css";
import { Grid } from "@mui/material";
export default function ProgressMobileStepper(props) {
  return (
    <div className="progress-bar">
      <MobileStepper
        variant="progress"
        steps={4}
        position="static"
        thickness={6}
        activeStep={props.step}
        sx={{
          mx: "auto",
          width: "100%",
          p: 1,
          m: 1,
          backgroundColor: "#d8ddf7",
        }}
      />

      <Grid container spacing={2} justifyContent="center !important">
        <Grid item>
          <Button
            variant="outlined"
            onClick={props.back}
            disabled={props.step === 1}
            className="crutch"
          >
            Previous
          </Button>
        </Grid>

        <Grid item>
          <Button variant="outlined" onClick={props.forth}>
            {props.step === props.total ? "Submit" : "Next"}
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
