function fetchBooks() {
  const url = 'https://anapioficeandfire.com/api/books';
  return fetch(url)
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => {
          console.error('Error fetching books:', error);
      });
}



function renderBooks(data) {
  // Assuming `data` is an array of book objects
  const bookTitles = data.map(book => book.title);
  // Example: Render titles into the DOM
  const container = document.getElementById('book-container');
  container.innerHTML = ''; // Clear previous content
  bookTitles.forEach(title => {
      const titleElement = document.createElement('div');
      titleElement.textContent = title;
      container.appendChild(titleElement);
  });
}

