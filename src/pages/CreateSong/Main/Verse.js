import React, { useCallback } from 'react';
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

function Verse({ isButtonsDrawn, type, remove, verse, update, incRowsCount, decRowsCount }) {
  const classes = useStyles();

  const changeVerseRow = useCallback(
    (index, value) => {
      const newRows = verse.rows.slice();
      newRows[index] = value;
      update(newRows);
    },
    [verse.rows, update],
  );
  const addRow = useCallback(
    () => {
      const newRows = verse.rows.slice();
      newRows.push('');
      update(newRows);
      incRowsCount();
    },
    [verse.rows, update, incRowsCount],
  );
  const removeRow = useCallback(
    () => {
      const newRows = verse.rows.slice();
      newRows.pop();
      update(newRows);
      decRowsCount();
    },
    [verse.rows, update, decRowsCount],
  );

  if (!verse.rows) return null;
  return (
    <fieldset className='verse'>
      <legend className='verse-title'>
        <span className='verse-title-text'>{verseTypes[type]}</span>
        {
          isButtonsDrawn && (
            <>
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
            </>
          )
        }
        <IconButton onClick={remove} aria-label='delete' size='small'>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </legend>
      {verse.rows.map((row, index) => <TextField
        key={index} value={row}
        onChange={(e) => changeVerseRow(index, e.target.value)}
        required
      />)}
    </fieldset>
  );
}

export default Verse;
