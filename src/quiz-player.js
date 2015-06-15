import DispatcherMixin from './dispatcher-mixin.js';

export default class QuizPlayer {
  constructor() {
    this.currentQuiz = null;
    this.currentStep = 0;
    this.listen('selected', this.onSelected);
  }

  play(quiz, step = 1) {
    this.currentQuiz = quiz;
    this.currentStep = quiz.steps[0];
    this.emit('render', this.currentStep.items[0].data.challenge);
  }

  onSelected(choice) {
    let isCorrect = choice.id === this.currentStep.items[0].data.solution.correctChoiceId;
    this.emit(isCorrect ? 'succeeded' : 'failed');
  }
};

Object.assign(QuizPlayer.prototype, DispatcherMixin);