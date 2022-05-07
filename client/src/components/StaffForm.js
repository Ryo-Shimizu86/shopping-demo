import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { StaffFormBasic } from "./StaffFormBasic";
import { StaffFormConfirm } from "./StaffFormConfirm";
import Button from "react-bootstrap/Button";

export const UserInputData = createContext();

export const StaffForm = () => {
  const [currentState, setCurrentState] = useState({});
  const value = {
    currentState,
    setCurrentState,
  };

  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleReset = () => {
    setActiveStep(0);
  };

  function getSteps() {
    return ["基本項目", "任意項目", "入力確認"];
  }

  function getStepContent(stepIndex) {
    switch (stepIndex) {
      case 0:
        return <StaffFormBasic handleNext={handleNext} />;
      case 1:
        return <StaffFormConfirm handleBack={handleBack} />;
      default:
        return "Unknown stepIndex";
    }
  }

  return (
    <>
      {activeStep === steps.length ? (
        <div>
          全ステップの表示を完了
          <Button onClick={handleReset}>Reset</Button>
        </div>
      ) : (
        <div>
          <UserInputData.Provider value={value}>
            {getStepContent(activeStep, handleNext, handleBack)}
          </UserInputData.Provider>
        </div>
      )}
    </>
  );
};
