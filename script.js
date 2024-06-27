const bubbleContainer = document.getElementById('bubble-container');

function createBubble(text, url, x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;

    const link = document.createElement('a');
    link.href = url;
    link.textContent = text;
    link.target = '_blank';

    bubble.appendChild(link);
    bubbleContainer.appendChild(bubble);

    bubble.addEventListener('mouseenter', () => {
        bubble.style.transform = 'scale(1.2)';
    });

    bubble.addEventListener('mouseleave', () => {
        bubble.style.transform = 'scale(1)';
    });

    return bubble;
}

function moveBubble(bubble) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
}

const bubbleData = [
    { text: 'Crypto Bubbles', url: 'https://cryptobubbles.net/' },
    { text: 'Coin Market Cap', url: 'https://coinmarketcap.com/' },
    { text: 'OCM', url: 'https://onchainmonkey.com/' },
    { text: 'Cyber Truck', url: 'https://www.tesla.com/cybertruck' },
    { text: 'Angels', url: 'https://www.mlb.com/angels' },
    { text: 'Science', url: 'https://www.popularmechanics.com/' },
    { text: 'Running', url: 'https://www.runnersworld.com/running-tips/' },
    { text: 'Drip', url: 'https://www.youtube.com/results?search_query=drip+too+hard+' },
    { text: 'Hungry', url: 'https://www.youtube.com/results?search_query=gotta+be+hungry+les+brown+' },
    { text: 'Hesperia', url: 'https://www.weatherbug.com/weather-forecast/now/hesperia-ca-92345' }
];

const bubbles = [];
bubbleData.forEach(data => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const bubble = createBubble(data.text, data.url, x, y);
    bubbles.push(bubble);
});

setInterval(() => {
    bubbles.forEach(bubble => moveBubble(bubble));
}, 2000);
