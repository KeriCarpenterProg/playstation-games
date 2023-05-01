import games from "../utils/helpers";

export async function callFourEndpoints() {
  const gameApiStrings = [
    {
      name: "games",
      query:
        "fields id,first_release_date, name, platforms, genres, summary; where id = (",
    },
    { name: "covers", query: "fields image_id; where game = (" },
    { name: "screenshots", query: "fields image_id; where game=(" },
    { name: "game_videos", query: "fields video_id; where game = (" },
  ];
  // was games.length and gameApiStrings.length
  const b = games.length;
  const j = gameApiStrings.length;
  for (let a = 0; a < b; a++) {
    for (let i = 0; i < j; i++) {
      let key = gameApiStrings[i].name + " " + games[a].game_id;
      let data = [];
      console.log("Trying to get information for game = " + games[a].name);
      console.log("Value of a is " + a);
      console.log("The value of i is " + i);
      if (localStorage.getItem(key)) {
        console.log("Grabbing from localstorage");
        data = JSON.parse(localStorage.getItem(key));
      } else {
        await fetchIGDB(gameApiStrings[i], a);
      }
    }
  }
}

function constructHeaders() {
  let bearerObject = ["x2bgricomrbg3pobdqrkzl8fvtzwow"];
  const bearerString = "Bearer " + bearerObject;
  let a = new Headers();
  a.append("Client-ID", "9h02jtd3d8ulk1057yluksq5ry4b0m");
  a.append("Authorization", bearerString);
  a.append("Content-Type", "text/plain");
  return a;
}
function createHeaders(theHeaders, queryString) {
  const x = {
    method: "POST",
    mode: "no-cors",
    headers: theHeaders,
    body: queryString,
    redirect: "follow",
  };

  return x;
}
function parseJSON(response) {
  return response.json();
}

function convertTimestamp(timestamp) {
  var d = new Date(timestamp * 1000), // Convert the passed timestamp to milliseconds
    yyyy = d.getFullYear(),
    mm = ("0" + (d.getMonth() + 1)).slice(-2), // Months are zero based. Add leading 0.
    time;
  time = mm + "/" + yyyy;
  return time;
}

function printItems(item) {
  let string = "";
  const endString = ",  ";
  if (item === 48) {
    string = "Playstation 4";
  } else if (item === 167) {
    string = "Playstation 5";
  } else if (item === 12) {
    string = "Role-playing (RPG)";
  } else if (item === 6) {
    string = "PC (Microsoft Windows)";
  } else if (item === 49) {
    string = "Xbox One";
  } else if (item === 25) {
    string = "Hack and slash/Beat 'em up";
  } else if (item === 31) {
    string = "Adventure";
  } else if (item === 5) {
    string = "Shooter";
  } else if (item === 12) {
    string = "Role-playing (RPG)";
  } else if (item === 12) {
    string = "Role-playing (RPG)";
  } else string = item;
  return string + endString;
}

function printGame(data, gameIndex) {
  let temp;
  games[gameIndex].name = data.name;
  games[gameIndex].summary = data.summary;
  temp = convertTimestamp(data.first_release_date);
  games[gameIndex].release = temp;

  temp = "";
  let c;
  for (let i = 0; i < data.platforms.length; i++) {
    c = printItems(data.platforms[i]);
    temp += c;
  }
  games[gameIndex].platforms = temp;

  temp = "";
  c = "";
  for (let i = 0; i < data.genres.length; i++) {
    c = printItems(data.genres[i]);
    temp += c;
  }
  games[gameIndex].genre = temp;
}

function saveCovers(data, gameIndex) {
  let temp;
  const a = "https://images.igdb.com/igdb/image/upload/t_original/";
  temp = a + data + ".jpg";
  games[gameIndex].cover = temp;
}

function saveScreenshots(data, gameIndex) {
  const a = "https://images.igdb.com/igdb/image/upload/t_original/";
  const b = ".jpg";
  for (let i = 0; i < data.length; i++) {
    let temp = "";
    temp = a + data[i].image_id + b;
    games[gameIndex].screenshots[i] = temp;
  }
}

function saveVideos(data, gameIndex) {
  const a = "https://www.youtube.com/embed/";
  for (let i = 0; i < data.length; i++) {
    let temp;
    temp = a + data[i].video_id;
    games[gameIndex].videos[i] = temp;
  }
}

async function fetchIGDB(gameData, index) {
  var cors = "https://pacific-ocean-14685.herokuapp.com/";
  var myHeaders = constructHeaders();
  let data = [];

  const endString = ");";
  const igdbApiString = "https://api.igdb.com/v4/";
  let queryString = gameData.query + games[index].game_id + endString;
  let url = cors + igdbApiString + gameData.name;
  let fetchObject = createHeaders(myHeaders, queryString);
  let key = gameData.name + " " + games[index].game_id;

  try {
    if (localStorage.getItem(key)) {
      console.log("Grabbing from localstorage");
      data = JSON.parse(localStorage.getItem(key));
    } else {
      console.log("Making api call for Game ID = " + games[index].game_id);
      data = await fetch(url, fetchObject).then(parseJSON);
      console.log(JSON.stringify(data));
      localStorage.setItem(key, JSON.stringify(data));
    }
  } catch (err) {
    console.log(err);
    console.log(
      "Rate Limit, your token has expired or you need a new CORS proxy!  If its a rate limit, try walking away for 20 minutes and trying again"
    );
  }
  if (gameData.name === "games") {
    printGame(data[0], index);
  } else if (gameData.name === "covers") {
    saveCovers(data[0].image_id, index);
  } else if (gameData.name === "screenshots") {
    saveScreenshots(data, index);
  } else if (gameData.name === "game_videos") {
    saveVideos(data, index);
  } else {
    console.log("Something went wrong");
  }
}
