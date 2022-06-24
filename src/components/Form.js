import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2,
      cardAttr3, cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick,
    } = this.props;
    return (
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="cardName">
          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="cardDescription">
          <input
            type="textarea"
            name="cardDescription"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="cardAttr1">
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="cardAttr2">
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="cardAttr3">
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="cardImage">
          <input
            type="text"
            name="cardImage"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="cardRare">
          <select
            name="cardRare"
            data-testid="rare-input"
            onChange={ onInputChange }
            value={ cardRare }
          >
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="cardTrunfo">
          <input
            type="checkbox"
            name="cardTrunfo"
            data-testid="trunfo-input"
            onChange={ onInputChange }
            checked={ cardTrunfo }
          />
        </label>
        <button
          name="onSaveButtonClick"
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
