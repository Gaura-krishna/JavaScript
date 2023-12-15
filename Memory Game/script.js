const cards = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H'];

let openedCards = [];
let matchedPairs = 0;
let score = 0;
let timer;
let seconds = 0;

document.addEventListener('DOMContentLoaded', () => {
    initializeGame();
});

function initializeGame() {
    shuffleCards();
    createGrid();
    startTimer();
}

function shuffleCards() {
    for (let i = cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }
}

function createGrid() {
    const gridContainer = document.getElementById('gridContainer');
    gridContainer.innerHTML = '';

    cards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.dataset.index = index;
        cardElement.textContent = card;
        cardElement.addEventListener('click', handleCardClick);
        gridContainer.appendChild(cardElement);
    });
}

function handleCardClick(event) {
    const clickedCard = event.target;
    if (!clickedCard.classList.contains('card') || openedCards.length === 2) {
        return;
    }

    flipCard(clickedCard);

    if (openedCards.length === 2) {
        checkMatch();
        updateScore();
        checkWin();
    }
}

function flipCard(card) {
    card.classList.add('flipped');
    openedCards.push(card);
}

function checkMatch() {
    const [card1, card2] = openedCards;
    if (card1.textContent === card2.textContent) {
        matchedPairs++;
        setTimeout(() => {
            card1.classList.add('matched');
            card2.classList.add('matched');
            openedCards = [];
        }, 500);
    } else {
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            openedCards = [];
        }, 800);
    }
}

function updateScore() {
    score++;
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = score;
}

function checkWin() {
    if (matchedPairs === cards.length / 2) {
        clearInterval(timer);
        alert(`Congratulations! You won in ${seconds} seconds with a score of ${score}.`);
        resetGame();
    }
}

function startTimer() {
    timer = setInterval(() => {
        seconds++;
        const timerElement = document.getElementById('timer');
        timerElement.textContent = seconds;
    }, 1000);
}

function resetGame() {
    openedCards = [];
    matchedPairs = 0;
    score = 0;
    seconds = 0;
    clearInterval(timer);
    initializeGame();
}
