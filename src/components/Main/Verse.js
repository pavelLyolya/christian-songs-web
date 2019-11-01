import React from 'react';
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

function Verse({ type }) {
  const classes = useStyles();
  return (
    <fieldset className='verse'>
      <legend className='verse-title'>
        <span className='verse-title-text'>{verseTypes[type]}</span>
        <Button
          classes={{ root: classes.verseRowButton }}
          variant='contained'
          size='small'
        >
          Добавить строку
        </Button>
        <Button
          classes={{ root: classes.verseRowButton }}
          variant='contained'
          size='small'
        >
          Удалить строку
        </Button>
        <IconButton aria-label='delete' size='small'>
          <DeleteIcon fontSize='large' />
        </IconButton>
      </legend>
      <TextField required />
      <TextField required />
      <TextField required />
      <TextField required />
    </fieldset>
  );
}

export default Verse;
