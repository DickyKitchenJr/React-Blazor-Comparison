import "./Stepper.css";

interface StepperProps {
  stepsInStepper: number;
  stepProgression: number;
}

function Stepper({ stepsInStepper, stepProgression }: StepperProps) {
  const steps = Array.from({ length: stepsInStepper }, (_, i) => i + 1);

  return (
    <div className="stepper-div">
      <ol className="stepper-ol">
        {steps.length !== 0
          ? steps.map((step) => {
              if (step === 1 && stepProgression === 0) {
                return (
                  <li className="stepper-li-active" key={step}>
                    <div className="li-div">
                      <p className="stepper-circle-active">{step}</p>
                    </div>
                  </li>
                );
              } else if (step === stepProgression + 1) {
                return (
                  <li className="stepper-li-active" key={step}>
                    <div className="li-div">
                      <p className="stepper-circle-active">{step}</p>
                    </div>
                  </li>
                );
              } else if (step < stepProgression + 1) {
                return (
                  <li className="stepper-li-complete" key={step}>
                    <div className="li-div">
                      <p className="stepper-circle-complete">&#10003;</p>
                    </div>
                  </li>
                );
              } else {
                return (
                  <li className="stepper-li" key={step}>
                    <div className="li-div">
                      <p className="stepper-circle">{step}</p>
                    </div>
                  </li>
                );
              }
            })
          : null}
      </ol>
    </div>
  );
}

export default Stepper;
