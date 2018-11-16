const baseURL = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.querySelector("form");
const spaceShips = document.querySelector("ul");

searchForm.addEventListener("submit", fetchSpace);

function fetchSpace(e) {    /// "e" in this case, stands for event
    e.preventDefault();

    fetch(baseURL) // fetch means you are making an http request
    .then(response => { /// response is used as a placeholder for whatever comes from the API
        return response.json();
    })
    .then(json => {
        displayRockets(json);
    })
    .catch(err => {
        console.log(`Error: ${err}`);
    })
};

function displayRockets(json){
    let rockets = json.forEach(r => {
        let rocket = document.createElement("li");
        rocket.innerText = r.name;
        spaceShips.appendChild(rocket);
    })
}