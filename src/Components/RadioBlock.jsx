import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepButton from '@material-ui/core/StepButton';
import Button from '@material-ui/core/Button';

import ContactInfo from '../Steps/ContactInfo';
import DeliveryMethods from '../Steps/DeliveryMethods';
import PaymentMethods from '../Steps/PaymentMethods';
import SummaryInfo from '../Steps/SummaryInfo';

import { useSelector, useDispatch } from 'react-redux';
import { changeActiveStep, thunkCreator } from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    fontFamily: 'Roboto',
  },
  button: {
    marginRight: theme.spacing(1),
    padding: '8px 22px',
  },
  buttonsBox: {
    display: 'flex',
    marginTop: '20px',
  },
}));

function getStepForm(step) {
  switch (step) {
    case 0:
      return <ContactInfo />;
    case 1:
      return <DeliveryMethods />;
    case 2:
      return <PaymentMethods />;
    case 3:
      return <SummaryInfo />;
    default:
      return 'Unknown step';
  }
}

export default function RadioBlock() {
  const activeStep = useSelector((state) => state.activeStep);
  const stepsAvailable = useSelector((state) => state.stepsAvailable);
  const payer = useSelector((state) => state.payer);

  const dispatch = useDispatch();

  const classes = useStyles();

  const steps = ['Основная информация', 'Способ доставки', 'Время доставки', 'Подтверждение'];

  const handleNext = () => {
    if (activeStep < 3) {
      dispatch(changeActiveStep(activeStep + 1));
    }
    if (activeStep === 3) {
      const postData = thunkCreator(payer);
      postData(dispatch);
    }
  };

  const handleBack = () => {
    dispatch(changeActiveStep(activeStep - 1));
  };

  return (
    <div className={classes.root}>
      <Stepper alternativeLabel nonLinear activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const buttonProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepButton {...buttonProps}>{label}</StepButton>
            </Step>
          );
        })}
      </Stepper>
      <div>
        <div>
          {getStepForm(activeStep)}
          <div className={classes.buttonsBox}>
            <Button
              variant="contained"
              onClick={handleBack}
              style={activeStep !== 0 ? { display: 'inline-flex' } : { display: 'none' }}
              className={classes.button}>
              Назад
            </Button>
            <Button
              variant="contained"
              disabled={!stepsAvailable[activeStep + 1]}
              color={activeStep !== 0 ? 'primary' : 'secondary'}
              onClick={handleNext}
              style={
                activeStep !== 0 ? { display: 'inline-flex', width: '100%' } : { display: 'none' }
              }
              className={classes.button}>
              {activeStep === 3 ? 'Оплатить' : 'Далее'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
