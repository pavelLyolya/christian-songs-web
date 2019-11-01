import React, { useState, useCallback } from 'react';
import {
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';
import '../../styles/Main.css';
import Verse from './Verse';
import Chords from './Chords';

const useStyles = makeStyles(theme => ({
  verseRowButton: {
    marginTop: '10px',
    marginRight: '4px',
  },
}));

function Main() {
  const classes = useStyles();

  const [ songName, setSongName ] = useState('');

  const [ versesRowsCount, setVersesRowsCount ] = useState(4);
  const [ chorusRowsCount, setChorusRowsCount ] = useState(4);
  const [ bridgeRowsCount, setBridgeRowsCount ] = useState(4);

  const [ verses, setVerses ] = useState([{ lines: ['', '', '', ''] }]);
  const [ chorus, setChorus ] = useState({ lines: new Array(chorusRowsCount) });
  const [ bridge, setBridge ] = useState({ lines: new Array(bridgeRowsCount) });

  const addVerse = useCallback(
    () => setVerses([ ...verses, { lines: ['', '', '', ''] } ]),
    [verses, versesRowsCount],
  );
  const updateVerse = useCallback(
    (indexToUpdate, value) => {
      const newVersesArray = verses.slice();
      newVersesArray[indexToUpdate].lines = value;
      setVerses(newVersesArray);
    },
    [verses]
  );
  console.log(verses)
  const removeVerse = useCallback((indexToDelete) => {
    const newVersesArray = verses.slice();
    console.log(newVersesArray);
    newVersesArray.splice(indexToDelete, 1);
    setVerses(newVersesArray);
  }, [verses]);

  const addChorus = useCallback(
    () => setChorus({ lines: new Array(chorusRowsCount) }),
    [chorusRowsCount]
  );
  const removeChorus = useCallback(() => setChorus(null), []);

  const addBridge = useCallback(
    () => setBridge({ lines: new Array(bridgeRowsCount) }),
    [bridgeRowsCount]
  );
  const removeBridge = useCallback(() => setBridge(null), []);

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
              {verses.map((verse, index) => <Verse
                verse={verse} update={(value) => updateVerse(index, value)}
                type='verse' remove={() => removeVerse(index)}
              />)}
            </div>
            <Button
              onClick={addVerse} className='add-verse-button'
              classes={{ root: classes.verseRowButton }} variant='contained' size='small' color='primary'
            >
              Добавить куплет
            </Button>
            {
              chorus
                ? <Verse verse={chorus} remove={removeChorus} type='chorus' />
                : <Button
                  onClick={addChorus} className='add-verse-button'
                  classes={{ root: classes.verseRowButton }} variant='contained' size='small' color='primary'
                >
                  Добавить припев
                </Button>
            }
            {
              bridge
                ? <Verse verse={bridge} remove={removeBridge} type='bridge' />
                : <Button
                  onClick={addBridge} className='add-verse-button'
                  classes={{ root: classes.verseRowButton }} variant='contained' size='small' color='primary'
                >
                  Добавить мост
                </Button>
            }
          </section>
          <section className='song-chords section'>
            { !!verses.length && <Chords type='verse' /> }
            { chorus && <Chords type='chorus' /> }
            { bridge && <Chords type='bridge' /> }
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
