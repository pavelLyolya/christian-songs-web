export const createEmptyVerse = (length = 4) => {
  const verseTemplate = new Array(length);
  return verseTemplate.fill('');
};

export const createEmptyChords = (length = 4) => {
  const chordsTemplate = [];
  for (let index = 0; index < length; index++) {
    chordsTemplate.push(['']);
  }
  return chordsTemplate;
};

export const setRowsCountForVerse = (verse, rowsCount) => {
  const newVerse = verse.slice();
  if (newVerse.length >= rowsCount) {
    newVerse.length = rowsCount;
  } else {
    let diff = rowsCount - newVerse.length;
    while (diff > 0) {
      newVerse.push('');
      diff--;
    }
  }
  return newVerse;
};

export const updateChordsRowCount = (chordsArr, rowsCount) => {
  const newChordsArr = chordsArr.slice();
  if (newChordsArr.length >= rowsCount) {
    newChordsArr.length = rowsCount;
  } else {
    let diff = rowsCount - newChordsArr.length;
    while (diff > 0) {
      newChordsArr.push(['']);
      diff--;
    }
  }
  return newChordsArr;
};
