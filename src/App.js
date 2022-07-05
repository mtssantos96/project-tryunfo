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
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
    };
  }

  handleChanger = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => this.validateButton());
  }

  saveCard = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardTrunfo,
      hasTrunfo,
    } = this.state;

    const newCard = {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    };

    const stateReset = [
      { target: { name: 'cardName', value: '' } },
      { target: { name: 'cardDescription', value: '' } },
      { target: { name: 'cardImage', value: '' } },
      { target: { name: 'cardRare', value: 'normal' } },
      { target: { name: 'cardAttr1', value: 0 } },
      { target: { name: 'cardAttr2', value: 0 } },
      { target: { name: 'cardAttr3', value: 0 } },
      { target: { name: 'cardTrunfo', value: false } },
    ];

    this.setState((previousState) => ({
      savedCards: [...previousState.savedCards, newCard],
    }), () => stateReset.forEach((target) => this.handleChanger(target)));
    if (hasTrunfo === false) this.setState(({ hasTrunfo: cardTrunfo }));
  }

  validateButton = () => {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;

    const maxValue = 90;
    const maxSum = 210;

    const props = [
      cardName,
      cardDescription,
      cardImage,
      cardRare,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    ];

    let result = true;

    if (props.every((element) => element !== '')) {
      const attributes = [cardAttr1, cardAttr2, cardAttr3];
      const sum = attributes
        .reduce(((acc, curr) => acc + Number(curr)), 0);
      const limit = attributes
        .every((attribute) => attribute >= 0 && attribute <= maxValue);
      const valuesSum = (sum <= maxSum);
      result = !(limit === true && valuesSum === true);
    }
    this.setState({ isSaveButtonDisabled: result });
  }

  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      savedCards,
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
          onSaveButtonClick={ this.saveCard }
        />
        <section>
          {savedCards.length > 0 ? <h2>Todas as cartas</h2> : ''}
          { savedCards.map((card) => (
            <Card
              key={ card.cardName }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />
          ))}
        </section>
      </div>

    );
  }
}

export default App;
