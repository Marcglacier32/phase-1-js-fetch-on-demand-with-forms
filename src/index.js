const init = () => {
    const inputForm = document.querySelector('form'); // Get the form element
    
    // Add event listener for form submission
    inputForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Prevent the page from refreshing
      
      const input = document.querySelector('#searchByID'); // Get the input field
      const movieId = input.value; // Get the value entered by the user
  
      // Fetch data from the server using the entered ID
      fetch(`http://localhost:3000/movies/${movieId}`)
        .then((response) => response.json())
        .then((data) => {
          // Select the movie details section
          const title = document.querySelector('section#movieDetails h4');
          const summary = document.querySelector('section#movieDetails p');
          
          // Display the fetched movie data in the appropriate elements
          title.innerText = data.title;
          summary.innerText = data.summary;
        })
        .catch((error) => {
          // Handle any errors (e.g., if the movie ID doesn't exist)
          console.error('Error fetching movie:', error);
        });
    });
  };
  
  document.addEventListener('DOMContentLoaded', init);
  