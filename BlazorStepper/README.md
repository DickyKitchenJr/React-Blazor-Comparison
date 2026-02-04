# Stepper Component

## Use:

Creates a reusable stepper component with adjustable amount of steps and uses a function within the parent element to handle progression through the steps

## Example:

<Stepper StepProgression="@step" StepsInStepper="3"/>

- Parent Code:
  @code{
  int step = 0;

       private void NextStep()
       {
          step++;
       }

       private void PreviousStep()
       {
          step--;
       }

  }

## Parameter Explanations:

1. StepsInStepper = accepts an int as a string to signify how many steps in the stepper

2. StepProgression = accepts an int created in the parent element that is used to control what current step the stepper is on and affects the styling of the other steps
