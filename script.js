const bubbleContainer = document.getElementById('bubble-container');

function createBubble(text, x, y) {
    const bubble = document.createElement('div');
    bubble.className = 'bubble';
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.textContent = text;
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

const bubbles = [];
for (let i = 0; i < 10; i++) {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 100);
    const bubble = createBubble(`Bubble ${i + 1}`, x, y);
    bubbles.push(bubble);
}

setInterval(() => {
    bubbles.forEach(bubble => moveBubble(bubble));
}, 2000);
