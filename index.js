const baseURL = "http://localhost:3000/characters";

const characterBar = document.getElementById("character-bar");
const detailedInfo = document.getElementById("detailed-info");
const nameDisplay = document.getElementById("name");
const imageDisplay = document.getElementById("image");
const voteCount = document.getElementById("vote-count");
const votesForm = document.getElementById("votes-form");


let currentCharacter = null;


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

function displayCharacterDetails(character) {
    currentCharacter = character;
    nameDisplay.textContent = character.name;
    imageDisplay.src = character.image;
    imageDisplay.alt = character.name;
    voteCount.textContent = character.votes;
}

votesForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!currentCharacter) return;

    const votesInput = document.getElementById("votes");
    const newVotes = parseInt(votesInput.value) || 0;
    
 
    currentCharacter.votes = (currentCharacter.votes || 0) + newVotes;
    voteCount.textContent = currentCharacter.votes;
    
    votesForm.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    loadCharacters();
});