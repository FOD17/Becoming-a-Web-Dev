// For Getting Stuff Only

const jokeButton = document.getElementById('joke-button');
jokeButton.addEventListener('click', () => {
  const result = fetch('https://api.chucknorris.io/jokes/random');

  result
    .then((response) => {
      //response object as a lot of info!
      console.log(response);
      // below converts the body to the data we need
      return response.json();
    })
    .then((data) => {
      console.log(data);
      const jokeElement = document.getElementById('joke-area');
      jokeElement.innerHTML = data.value;
    })
    .catch((error) => {
      console.log(error);
    });
});

async function getNorrisJokes() {
  console.log('calling Norris');
  const result = await fetch('https://api.chucknorris.io/jokes/random');
  console.log(result);
  const data = await result.json();
  return data.value;
}

const jokeButtonAsync = document.getElementById('joke-button-async');
jokeButtonAsync.addEventListener('click', async () => {
  const result = await getNorrisJokes();
  console.log('result', result);
  const jokeElement = document.getElementById('joke-area');
  jokeElement.innerHTML = result;
});
