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
      const infoUI = document.getElementById('get-content-area');
      infoUI.innerHTML = '';
      for (let i = 0; i < data.length; i++) {
        infoUI.innerHTML +=
          'Name: ' + data[i].name + ' \tAge:' + data[i].age + '<br>';
      }
    })
    .catch((error) => {
      console.log(error);
    });
});

// Post
const postButton = document.getElementById('post-button');

postButton.addEventListener('click', () => {
  const postID = document.getElementById('post-id').value;
  const postName = document.getElementById('post-name').value;
  const postAge = document.getElementById('post-age').value;

  const postData = {
    id: postID,
    name: postName,
    age: postAge,
  };

  fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const postResponse = document.getElementById('post-content-area');
      postResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const postResponse = document.getElementById('post-content-area');
      postResponse.innerHTML = error;
    });
});

// PUT
const putBotton = document.getElementById('put-button');

putBotton.addEventListener('click', () => {
  const putID = document.getElementById('put-id').value;
  const putName = document.getElementById('put-name').value;
  const putAge = document.getElementById('put-age').value;

  const data = {
    id: putID,
    name: putName,
    age: putAge,
  };
  console.log(data);

  fetch(`http://localhost:3000/users/${data.id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const putResponse = document.getElementById('put-content-area');
      putResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const putResponse = document.getElementById('put-content-area');
      putResponse.innerHTML = error;
    });
});

// DELETE
const deleteButton = document.getElementById('delete-button');

deleteButton.addEventListener('click', () => {
  const deleteID = document.getElementById('delete-id').value;
  console.log(deleteID);
  fetch(`http://localhost:3000/users/${deleteID}`, {
    method: 'DELETE',
  })
    .then((res) => {
      console.log('Request complete! response:', res);
      const deleteResponse = document.getElementById('delete-content-area');
      deleteResponse.innerHTML = res.status;
    })
    .catch((error) => {
      const deleteResponse = document.getElementById('delete-content-area');
      deleteResponse.innerHTML = error;
    });
});
