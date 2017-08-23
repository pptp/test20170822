import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import ReactDOM from 'react-dom'

const styles = {
  input: css`
    font-family: ${font('primary')};
    width: 100%;
    margin: 0;
  `,
  popup: css`
    position: fixed;
    width: 100%;
    height: 160px;
  `
}

const StyledInput = styled.input`${styles.input}`
const StyledPopup = styled.div`${styles.popup}`


class SuggestInput extends Component {
  static propTypes = {
    suggestList: PropTypes.array.isRequired,
    doUpdateSuggest: PropTypes.func,
    initialInput: PropTypes.string,
    viewComponent: PropTypes.func
  };

  static defaultProps = {
    suggestList: [],
    initialInput: ''
  };

  static getInitialState = {
    isOpen: false,
  };

  onChange = () => {
    const { doUpdateSuggest } = this.props;
    const text = ReactDOM.findDOMNode(this.refs.input).value;

    if (text.length > 2 && doUpdateSuggest) {
      doUpdateSuggest(text);
    }

    this.setState({
      input: text,
      isOpen: text.length > 2
    });
  }

  componentWillMount = () => {
    const { initialInput } = this.props;
    this.setState({
      input: initialInput
    });
  }

  render() {
    const { suggestList, updateSuggest, initialInput, viewComponent } = this.props;
    const { input, isOpen } = this.state;
    const { onChange } = this;

    const popupClause = isOpen ? (<StyledPopup>
      {suggestList.map(suggestItem => viewComponent(suggestItem) )}
   
    </StyledPopup>) : '';

    return (<div>
        <StyledInput
            ref="input"
            value={input}
            onChange={onChange}>
        </StyledInput>
        {popupClause}
      </div>);
  }
}



export default SuggestInput;