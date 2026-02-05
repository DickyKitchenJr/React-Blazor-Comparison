import { useState } from "react";
import "./App.css";
import Stepper from "./Stepper.tsx";

function App() {
  const [step, setStep] = useState(0);

  const NextStep = () => {
    setStep(step + 1);
  };

  const PreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <Stepper stepsInStepper={5} stepProgression={step} />

        {/* Buttons are solely for progressing the stepper by increasing or
        decreasing the step index */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "1rem",
            marginTop: "1rem",
          }}
        >
          <button onClick={PreviousStep} disabled={step === 0}>
            Previous Step
          </button>
          <button onClick={NextStep} disabled={step === 4}>
            Next Step
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
