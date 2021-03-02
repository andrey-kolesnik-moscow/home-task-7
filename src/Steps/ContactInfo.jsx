import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { changeActiveStep } from '../Redux/actions';
import { changePersonalData } from '../Redux/actions';

import GridTextField from '../Components/GridTextField';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    padding: '8px 22px',
  },
}));

export default function ContactInfo() {
  const dispatch = useDispatch();
  const payer = useSelector((state) => state.payer);
  const activeStep = useSelector((state) => state.activeStep);
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data) => {
    dispatch(changePersonalData(data));
    dispatch(changeActiveStep(activeStep + 1));
  };

  const fields = [
    {
      field: 'firstName',
      label: 'name',
      size: 6,
      pattern: /^[(A-Za-z)|(А-Яа-я)]{2,15}$/i,
    },
    {
      field: 'lastName',
      label: 'lastname',
      size: 6,
      pattern: /^[(A-Za-z)|(А-Яа-я)]{2,15}$/i,
    },
    {
      field: 'country',
      label: 'country',
      size: 4,
      pattern: /^[(A-Za-z)|(А-Яа-я)]{3,15}$/i,
    },
    {
      field: 'city',
      label: 'city',
      size: 4,
      pattern: /^[(A-Za-z)|(А-Яа-я)]{2,15}$/i,
    },
    {
      field: 'phone',
      label: 'phone',
      size: 4,
      pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i,
    },
  ];

  return (
    <div>
      <h3>Контактная информация</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          {fields.map((item) => (
            <GridTextField
              item={item}
              key={item.field}
              register={register}
              defaultValue={payer[item.field]}
              error={errors[item.field]}
            />
          ))}
          <Button
            variant="contained"
            color="secondary"
            type="submit"
            style={{ width: '100%', margin: '10px' }}
            className={classes.button}>
            Далее
          </Button>
        </Grid>
      </form>
    </div>
  );
}
