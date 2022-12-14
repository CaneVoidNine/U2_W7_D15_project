async function onFormSubmit(event) {
  event.preventDefault();

  const newMovie = {
    name: document.querySelector("#name").value,
    description: document.querySelector("#description").value,
    category: document.querySelector("#genre").value,
    imageUrl: document.querySelector("#imageUrl").value,
  };

  const options = {
    method: "POST",
    body: JSON.stringify(newMovie),
    headers: {
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
      "Content-Type": "application/json",
    },
  };

  try {
    const endpoint = "https://striveschool-api.herokuapp.com/api/movies/";
    const response = await fetch(endpoint, options);
    if (response.ok) {
      alert("New movie has been succesfully added!");
    } else {
      throw new Error("Oops, something went wrong!");
    }
  } catch (error) {
    console.log(error);
  }
}
const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
  },
};
const loadMovies = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/horror",
    options
  );
  const movie = await response.json();
  return movie;
};
const renderMovies = (movie) => {
  let containerMovie = document.querySelector("#lister ul");
  movie.forEach((item) => {
    let liMovie = document.createElement("li");
    let liButt = document.createElement("button");
    let liButtDel = document.createElement("button");
    liButt.className = "btn btn-success";
    liMovie.className = "list-group-item";
    liButtDel.className = "btn btn-danger";

    liMovie.innerText = `${item.name}, ${item.description}, ${item.category}`;
    liButt.innerText = "Edit";
    liButtDel.innerText = "Delete";
    containerMovie.appendChild(liMovie);
    containerMovie.appendChild(liButt);
    containerMovie.appendChild(liButtDel);
  });
};
const loadMoviess = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/action",
    options
  );
  const moviess = await response.json();
  return moviess;
};
const renderMoviess = (moviess) => {
  let containerMovie = document.querySelector("#listere ul");
  moviess.forEach((item) => {
    let liMovie = document.createElement("li");
    let liButt = document.createElement("button");
    let liButtDel = document.createElement("button");
    liButt.className = "btn btn-success";
    liMovie.className = "list-group-item";

    liButtDel.className = "btn btn-danger";
    liButt.innerText = "Edit";
    liButtDel.innerText = "Delete";
    liMovie.innerText = `${item.name}, ${item.description}, ${item.category}`;
    containerMovie.appendChild(liMovie);
    containerMovie.appendChild(liButt);
    containerMovie.appendChild(liButtDel);
  });
};
const loadMoviesss = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/anime",
    options
  );
  const moviez = await response.json();
  return moviez;
};
const renderMoviesss = (moviez) => {
  let containerMovie = document.querySelector("#listerer ul");
  moviez.forEach((item) => {
    let liMovie = document.createElement("li");
    let liButt = document.createElement("button");
    let liButtDel = document.createElement("button");
    liButt.className = "btn btn-success";
    liButtDel.className = "btn btn-danger";
    liMovie.className = "list-group-item";
    liButt.innerText = "Edit";
    liButtDel.innerText = "Delete";
    liMovie.innerText = `${item.name}, ${item.description}, ${item.category}`;
    containerMovie.appendChild(liMovie);
    containerMovie.appendChild(liButt);
    containerMovie.appendChild(liButtDel);
  });
};
/* <ul class="list-group">
<li class="list-group-item">An item</li>
<li class="list-group-item">A second item</li>
<li class="list-group-item">A third item</li>
<li class="list-group-item">A fourth item</li>
<li class="list-group-item">And a fifth one</li>
</ul>
*/
Dbutton = document.querySelector(".btn btn-danger");
const optionDelete = {
  method: "DELETE",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
    "Content-Type": "application/json",
  },
};

const deleteMovie = async () => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${movieId}`,
    optionDelete
  );
  if (confirm("Do you really want to delete this movie?")) {
    if (response.ok) {
      alert("The movie was deleted successfully!");
    } else {
      throw new Error("Error! Please try again!");
    }
  }

  Dbutton.addEventListener("click", deleteMovie);
};
const optionEdit = {
  method: "PUT",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
    "Content-Type": "application/json",
  },
};

const editMovie = async () => {
  const response = await fetch(
    `https://striveschool-api.herokuapp.com/api/movies/${movieId}`,
    optionEdit
  );
  if (response.ok) {
    alert("The movie was edited successfully!");
  } else {
    throw new Error("Error! Please try again!");
  }
};
window.onload = async () => {
  const item = await loadMovies();
  const items = await loadMoviess();
  const itemz = await loadMoviesss();
  renderMovies(item);
  renderMoviess(items);
  renderMoviesss(itemz);
};
// Got really confused with my code will try to rebuild it and do it properly...
