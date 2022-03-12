export function getJoke() {
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
}

export async function getNorrisJokes() {
  console.log('calling Norris');
  const result = await fetch('https://api.chucknorris.io/jokes/random');
  console.log(result);
  const data = await result.json();
  return data.value;
}
