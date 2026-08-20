class JokeGenerator {
    constructor() {
        this.jokeAPI = 'https://v2.jokeapi.dev/joke';
        this.currentJoke = null;
        this.init();
    }

    init() {
        this.setupEventListeners();
    }

    setupEventListeners() {
        document.getElementById('getJokeBtn').addEventListener('click', () => this.fetchJoke());
        document.getElementById('shareBtn').addEventListener('click', () => this.shareJoke());
        document.getElementById('copyBtn').addEventListener('click', () => this.copyJoke());
    }

    async fetchJoke() {
        const category = document.getElementById('categorySelect').value;
        const jokeContainer = document.getElementById('jokeContainer');
        const getJokeBtn = document.getElementById('getJokeBtn');
        const shareBtn = document.getElementById('shareBtn');
        const copyBtn = document.getElementById('copyBtn');

        getJokeBtn.disabled = true;
        jokeContainer.innerHTML = '<div class="loading">Fetching a joke</div>';

        try {
            const endpoint = `${this.jokeAPI}/${category}?format=json`;
            const response = await fetch(endpoint);

            if (!response.ok) throw new Error('Failed to fetch joke');

            const data = await response.json();
            this.currentJoke = data;
            this.renderJoke(data);
            shareBtn.disabled = false;
            copyBtn.disabled = false;
        } catch (error) {
            jokeContainer.innerHTML = `<div class="error">😅 Oops! Could not fetch a joke. ${error.message}</div>`;
        } finally {
            getJokeBtn.disabled = false;
        }
    }

    renderJoke(joke) {
        const jokeContainer = document.getElementById('jokeContainer');
        const jokeType = joke.type === 'single' ? 'Single' : 'Two-Part';
        
        let jokeHTML = `
            <div class="joke-content">
                <span class="joke-type">${jokeType}</span>
                <div class="joke-text">${this.escapeHtml(joke.joke)}</div>
        `;
        
        if (joke.type === 'twopart') {
            jokeHTML += `<div class="joke-answer">${this.escapeHtml(joke.delivery)}</div>`;
        }
        
        jokeHTML += `</div>`;
        jokeContainer.innerHTML = jokeHTML;
    }

    shareJoke() {
        if (!this.currentJoke) return;
        const jokeText = this.currentJoke.type === 'single' 
            ? this.currentJoke.joke
            : `${this.currentJoke.joke}\n${this.currentJoke.delivery}`;
        
        if (navigator.share) {
            navigator.share({ title: 'Wedding Joke', text: jokeText });
        } else {
            alert('Share not supported. Use Copy instead.');
        }
    }

    copyJoke() {
        if (!this.currentJoke) return;
        const jokeText = this.currentJoke.type === 'single' 
            ? this.currentJoke.joke
            : `${this.currentJoke.joke}\n${this.currentJoke.delivery}`;
        
        navigator.clipboard.writeText(jokeText).then(() => {
            const copyBtn = document.getElementById('copyBtn');
            const originalText = copyBtn.textContent;
            copyBtn.textContent = '✅ Copied!';
            setTimeout(() => { copyBtn.textContent = originalText; }, 2000);
        });
    }

    escapeHtml(text) {
        const map = {'&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;'};
        return text.replace(/[&<>"']/g, m => map[m]);
    }
}

const jokeGenerator = new JokeGenerator();