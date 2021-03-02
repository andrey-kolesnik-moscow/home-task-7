import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

function GridTextField({ item, register, defaultValue, error }) {
  return (
    <Grid item xs={item.size}>
      <TextField
        name={item.field}
        defaultValue={defaultValue}
        label={item.label}
        inputRef={register({ required: true, pattern: item.pattern })}
        style={{ width: '100%', color: 'red' }}
        variant="outlined"
        error={error ? true : false}
        helperText={
          !error
            ? ''
            : error.type === 'required'
            ? 'This field is required'
            : `Please type your real ${item.label}`
        }
      />
    </Grid>
  );
}

export default GridTextField;
