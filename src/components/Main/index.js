import React from 'react';
import {
  Button,
  TextField,
} from '@material-ui/core';
import '../../styles/Main.css';
import Verse from './Verse';
import Chords from './Chords';

function Main() {
  return (
    <main className='content'>
      <div className='content-wrap wrap'>
        <form className='form'>
          <section className='song-info'>
            <TextField
              id='song-name'
              label='Название песни'
              margin='normal'
              variant='outlined'
              required
            />
          </section>
          <section className='song-text section'>
            <div className='verses'>
              <Verse type='verse' />
            </div>
            <Button
              variant='contained'
              size='small'
              color='primary'
            >
              Добавить куплет
            </Button>
            <Verse type='chorus' />
            <Verse type='bridge' />
          </section>
          <section className='song-chords section'>
            <Chords type='verse' />
            <Chords type='chorus' />
            <Chords type='bridge' />
          </section>
          <Button
            id='submit'
            variant='contained'
            size='small'
            color='primary'
          >
            Отправить
          </Button>
        </form>
      </div>
    </main>
  );
}

export default Main;
