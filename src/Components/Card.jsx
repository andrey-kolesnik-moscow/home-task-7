import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 0',
    borderRadius: '10px',
  },
  image: {
    maxWidth: 40,
    maxHeight: 24,
    marginRight: theme.spacing(1),
    marginLeft: 10,
    borderRadius: 3,
  },
  info: {
    display: 'flex',
  },
}));

function Card({ image, title, deliveryTime }) {
  const classes = useStyles();

  return (
    <Grid item xs={6}>
      <Paper className={classes.paper} variant="outlined">
        <div>
          <div className={classes.info}>
            <div>
              <img alt={title} className={classes.image} src={image} />
            </div>

            <Typography variant="body1">{title}</Typography>
          </div>
          <Typography variant="body2" style={{ marginLeft: '10px' }}>
            {deliveryTime}
          </Typography>
        </div>
        <FormControlLabel value={title} control={<Radio />} />
      </Paper>
    </Grid>
  );
}

export default Card;
