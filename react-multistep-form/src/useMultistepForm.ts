import { ReactElement } from "react";
import { useState } from "react";

export function useMultistepForm(steps: ReactElement[]) {
    const [currentStepIndex, setCurrentStepIndex] = useState(0);

    const nextStep = () => {
        setCurrentStepIndex((prevIndex: number) => {
            if (prevIndex > steps.length - 1) return prevIndex;
            return prevIndex + 1;
        });
    };

    const previousStep = () => {
        setCurrentStepIndex((prevIndex: number) => {

            if (currentStepIndex < 0) return prevIndex
            return prevIndex - 1;
        })
    }

    const goTo = (index: number) => {
        setCurrentStepIndex(index)
    }

    return {
        currentStepIndex,
        step: steps[currentStepIndex],
        steps,
        isFirstStep: currentStepIndex === 0,
        isLastStep: currentStepIndex === steps.length - 1,
        hasPreviousStep: currentStepIndex > 0,
        hasNextStep: currentStepIndex < steps.length - 1,
        resetForm: () => setCurrentStepIndex(0),
        submitForm: () => console.log("Submitting form"), // Replace with your form submission logic
        goTo,
        nextStep,
        previousStep,
    }
}
