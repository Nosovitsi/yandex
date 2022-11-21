let phrases = [
    { text: 'королева френдзоны', image: '/Asya/media/friendzone.jpg' },
    { text: 'шальная императрица', image: '/Asya/media/imperator.jpg' },
    { text: 'настоящий друг', image: '/Asya/media/friendship.jpg' },
    { text: 'дарить другим тепло', image: '/Asya/media/sun.jpg' },
    { text: 'концентрированный секс', image: '/Asya/media/sexy.jpg' },
    { text: 'стиль', image: '/Asya/media/style.jpg' },
    { text: 'семья', image: '/Asya/media/family.jpg' },
    { text: 'матерь хомяков', image: '/Asya/media/hamster.jpg' },
    { text: 'участвовать во всех важных событиях', image: '/Asya/media/wedding.jpg' },
    { text: 'соблазнять мою жену', image: '/Asya/media/ass.jpg' }
];

function getRandomElement(arr) {
    let randIndex = Math.floor(Math.random() * arr.length);
    return arr[randIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');

button.addEventListener('click', function() {
    let randomElement = getRandomElement(phrases);
    smoothly(phrase, 'textContent', randomElement.text);
    smoothly(image, 'src', randomElement.image);

    if (randomElement.text.length > 40) {
        advice.style.fontSize = '33px';
    } else {
        advice.style.fontSize = '42px';
    }
});

for (i = 0; i <= 9; i = i + 1) {
    smoothly(phrase, 'textContent', phrases[i].text);
    smoothly(image, 'src', phrases[i].image);
}