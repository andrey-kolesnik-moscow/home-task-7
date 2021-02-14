import React from 'react';
import Grid from '@material-ui/core/Grid';
import RadioGroup from '@material-ui/core/RadioGroup';

import Card from '../Components/Card';

import { useSelector, useDispatch } from 'react-redux';
import { changeDeliveryMethod } from '../Redux/actions';

export default function DeliveryMethods() {
  const deliveryMethod = useSelector(({ deliveryMethod }) => deliveryMethod);
  const dispatch = useDispatch();

  const deliverers = [
    {
      name: 'DPD',
      logoLink: 'https://www.dpd.co.uk/content/about_dpd/press_centre/DPD_symbol_red_rgb.png',
      deliveryTime: '1 день',
    },
    {
      name: 'СДЭК',
      logoLink:
        'https://static.tildacdn.com/tild3664-6633-4730-b231-623538313637/logo_1-p-1000.png',
      deliveryTime: '1 день',
    },
    {
      name: 'Boxberry',
      logoLink: 'https://zelenkarta.ru/wp-content/uploads/2020/04/boxberry.png',
      deliveryTime: '3-5 дней',
    },
    {
      name: 'DHL',
      logoLink: 'https://cdn.iconscout.com/icon/free/png-256/dhl-282165.png',
      deliveryTime: '2-3 дня',
    },
  ];

  return (
    <>
      <h3>Способ доставки</h3>
      <RadioGroup
        value={deliveryMethod}
        onChange={(e) => dispatch(changeDeliveryMethod(e.target.value))}>
        <Grid container spacing={2}>
          {deliverers.map((deliverer) => {
            return (
              <Card
                key={deliverer.name}
                deliveryTime={`Срок доставки:${deliverer.deliveryTime}`}
                image={deliverer.logoLink}
                title={deliverer.name}
              />
            );
          })}
        </Grid>
      </RadioGroup>
    </>
  );
}
