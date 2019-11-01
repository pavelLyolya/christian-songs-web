import React from 'react';
import {
  makeStyles,
  Button,
  TextField,
} from '@material-ui/core';
import '../styles/Main.css';

const useStyles = makeStyles(theme => ({
  verseRowButton: {
    margin: '0 10px',
  },
}));

function Main() {
  const classes = useStyles();

  return (
    <main className="content">
      <div className="content-wrap wrap">
        <form className="form">
          <section className="song-info">
            <TextField
              id="song-name"
              label='Название песни'
              margin='normal'
              variant='outlined'
              required
            />
          </section>
          <section className="song-text section">
            <h2 className="section-title">Текст песни</h2>
            <div className="verses">
              <fieldset className="verse">
                <legend className="verse-title">
                  <span>Куплет</span>
                  <Button classes={{ root: classes.verseRowButton }} variant='contained' className="add-row">Добавить строку</Button>
                  <Button variant='contained' className="delete-row">Удалить строку</Button>
                </legend>
                <TextField required />
                <TextField required />
                <TextField required />
                <TextField required />
              </fieldset>
            </div>
            <button className="add-verse">Добавить куплет</button>
            <fieldset className="verse chorus">
              <legend className="verse-title">
                <input id="isChorus" type="checkbox" />
                <span>Припев</span>
                <button className="add-row">Добавить строку</button>
                <button className="delete-row">Удалить строку</button>
              </legend>
              <TextField required />
              <TextField required />
              <TextField required />
              <TextField required />
            </fieldset>
            <fieldset className="verse bridge">
              <legend className="verse-title">
                <input id="isBridge" type="checkbox" />
                <span>Мост</span>
                <button className="add-row">Добавить строку</button>
                <button className="delete-row">Удалить строку</button>
              </legend>
              <TextField required />
              <TextField required />
              <TextField required />
              <TextField required />
            </fieldset>
          </section>
          <section className="song-chords section">
            <h2 className="section-title">Аккорды</h2>
            <fieldset id="verse-chords" className="verse">
              <legend className="verse-title">Куплет</legend>
              <div className="chords-row">
                <select name="chords" required>
                  <option selected></option>
                </select>
                <button className="add-chord">&#43;</button>
                <button className="delete-chord">&#8722;</button>
              </div>
              <div className="chords-row">
                <select name="chords" required>
                  <option selected></option>
                </select>
                <button className="add-chord">&#43;</button>
                <button className="delete-chord">&#8722;</button>
              </div>
              <div className="chords-row">
                <select name="chords" required>
                  <option selected></option>
                </select>
                <button className="add-chord">&#43;</button>
                <button className="delete-chord">&#8722;</button>
              </div>
              <div className="chords-row">
                <select name="chords" required>
                  <option selected></option>
                </select>
                <button className="add-chord">&#43;</button>
                <button className="delete-chord">&#8722;</button>
              </div>
            </fieldset>
            <fieldset id="chorus-chords" className="verse">
              <legend className="verse-title">Припев</legend>
              <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
            </fieldset>
            <fieldset id="bridge-chords" className="verse">
              <legend className="verse-title">Мост</legend>
              <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
                <div className="chords-row">
                  <select name="chords" required>
                    <option selected></option>
                  </select>
                  <button className="add-chord">&#43;</button>
                  <button className="delete-chord">&#8722;</button>
                </div>
            </fieldset>
          </section>
          <input id="submit" type="submit" value="Добавить" required />
        </form>
      </div>
    </main>
  );
}

export default Main;
