import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import style from './styles.less'

import { SuggestInput } from 'components'
import { countriesUpdateList } from 'src/actions/country.actions'

const CountrySuggestItem = ({ ...props }) => {
  return <div className={style.suggestItem} key={props.name}>
    <div className="name">{props.name}</div>
    <div className="description">{props.description}</div>
  </div>
}

@connect(
  state => ({
    countryData: state.country
  }),
  dispatch => ({
    actions: bindActionCreators({countriesUpdateList}, dispatch)
  })
)
class CountrySuggest extends Component {
  updateSuggest = (text) => {
    const { countriesUpdateList } = this.props.actions;
    countriesUpdateList(text);
  }

  render() {
    const { countryData } = this.props

    const suggestList = (countryData.countryList || []).map((country) => ({
      name: country.name,
      description: country.demonym
    }));

    return (<div className={style.suggest}>
      <div className="label">Start typing country name (min 3 chars):</div>
      <SuggestInput
          placeholder="Country name..."
          viewComponent={CountrySuggestItem}
          doUpdateSuggest={this.updateSuggest}
          loading={countryData.loading}
          suggestList={suggestList}>
      </SuggestInput>
    </div>);
  }
}

export default CountrySuggest