import QuizPlayer from './quiz-player.js';
import ReactRenderer from './react-renderer.js';
import quiz1 from '../data/quiz-1.json';

//import Debug from 'debug';
//import Dispatcher from './dispatcher.js';
//Debug.storage = null;
//Debug.enable(Dispatcher.getDebugPrefix());

let player = new QuizPlayer();
let renderer = new ReactRenderer(document.querySelector('main'));

player.play(quiz1);