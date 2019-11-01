import React, { useState, useCallback } from 'react';
import {
  makeStyles,
  Button,
  IconButton,
  TextField,
} from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

const verseTypes = {
  verse: 'Куплет',
  chorus: 'Припев',
  bridge: 'Мост',
};

const useStyles = makeStyles(theme => ({
  verseRowButton: {
    margin: '0 4px',
  },
}));

function Verse({ type, remove, verse, update }) {
  const classes = useStyles();

  const [verseRows, setVerseRows] = useState(verse.lines);

  const changeVerseRow = useCallback(
    (index, value) => {
      const newRows = verseRows.slice();
      newRows[index] = value;
      setVerseRows(newRows);
      update(newRows);
    },
    [verseRows],
  );
  const addRow = useCallback(
    () => {
      const newRows = verseRows.slice();
      newRows.push('');
      setVerseRows(newRows);
      update(newRows);
    },
    [verseRows],
  );
  const removeRow = useCallback(
    () => {
      const newRows = verseRows.slice();
      newRows.pop();
      setVerseRows(newRows);
      update(newRows);
    },
    [verseRows],
  );

  if (!verse) return null;
  return (
    <fieldset className='verse'>
      <legend className='verse-title'>
        <span className='verse-title-text'>{verseTypes[type]}</span>
        <Button
          onClick={addRow}
          classes={{ root: classes.verseRowButton }}
          variant='contained'
          size='small'
        >
          Добавить строку
        </Button>
        <Button
          onClick={removeRow}
          classes={{ root: classes.verseRowButton }}
          variant='contained'
          size='small'
        >
          Удалить строку
        </Button>
        <IconButton onClick={remove} aria-label='delete' size='small'>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </legend>
      {verseRows.map((row, index) => <TextField
        value={row}
        onChange={(e) => changeVerseRow(index, e.target.value)}
        required
      />)}
    </fieldset>
  );
}

export default Verse;
