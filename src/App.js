import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
    };
  }

  handleChanger = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      isSaveButtonDisabled,
    } = this.state;

    const maxValue = 90;
    const maxSum = 210;

    const props = [
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ];

    let result = false;

    if (props.every((element) => element !== '')) {
      const attributes = [cardAttr1, cardAttr2, cardAttr3];
      const sum = attributes
        .reduce(((acc, curr) => acc + Number(curr)), 0);
      const limit = attributes
        .every((attribute) => attribute >= 0 && attribute <= maxValue);
      const valuesSum = (sum <= maxSum);
      result = (limit === true && valuesSum === true);
    }
    if (isSaveButtonDisabled === true && result === true) {
      this.handleChanger({
        target: { name: 'isSaveButtonDisabled', value: false },
      });
    }
    if (isSaveButtonDisabled === false && result === false) {
      this.handleChanger({
        target: { name: 'isSaveButtonDisabled', value: true },
      });
    }
  }

  render() {
    this.validateButton();

    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled,
    } = this.state;

    return (
      <div>

        <h1>Tryunfo</h1>

        <Form
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
          hasTrunfo={ hasTrunfo }
          isSaveButtonDisabled={ isSaveButtonDisabled }
          onInputChange={ this.handleChanger }
          onSaveButtonClick={ () => { } }
        />

        <Card
          cardName={ cardName }
          cardDescription={ cardDescription }
          cardAttr1={ cardAttr1 }
          cardAttr2={ cardAttr2 }
          cardAttr3={ cardAttr3 }
          cardImage={ cardImage }
          cardRare={ cardRare }
          cardTrunfo={ cardTrunfo }
        />

      </div>
    );
  }
}

export default App;
