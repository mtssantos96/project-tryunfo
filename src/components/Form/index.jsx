import React from 'react';
import PropTypes from 'prop-types';
import styles from './style.module.css';

class Form extends React.Component {
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
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className={ styles.formContainer }>
        <label htmlFor="cardName">
          <p>Nome</p>
          <input
            name="cardName"
            type="text"
            data-testid="name-input"
            onChange={ onInputChange }
            value={ cardName }
          />
        </label>
        <label htmlFor="cardDescription">
          <p>Descrição:</p>
          <input
            name="cardDescription"
            type="textarea"
            data-testid="description-input"
            onChange={ onInputChange }
            value={ cardDescription }
          />
        </label>
        <label htmlFor="cardAttr1">
          <p>Attr01</p>
          <input
            name="cardAttr1"
            type="number"
            data-testid="attr1-input"
            onChange={ onInputChange }
            value={ cardAttr1 }
          />
        </label>
        <label htmlFor="cardAttr2">
          <p>Attr02</p>
          <input
            name="cardAttr2"
            type="number"
            data-testid="attr2-input"
            onChange={ onInputChange }
            value={ cardAttr2 }
          />
        </label>
        <label htmlFor="cardAttr3">
          <p>Attr03</p>
          <input
            name="cardAttr3"
            type="number"
            data-testid="attr3-input"
            onChange={ onInputChange }
            value={ cardAttr3 }
          />
        </label>
        <label htmlFor="cardImage">
          <p>Imagem</p>
          <input
            name="cardImage"
            type="text"
            data-testid="image-input"
            onChange={ onInputChange }
            value={ cardImage }
          />
        </label>
        <label htmlFor="cardRare">
          <p>Raridade</p>
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
        {hasTrunfo ? (
          <h3>Você já tem um Super Trunfo em seu baralho</h3>
        ) : (
          <label htmlFor="cardTrunfo">
            <input
              name="cardTrunfo"
              data-testid="trunfo-input"
              type="checkbox"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
            <span>Super Trunfo</span>
          </label>
        )}
        <button
          type="submit"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
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
