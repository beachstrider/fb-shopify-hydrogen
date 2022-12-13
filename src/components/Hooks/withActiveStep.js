import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setActiveStep, setVisitedStep} from '../../store/slices/rootSlice';

const withActiveStep = (WrappedComponent, stepId, dispath) => {
  const VerifyCurrentStep = (props) => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    useEffect(() => {
      if (stepId) {
        const currentStep = state.steps.find((step) => step.id === stepId);
        if (!currentStep.isActive) {
          dispatch(setActiveStep(stepId));
          dispatch(setVisitedStep(stepId));
        }
      }
    }, [stepId]);

    return <WrappedComponent {...props} />;
  };

  return VerifyCurrentStep;
};

export default withActiveStep;
