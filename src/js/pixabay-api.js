import axios from 'axios';

const options = {
  method: 'GET',
};

fetch('https://pixabay.com/api/', options)
  .then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });
