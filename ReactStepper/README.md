# Stepper Component

## Use:

Creates a reusable stepper component with adjustable amount of steps and uses a function within the parent element to handle progression through the steps

## Example:

<Stepper stepProgression={step} stepsInStepper={3}/>

- Parent Code:
  const [step, setStep] = useState(0);

  **the following two functions would be used in buttons within the parent component**

  const NextStep = () => {
  setStep(step + 1);
  };

  const PreviousStep = () => {
  setStep(step - 1);
  };

## Parameter Explanations:

1. stepsInStepper = accepts a number to signify how many steps in the stepper

2. stepProgression = accepts a number created in the parent element that is used to control what current step the stepper is on and affects the styling of the other steps
