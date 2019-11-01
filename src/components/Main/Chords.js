import React from 'react';
import {
  makeStyles,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';

const verseTypes = {
  verse: 'Куплет',
  chorus: 'Припев',
  bridge: 'Мост',
};

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 50,
  },
}));

function Verse({ type }) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <fieldset id='verse-chords' className='verse'>
      <legend className='verse-title'>{verseTypes[type]}</legend>
      <div className='chords-row'>
        <FormControl className={classes.formControl}>
          <Select
            id='demo-simple-select-outlined'
            value={age}
            onChange={handleChange}
          >
            <MenuItem value=''>
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <button onClick={(e) => {e.preventDefault();console.log('hi');}} className='add-chord'>&#43;</button>
        <button className='delete-chord'>&#8722;</button>
      </div>
    </fieldset>
  );
}

export default Verse;
