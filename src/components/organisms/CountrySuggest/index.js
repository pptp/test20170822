import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { font, palette } from 'styled-theme'
import { ifProp } from 'styled-tools'
import ReactDOM from 'react-dom'

import { SuggestInput } from 'components'

const styles = {
  input: css`
    width: 100%;
    margin: 0;
  `,
}

const StyledDiv = styled.div`${styles.input}`

const CountrySuggestItem = ({ ...props }) => {
  return <StyledDiv key={props.name}>
    <div><b>{props.name}</b></div>
    <span>{props.description}</span>
  </StyledDiv>
}


class CountrySuggest extends Component {
  static propTypes = {
  };

  updateSuggest = (text) => {
    console.log('Update Suggest: ', text);
  }

  render() {
    const suggestList = [
      {
        'name': 'asd',
        'description': 'asdasdasd'
      }, 
      {
        'name': 'qwe',
        'description': 'qweqweqwe'
      }
    ];

    return (<div>
      <SuggestInput
          viewComponent={CountrySuggestItem}
          doUpdateSuggest={this.updateSuggest}
          suggestList={suggestList}>
      </SuggestInput>
    </div>);
  }
}

export default CountrySuggest;