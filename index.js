const baseURL = "http://localhost:3000/characters";

const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");
const nameDisplay = document.getElementById("name");
const imageDisplay = document.getElementById("image");
const voteCount = document.getElementById("vote-count");
const votesForm = document.getElementById("votes-form");


let currentCharacter = null;

// Fetch and display all characters in character bar
function loadCharacters() {
    fetch(baseURL)
        .then(response => response.json())
        .then(characters => {
            characters.forEach(character => {
                const span = document.createElement("span");
                span.textContent = character.name;
                span.addEventListener("click", () => displayCharacterDetails(character));
                characterBar.appendChild(span);
            });
        });
}

