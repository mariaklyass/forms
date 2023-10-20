import React, { useState } from "react";
import { questions } from "./components/Questions";
import { MultiStepForm } from "./components/MultiStepForm";
import ProgressMobileStepper from "./components/ProgressBar";
import { Button, Grid } from "@mui/material";
import "./index.css";
const ThreeStepsForm = () => {
  const [index, setIndex] = useState(1);
  const [pagesAnswers, setPagesAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const totalPagesCount = questions.length;
  const onPagesAnswerUpdate = (step, answerObj) => {
    setPagesAnswers({ ...pagesAnswers, [step]: answerObj });
  };

  const prevButton = () => {
    if (index > 1) {
      setIndex((prevIndex) => prevIndex - 1);
    }
  };
  const nextButton = () => {
    if (index < 3) {
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setPagesAnswers({});
      setSubmitted(true);
    }
  };

  const handleStart = () => {
    setIndex(1);
    setSubmitted(false);
  };

  return (
    <div className="App">
      <h1 className="h1">Three Steps React Hook Form</h1>
      <form>
        <div></div>
        <div className="form">
          {submitted ? (
            <>
              <p className="h2">Your answers have been submitted!</p>
              <Button variant="outlined" onClick={handleStart}>
                Start Over
              </Button>
            </>
          ) : (
            <>
              <Grid item xs={6} sm={8} md={10} lg={12}>
                <MultiStepForm
                  step={index}
                  total={totalPagesCount}
                  list={questions}
                  onPageUpdate={onPagesAnswerUpdate}
                  pagesAnswers={pagesAnswers}
                />
              </Grid>

              <ProgressMobileStepper
                step={index}
                back={prevButton}
                forth={nextButton}
                total={totalPagesCount}
              />
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default ThreeStepsForm;
