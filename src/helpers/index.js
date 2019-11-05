export const createEmptyVerse = (length = 4) => {
  const verseTemplate = new Array(length);
  return verseTemplate.fill('');
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
  console.log(newVerse)
  return newVerse;
};
