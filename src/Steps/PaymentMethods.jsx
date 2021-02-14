import React from 'react';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';

import { useSelector, useDispatch } from 'react-redux';
import { changePaymentMethod } from '../Redux/actions';

import Card from '../Components/Card';

export default function PaymentMethods() {
  const paymentMethod = useSelector(({ paymentMethod }) => paymentMethod);
  const dispatch = useDispatch();

  const paymentProviders = [
    {
      name: 'Visa',
      logoLink: 'https://js.checkout.com/framesv2/img/visa.svg',
      deliveryTime: '',
    },
    {
      name: 'Mastercard',
      logoLink: 'https://js.checkout.com/framesv2/img/mastercard.svg',
      deliveryTime: '1 день',
    },
  ];

  return (
    <>
      <h3>Способ доставки</h3>
      <RadioGroup
        value={paymentMethod}
        onChange={(e) => {
          dispatch(changePaymentMethod(e.target.value));
        }}>
        <Grid container spacing={2}>
          {paymentProviders.map((paymentProvider) => {
            return (
              <Card
                key={paymentProvider.name}
                image={paymentProvider.logoLink}
                title={paymentProvider.name}
              />
            );
          })}
        </Grid>
      </RadioGroup>
    </>
  );
}
