import React from 'react';
import {
  makeStyles,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';
import { chordsArray } from '../../constants';

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

function Chords({ type, chords, setChord }) {
  const classes = useStyles();

  if (!chords) return null;
  return (
    <fieldset id='verse-chords' className='verse'>
      <legend className='verse-title'>{verseTypes[type]}</legend>
      {chords.map((chordsRow, rowIndex) => (
        <div className='chords-row'>
          {chordsRow.map((chord, chordIndex) => (
            <FormControl className={classes.formControl}>
              <Select
                value={chord}
                onChange={(e) => setChord(rowIndex, chordIndex, e.target.value)}
              >
                {chordsArray.map((chordConstant) => <MenuItem value={chordConstant}>{chordConstant}</MenuItem>)}
              </Select>
            </FormControl>
          ))}
          <button onClick={(e) => {e.preventDefault();console.log('hi');}} className='add-chord'>&#43;</button>
          <button className='delete-chord'>&#8722;</button>
        </div>
      ))}
    </fieldset>
  );
}

export default Chords;
