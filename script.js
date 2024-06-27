const bubbleContainer = document.getElementById('bubble-container');

class Bubble {
    constructor(text, url, x, y) {
        this.element = document.createElement('div');
        this.element.className = 'bubble';
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;

        const link = document.createElement('a');
        link.href = url;
        link.textContent = text;
        link.target = '_blank';

        this.element.appendChild(link);
        bubbleContainer.appendChild(this.element);

        this.dx = (Math.random() - 0.5) * 2;  // Slower movement
        this.dy = (Math.random() - 0.5) * 2;  // Slower movement

        this.updatePosition = this.updatePosition.bind(this);
    }

    updatePosition() {
        let x = parseFloat(this.element.style.left);
        let y = parseFloat(this.element.style.top);

        x += this.dx;
        y += this.dy;

        if (x < 0 || x > window.innerWidth - 100) this.dx *= -1;
        if (y < 0 || y > window.innerHeight - 100) this.dy *= -1;

        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;

        requestAnimationFrame(this.updatePosition);
    }

    start() {
        requestAnimationFrame(this.updatePosition);
    }
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

bubbleData.forEach(data => {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const bubble = new Bubble(data.text, data.url, x, y);
    bubble.start();
});
