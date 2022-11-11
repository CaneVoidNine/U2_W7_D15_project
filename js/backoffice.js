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
