import DispatcherMixin from './dispatcher-mixin.js';

export default class Player {
  constructor() {
    this.currentQuiz = null;
    this.listen('selected', this.onSelected);
  }

  play(quiz) {
    this.currentQuiz = quiz;
    this.emit('render', quiz.challenge);
  }

  onSelected(choice) {
    let isCorrect = choice.id == this.currentQuiz.solution.correctChoiceId;
    this.emit(isCorrect ? 'succeeded' : 'failed');
  }
};

Object.assign(Player.prototype, DispatcherMixin);