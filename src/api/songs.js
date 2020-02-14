import {getToken} from "../services/LocalStorage";

export async function createSong(song) {
  const data = await fetch('/songs', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify(song),
  });

  if (data.status === 401) {
    alert('Невалидный токен! Попробуйте залогиниться заново...');
    return { created: false };
  }

  const response = await data.json();

  if (data.status === 500) {
    console.error('Error:', response.message);
    return { created: false };
  }

  alert(response.message);
  return { created: true };
}
