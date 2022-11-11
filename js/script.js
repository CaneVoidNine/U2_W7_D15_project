obj = {
  name: "Strive School",
  description: "Horror movie about coding 10 hours per day",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj2 = {
  name: "Yes",
  description: "Insanity",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj3 = {
  name: "No",
  description: "Kek",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj4 = {
  name: "Maybe",
  description: "Incontinent",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj5 = {
  name: "Cringe",
  description: "You",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj6 = {
  name: "Based",
  description: "On my way",
  category: "horror",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj7 = {
  name: "Hari Pota",
  description: "Damn son",
  category: "aciton",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj8 = {
  name: "Indiana Bones",
  description: "Building hoes",
  category: "action",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj9 = {
  name: "James Pond",
  description: "Pond Poggers",
  category: "action",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj10 = {
  name: "Termidaddytorr",
  description: "UwU",
  category: "action",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj11 = {
  name: "Predatornado",
  description: "If he breaths he's a simp",
  category: "action",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj12 = {
  name: "Casino battle-royale",
  description: "Chicken dinner?",
  category: "action",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj13 = {
  name: "Your waifu is thrash",
  description: "Change my mind",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj14 = {
  name: "Dodge that coin",
  description: "Damn bro",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj15 = {
  name: "Memes",
  description: "the Dna of the soul",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj16 = {
  name: "Haha pistol goes brrrr",
  description: "My brain, someone help",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj17 = {
  name: "Baka",
  description: "Deez",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};
obj18 = {
  name: "Naisu",
  description: "Ceasar-chan",
  category: "anime",
  imageUrl: "https://bit.ly/3cMc2IH",
};

const options = {
  method: "GET",
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZjZmE4MWQ0YmUzZDAwMTU4NDYwMjYiLCJpYXQiOjE2NjgwODY0MDEsImV4cCI6MTY2OTI5NjAwMX0.ecElZ8gwuFf9laGk7MvkKPExEvdCm2cnS9zzYA2TesA",
  },
};
const loadHorrorMovies = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/horror",
    options
  );
  const horror = await response.json();
  return horror;
};
const renderHorror = (horror) => {
  let containerHorror = document.querySelector("#horrori");
  horror.forEach((item) => {
    let Himage = document.createElement("div");
    Himage.className = "col-md-2";
    Himage.innerHTML = `<img class="movie-cover" src="${item.imageUrl}" /> `;
    containerHorror.appendChild(Himage);
  });
};
const loadActionMovies = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/action",
    options
  );
  const action = await response.json();
  return action;
};
const renderAction = (action) => {
  let containerAction = document.querySelector("#actioni");
  action.forEach((items) => {
    let Aimage = document.createElement("div");
    Aimage.className = "col-md-2";
    Aimage.innerHTML = `<img class="movie-cover" src="${items.imageUrl}" /> `;
    containerAction.appendChild(Aimage);
  });
};
const loadAnimeMovies = async () => {
  const response = await fetch(
    "https://striveschool-api.herokuapp.com/api/movies/anime",
    options
  );
  const anime = await response.json();
  return anime;
};
const renderAnime = (anime) => {
  let containerAction = document.querySelector("#animei");
  anime.forEach((itemz) => {
    let Animage = document.createElement("div");
    Animage.className = "col-md-2";
    Animage.innerHTML = `<img class="movie-cover" src="${itemz.imageUrl}" /> `;
    containerAction.appendChild(Animage);
  });
};
window.onload = async () => {
  const item = await loadHorrorMovies();
  const items = await loadActionMovies();
  const itemz = await loadAnimeMovies();
  renderHorror(item);
  renderAction(items);
  renderAnime(itemz);
};
