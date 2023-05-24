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
      savedCards: [],
      filterText: '',
      filterRarity: 'todas',
      filterTrunfo: false,
    };
  }

  handleFilterChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  handleRarityFilterChange = (event) => {
    this.setState({ filterRarity: event.target.value });
  };

  handleTrunfoFilterChange = (event) => {
    this.setState({ filterTrunfo: event.target.checked });
  };

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
      cardTrunfo,
    };

    const stateReset = [
      { target: { name: 'cardName', value: '' } },
      { target: { name: 'cardDescription', value: '' } },
      { target: { name: 'cardImage', value: '' } },
      { target: { name: 'cardRare', value: 'normal' } },
      { target: { name: 'cardAttr1', value: '0' } },
      { target: { name: 'cardAttr2', value: '0' } },
      { target: { name: 'cardAttr3', value: '0' } },
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

  deleteCard = ({ target }) => {
    const { savedCards } = this.state;
    const cards = savedCards
      .filter(({ cardName }) => cardName !== target.id);
    this.setState({ savedCards: cards }, () => this.checkTheTrunfo());
  }

  checkTheTrunfo() {
    const { savedCards } = this.state;
    const status = savedCards
      .some(({ cardTrunfo }) => cardTrunfo === true);
    if (savedCards.length > 0) {
      this.setState({ hasTrunfo: status });
    } else {
      this.setState({ hasTrunfo: false });
    }
  }

  render() {
    const {
      cardName, cardDescription,
      cardAttr1, cardAttr2,
      cardAttr3, cardImage,
      cardRare, cardTrunfo,
      hasTrunfo, isSaveButtonDisabled,
      savedCards, filterText,
      filterRarity, filterTrunfo,
    } = this.state;

    const filteredCards = savedCards.filter((card) => {
      const nameMatch = card.cardName.toLowerCase().includes(filterText.toLowerCase());
      const rarityMatch = filterRarity === 'todas' || card.cardRare === filterRarity;
      const trunfoMatch = !filterTrunfo || card.cardTrunfo;
      return nameMatch && rarityMatch && trunfoMatch;
    });

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
        <input
          type="text"
          data-testid="name-filter"
          value={ filterText }
          onChange={ this.handleFilterChange }
          disabled={ filterTrunfo }
        />
        <select
          data-testid="rare-filter"
          value={ filterRarity }
          onChange={ this.handleRarityFilterChange }
          disabled={ filterTrunfo }
        >
          <option value="todas">Todas</option>
          <option value="normal">Normal</option>
          <option value="raro">Raro</option>
          <option value="muito raro">Muito Raro</option>
        </select>
        <label htmlFor="trunfo-filter">
          Super Trunfo
          <input
            type="checkbox"
            data-testid="trunfo-filter"
            checked={ filterTrunfo }
            onChange={ this.handleTrunfoFilterChange }
          />
        </label>
        <section>
          {filteredCards.length > 0 ? <h2>Todas as cartas</h2> : ''}
          {filteredCards.map((card) => (
            <div key={ card.cardName }>
              <Card
                cardName={ card.cardName }
                cardDescription={ card.cardDescription }
                cardAttr1={ card.cardAttr1 }
                cardAttr2={ card.cardAttr2 }
                cardAttr3={ card.cardAttr3 }
                cardImage={ card.cardImage }
                cardRare={ card.cardRare }
                cardTrunfo={ card.cardTrunfo }
              />
              <button
                data-testid="delete-button"
                id={ card.cardName }
                onClick={ (event) => {
                  this.deleteCard(event);
                } }
                type="button"
              >
                Excluir
              </button>
            </div>
          ))}
        </section>
      </div>

    );
  }
}

export default App;
