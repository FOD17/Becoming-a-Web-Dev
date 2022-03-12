import { getJoke, getNorrisJokes } from './fetch.js';

// For Getting Stuff Only
const jokeButton = document.getElementById('joke-button');
jokeButton.addEventListener('click', getJoke);

const jokeButtonAsync = document.getElementById('joke-button-async');
jokeButtonAsync.addEventListener('click', async () => {
  const result = await getNorrisJokes();
  console.log('result', result);
  const jokeElement = document.getElementById('joke-area');
  jokeElement.innerHTML = result;
});
