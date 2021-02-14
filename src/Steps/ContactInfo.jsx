import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

import { useSelector, useDispatch } from 'react-redux';
import {
  changeFirstName,
  changeLastName,
  changeCountry,
  changeCity,
  changePhone,
  changeFirstStepAvailability,
} from '../Redux/actions';

const useStyles = makeStyles((theme) => ({
  textField: {
    width: '100%',
  },
}));

export default function ContactInfo() {
  const classes = useStyles();

  const payer = useSelector(({ payer }) => payer);
  const stepsAvailable = useSelector(({ stepsAvailable }) => stepsAvailable);
  const dispatch = useDispatch();

  const isFormFilled = () => {
    if (
      payer.firstName.trim() !== '' &&
      payer.lastName.trim() !== '' &&
      payer.country.trim() !== '' &&
      payer.city.trim() !== '' &&
      payer.phone.trim() !== ''
    ) {
      return true;
    } else {
      return false;
    }
  };

  React.useEffect(() => {
    const fillingFormRes = isFormFilled();
    if (fillingFormRes && !stepsAvailable[1]) {
      dispatch(changeFirstStepAvailability(true));
    }
    if (!fillingFormRes && stepsAvailable[1]) {
      dispatch(changeFirstStepAvailability(false));
    }
    // eslint-disable-next-line
  }, [payer.firstName, payer.lastName, payer.country, payer.city, payer.phone]);

  return (
    <div>
      <h3>Контактная информация</h3>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TextField
            label="Имя"
            className={classes.textField}
            variant="outlined"
            value={payer.firstName}
            onChange={(e) => {
              dispatch(changeFirstName(e.target.value));
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            label="Фамилия"
            className={classes.textField}
            variant="outlined"
            value={payer.LastName}
            onChange={(e) => {
              dispatch(changeLastName(e.target.value));
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Страна"
            className={classes.textField}
            variant="outlined"
            value={payer.country}
            onChange={(e) => {
              dispatch(changeCountry(e.target.value));
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Город"
            className={classes.textField}
            variant="outlined"
            value={payer.city}
            onChange={(e) => {
              dispatch(changeCity(e.target.value));
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            label="Номер телефона"
            className={classes.textField}
            variant="outlined"
            value={payer.phone}
            onChange={(e) => {
              dispatch(changePhone(e.target.value));
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
}
