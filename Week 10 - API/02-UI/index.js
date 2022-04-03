// Get Users
const getButton = document.getElementById('get-data-button');
getButton.addEventListener('click', () => {
  const result = fetch('http://localhost:3000/users', {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
  });

  result
    .then((res) => {
      console.log('Request complete! response:', res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
});

// Post
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', () => {
  const data = {
    id: '6',
    name: 'Rob',
    age: '25',
  };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log('Request complete! response:', res);
  });
});

// PUT
const putBotton = document.getElementById('put-button');

putBotton.addEventListener('click', () => {
  const data = {
    id: '6',
    name: 'Robbie',
    age: '30',
  };

  fetch(`http://localhost:3000/users/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  }).then((res) => {
    console.log('Request complete! response:', res);
  });
});

// DELETE
const deleteBotton = document.getElementById('delete-button');

deleteBotton.addEventListener('click', () => {
  const data = {
    id: '6',
    name: 'Robbie',
    age: '30',
  };

  fetch(`http://localhost:3000/users/${data.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  }).then((res) => {
    console.log('Request complete! response:', res);
  });
});
