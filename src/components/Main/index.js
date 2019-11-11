import React, { useState, useCallback, useRef } from 'react';
import {
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';
import '../../styles/Main.css';
import Verse from './Verse';
import Chords from './Chords';
import {
  createEmptyVerse,
  createEmptyChords,
  setRowsCountForVerse,
  updateChordsRowCount
} from '../../helpers';

const useStyles = makeStyles(theme => ({
  verseRowButton: {
    marginTop: '10px',
    marginRight: '4px',
  },
}));

function Main() {
  const classes = useStyles();
  const form = useRef(null);

  const [ songName, setSongName ] = useState('');
  const [ versesRowsCount, setVersesRowsCount ] = useState(4);
  const [ chorusRowsCount, setChorusRowsCount ] = useState(4);
  const [ bridgeRowsCount, setBridgeRowsCount ] = useState(4);
  const [ verses, setVerses ] = useState([{ rows: createEmptyVerse(versesRowsCount) }]);
  const [ chorus, setChorus ] = useState({ rows: createEmptyVerse(chorusRowsCount) });
  const [ bridge, setBridge ] = useState({ rows: createEmptyVerse(bridgeRowsCount) });
  const [ verseChords, setVerseChords ] = useState(createEmptyChords(versesRowsCount));
  const [ chorusChords, setChorusChords ] = useState(createEmptyChords(chorusRowsCount));
  const [ bridgeChords, setBridgeChords ] = useState(createEmptyChords(bridgeRowsCount));

  const setVerseChord = useCallback(
    (rowIndex, chordIndex, value) => {
      const newVerseChords = verseChords.slice();
      newVerseChords[rowIndex][chordIndex] = value;
      setVerseChords(newVerseChords);
    },
    [verseChords],
  );
  const setChorusChord = useCallback(
    (rowIndex, chordIndex, value) => {
      const newChorusChords = chorusChords.slice();
      newChorusChords[rowIndex][chordIndex] = value;
      setChorusChords(newChorusChords);
    },
    [chorusChords],
  );
  const setBridgeChord = useCallback(
    (rowIndex, chordIndex, value) => {
      const newBridgeChords = bridgeChords.slice();
      newBridgeChords[rowIndex][chordIndex] = value;
      setBridgeChords(newBridgeChords);
    },
    [bridgeChords],
  );

  const addVerseChord = useCallback(
    (rowIndex) => {
      const newVerseChords = verseChords.slice();
      newVerseChords[rowIndex].push('');
      setVerseChords(newVerseChords);
    },
    [verseChords],
  );
  const removeVerseChord = useCallback(
    (rowIndex) => {
      const newVerseChords = verseChords.slice();
      newVerseChords[rowIndex].pop();
      setVerseChords(newVerseChords);
    },
    [verseChords],
  );

  const addChorusChord = useCallback(
    (rowIndex) => {
      const newVerseChords = chorusChords.slice();
      newVerseChords[rowIndex].push('');
      setChorusChords(newVerseChords);
    },
    [chorusChords],
  );
  const removeChorusChord = useCallback(
    (rowIndex) => {
      const newVerseChords = chorusChords.slice();
      newVerseChords[rowIndex].pop();
      setChorusChords(newVerseChords);
    },
    [chorusChords],
  );

  const addBridgeChord = useCallback(
    (rowIndex) => {
      const newVerseChords = bridgeChords.slice();
      newVerseChords[rowIndex].push('');
      setBridgeChords(newVerseChords);
    },
    [bridgeChords],
  );
  const removeBridgeChord = useCallback(
    (rowIndex) => {
      const newVerseChords = bridgeChords.slice();
      newVerseChords[rowIndex].pop();
      setBridgeChords(newVerseChords);
    },
    [bridgeChords],
  );

  const changeSongName = useCallback((e) => setSongName(e.target.value), []);

  const addVerse = useCallback(
    () => setVerses([ ...verses, { rows: createEmptyVerse(versesRowsCount) } ]),
    [verses, versesRowsCount],
  );
  const updateVerse = useCallback(
    (indexToUpdate, value) => {
      const newVersesArray = verses.slice();
      newVersesArray[indexToUpdate].rows = value;
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
      const newVersesArray = verses.map((verse) => ({ rows: setRowsCountForVerse(verse.rows, newVersesRowsCount) }));
      const newVerseChords = updateChordsRowCount(verseChords, newVersesRowsCount);
      setVerseChords(newVerseChords);
      setVerses(newVersesArray);
    },
    [verses, versesRowsCount, verseChords],
  );
  const decVersesRowsCount = useCallback(
    () => {
      if (versesRowsCount === 0) return;
      const newVersesRowsCount = versesRowsCount - 1;
      setVersesRowsCount(newVersesRowsCount);
      const newVersesArray = verses.map((verse, index) => ({ rows: setRowsCountForVerse(verse.rows, newVersesRowsCount) }));
      const newVerseChords = updateChordsRowCount(verseChords, newVersesRowsCount);
      setVerseChords(newVerseChords);
      setVerses(newVersesArray);
    },
    [verses, versesRowsCount, verseChords],
  );

  const addChorus = useCallback(
    () => setChorus({ rows: createEmptyVerse(chorusRowsCount) }),
    [chorusRowsCount]
  );
  const updateChorus = useCallback((newChorus) => setChorus({ rows: newChorus }), []);
  const removeChorus = useCallback(() => {
    setChorusChords(null);
    setChorus(null);
  }, []);

  const incChorusRowsCount = useCallback(
    () => {
      const newChorusRowsCount = chorusRowsCount + 1;
      setChorusRowsCount(newChorusRowsCount);
      const newChorusArray = { rows: setRowsCountForVerse(chorus.rows, newChorusRowsCount) };
      const newVerseChords = updateChordsRowCount(chorusChords, newChorusRowsCount);
      setChorusChords(newVerseChords);
      setChorus(newChorusArray);
    },
    [chorus, chorusRowsCount, chorusChords],
  );
  const decChorusRowsCount = useCallback(
    () => {
      if (chorusRowsCount === 0) return;
      const newChorusRowsCount = chorusRowsCount - 1;
      setChorusRowsCount(newChorusRowsCount);
      const newChorusArray = { rows: setRowsCountForVerse(chorus.rows, newChorusRowsCount) };
      const newChorusChords = updateChordsRowCount(chorusChords, newChorusRowsCount);
      setChorusChords(newChorusChords);
      setChorus(newChorusArray);
    },
    [chorus, chorusRowsCount, chorusChords],
  );

  const addBridge = useCallback(
    () => setBridge({ rows: createEmptyVerse(bridgeRowsCount) }),
    [bridgeRowsCount]
  );
  const updateBridge = useCallback((newBridge) => setBridge({ rows: newBridge }), []);
  const removeBridge = useCallback(() => {
    setBridgeChords(null);
    setBridge(null);
  }, []);

  const incBridgeRowsCount = useCallback(
    () => {
      const newBridgeRowsCount = bridgeRowsCount + 1;
      setBridgeRowsCount(newBridgeRowsCount);
      const newBridgeArray = { rows: setRowsCountForVerse(bridge.rows, newBridgeRowsCount) };
      const newBridgeChords = updateChordsRowCount(bridgeChords, newBridgeRowsCount);
      setBridgeChords(newBridgeChords);
      setBridge(newBridgeArray);
    },
    [bridge, bridgeRowsCount, bridgeChords],
  );
  const decBridgeRowsCount = useCallback(
    () => {
      if (bridgeRowsCount === 0) return;
      const newBridgeRowsCount = bridgeRowsCount - 1;
      setBridgeRowsCount(newBridgeRowsCount);
      const newBridgeArray = { rows: setRowsCountForVerse(bridge.rows, newBridgeRowsCount) };
      const newBridgeChords = updateChordsRowCount(bridgeChords, newBridgeRowsCount);
      setBridgeChords(newBridgeChords);
      setBridge(newBridgeArray);
    },
    [bridge, bridgeRowsCount, bridgeChords],
  );

  const onSubmit = useCallback(
    () => {
      if (form.current.reportValidity()) {
        const song = {
          name: songName,
          publishDate: new Date().toISOString(),
          verses,
          chorus,
          bridge,
          chords: {
            verse: verseChords && verseChords.map(row => ({ items: row })),
            chorus: chorusChords && chorusChords.map(row => ({ items: row })),
            bridge: bridgeChords && bridgeChords.map(row => ({ items: row })),
          },
        };
        const urlParams = new URLSearchParams(window.location.search);
        const accessKey = urlParams.get('accessKey');
        fetch('/admin/create', {
          method: 'POST',
          body: JSON.stringify(song),
          headers: {
            'Content-Type': 'application/json',
            'X-Access-Key': accessKey,
          },
        }).then(res => res.json())
          .then((response) => {
            // eslint-disable-next-line no-alert
            alert(`Message: ${response.message}`);
            window.location.reload();
          })
          .catch(error => console.error('Error:', error.message));
      }
    },
    [
      songName,
      verses,
      chorus,
      bridge,
      verseChords,
      chorusChords,
      bridgeChords,
      form
    ],
  )

  return (
    <main className='content'>
      <div className='content-wrap wrap'>
        <form ref={form} className='form'>
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
            { !!verses.length && <Chords
              type='verse'
              chords={verseChords}
              setChord={setVerseChord} addChord={addVerseChord} removeChord={removeVerseChord}
            /> }
            { chorus && <Chords
              type='chorus'
              chords={chorusChords}
              setChord={setChorusChord} addChord={addChorusChord} removeChord={removeChorusChord}
            /> }
            { bridge && <Chords
              type='bridge'
              chords={bridgeChords}
              setChord={setBridgeChord} addChord={addBridgeChord} removeChord={removeBridgeChord}
            /> }
          </section>
          <Button
            onClick={onSubmit}
            className='submit'
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
