import React from 'react';
import DispatcherMixin from './../dispatcher-mixin.js';

export default class Player extends React.Component {
  constructor(props) {
    super(props);
    this.selected = null;
  }

  componentDidMount() {
    this.listen('succeeded', () => alert('Correct'));
    this.listen('failed', () => alert('Incorrect'));
  }

  onValidate() {
    this.emit('selected', this.selected);
  }

  onChange(event) {
    this.selected = this.props.choices.filter(choice => {
      return choice.id === event.target.value;
    })[0];
  }

  render() {
    return (
      <div>
        <h2>Quiz Player</h2>
        {this.props.choices.map(choice => {
          return (
            <div key={choice.id}>
              <input type="radio"
                     name="choices"
                     value={choice.id}
                     onChange={this.onChange.bind(this)}/>
              {choice.text}
            </div>
          );
        })}
        <button onClick={this.onValidate.bind(this)}>Ok</button>
      </div>
    );
  }
};

Object.assign(Player.prototype, DispatcherMixin);