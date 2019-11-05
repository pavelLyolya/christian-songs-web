import React, { useState, useCallback } from 'react';
import {
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';
import '../../styles/Main.css';
import Verse from './Verse';
import Chords from './Chords';
import { createEmptyVerse, setRowsCountForVerse } from '../../helpers';

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
  const [ verses, setVerses ] = useState([{ lines: createEmptyVerse(versesRowsCount) }]);
  const [ chorus, setChorus ] = useState({ lines: createEmptyVerse(chorusRowsCount) });
  const [ bridge, setBridge ] = useState({ lines: createEmptyVerse(bridgeRowsCount) });

  console.log(verses);

  const changeSongName = useCallback((e) => setSongName(e.target.value), []);

  const addVerse = useCallback(
    () => setVerses([ ...verses, { lines: createEmptyVerse(versesRowsCount) } ]),
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
  const removeVerse = useCallback((indexToDelete) => {
    const newVersesArray = verses.slice();
    newVersesArray.splice(indexToDelete, 1);
    setVerses(newVersesArray);
  }, [verses]);

  const incVersesRowsCount = useCallback(
    () => {
      const newVersesRowsCount = versesRowsCount + 1;
      setVersesRowsCount(newVersesRowsCount);
      const newVersesArray = verses.map((verse) => ({ lines: setRowsCountForVerse(verse.lines, newVersesRowsCount) }));
      console.log(newVersesArray);
      setVerses(newVersesArray);
    },
    [verses, versesRowsCount],
  );
  const decVersesRowsCount = useCallback(
    () => {
      if (versesRowsCount === 0) return;
      const newVersesRowsCount = versesRowsCount - 1;
      setVersesRowsCount(newVersesRowsCount);
      const newVersesArray = verses.map((verse, index) => ({ lines: setRowsCountForVerse(verse.lines, newVersesRowsCount) }));
      console.log(newVersesArray);
      setVerses(newVersesArray);
    },
    [verses, versesRowsCount],
  );

  const addChorus = useCallback(
    () => setChorus({ lines: createEmptyVerse(chorusRowsCount) }),
    [chorusRowsCount]
  );
  const updateChorus = useCallback((newChorus) => setChorus({ lines: newChorus }), []);
  const removeChorus = useCallback(() => setChorus(null), []);

  const incChorusRowsCount = useCallback(
    () => {
      const newChorusRowsCount = chorusRowsCount + 1;
      setChorusRowsCount(newChorusRowsCount);
      const newChorusArray = { lines: setRowsCountForVerse(chorus.lines, newChorusRowsCount) };
      console.log(newChorusArray);
      setChorus(newChorusArray);
    },
    [chorus, chorusRowsCount],
  );
  const decChorusRowsCount = useCallback(
    () => {
      if (chorusRowsCount === 0) return;
      const newChorusRowsCount = chorusRowsCount - 1;
      setChorusRowsCount(newChorusRowsCount);
      const newChorusArray = { lines: setRowsCountForVerse(chorus.lines, newChorusRowsCount) };
      console.log(newChorusArray);
      setChorus(newChorusArray);
    },
    [chorus, chorusRowsCount],
  );

  const addBridge = useCallback(
    () => setBridge({ lines: createEmptyVerse(bridgeRowsCount) }),
    [bridgeRowsCount]
  );
  const updateBridge = useCallback((newBridge) => setBridge({ lines: newBridge }), []);
  const removeBridge = useCallback(() => setBridge(null), []);

  const incBridgeRowsCount = useCallback(
    () => {
      const newBridgeRowsCount = bridgeRowsCount + 1;
      setBridgeRowsCount(newBridgeRowsCount);
      const newBridgeArray = { lines: setRowsCountForVerse(bridge.lines, newBridgeRowsCount) };
      console.log(newBridgeArray);
      setBridge(newBridgeArray);
    },
    [bridge, bridgeRowsCount],
  );
  const decBridgeRowsCount = useCallback(
    () => {
      if (bridgeRowsCount === 0) return;
      const newBridgeRowsCount = bridgeRowsCount - 1;
      setBridgeRowsCount(newBridgeRowsCount);
      const newBridgeArray = { lines: setRowsCountForVerse(bridge.lines, newBridgeRowsCount) };
      console.log(newBridgeArray);
      setBridge(newBridgeArray);
    },
    [bridge, bridgeRowsCount],
  );

  return (
    <main className='content'>
      <div className='content-wrap wrap'>
        <form className='form'>
          <section className='song-info'>
            <TextField
              id='song-name'
              label='Название песни'
              value={songName}
              onChange={changeSongName}
              margin='normal'
              variant='outlined'
              required
            />
          </section>
          <section className='song-text section'>
            <div className='verses'>
              {verses.map((verse, index) => <Verse
                key={index} isButtonsDrawn={index === 0}
                incRowsCount={incVersesRowsCount} decRowsCount={decVersesRowsCount}
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
                ? <Verse
                  isButtonsDrawn verse={chorus} update={updateChorus}
                  incRowsCount={incChorusRowsCount} decRowsCount={decChorusRowsCount}
                  remove={removeChorus} type='chorus'
                />
                : <Button
                  onClick={addChorus} className='add-verse-button'
                  classes={{ root: classes.verseRowButton }} variant='contained' size='small' color='primary'
                >
                  Добавить припев
                </Button>
            }
            {
              bridge
                ? <Verse
                  isButtonsDrawn verse={bridge} update={updateBridge}
                  incRowsCount={incBridgeRowsCount} decRowsCount={decBridgeRowsCount}
                  remove={removeBridge} type='bridge'
                />
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
