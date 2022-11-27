import generateJoke from "./generateJoke"
import './styles/main.scss'
import laughing from './assets/standup.png'

const comedianImg = document.getElementById('comedian');
comedianImg.src = laughing;

const jokeBtn = document.querySelector('.get-joke');
jokeBtn.addEventListener('click', generateJoke);