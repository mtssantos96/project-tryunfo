import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="name-input">
          <input
            type="text"
            name="name-input"
            data-testid="name-input"
          />
        </label>
        <label htmlFor="description-input">
          <input
            type="textarea"
            name="description-input"
            data-testid="description-input"
          />
        </label>
        <label htmlFor="attr1-input">
          <input
            type="number"
            name="attr1-input"
            data-testid="attr1-input"
          />
        </label>
        <label htmlFor="attr2-input">
          <input
            type="number"
            name="attr2-input"
            data-testid="attr2-input"
          />
        </label>
        <label htmlFor="attr3-input">
          <input
            type="number"
            name="attr3-input"
            data-testid="attr3-input"
          />
        </label>
        <label htmlFor="image-input">
          <input
            type="text"
            name="image-input"
            data-testid="image-input"
          />
        </label>
        <label htmlFor="rare-input">
          <select name="rare-input" data-testid="rare-input">
            <option value="normal">Normal</option>
            <option value="raro">Raro</option>
            <option value="muito raro">Muito raro</option>
          </select>
        </label>
        <label htmlFor="trunfo-input">
          <input
            type="checkbox"
            name="trunfo-input"
            data-testid="trunfo-input"
          />
        </label>
        <button
          name="save-button"
          type="submit"
          data-testid="save-button"
        >
          Salvar
        </button>
      </form>
    );
  }
}

export default Form;
