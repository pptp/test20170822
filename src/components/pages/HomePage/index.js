// https://github.com/diegohaz/arc/wiki/Atomic-Design
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CountrySuggest } from 'components';

@connect(state => ({
  countryData: state.country
}))
class HomePage extends Component {
  render() {
    const {
      loading,
      countryList,
      errors,
    } = this.props.countryData;

    return (<div>
        Hello World
        <CountrySuggest countryList={countryList}></CountrySuggest>
      </div>
    )
  }
}

export default HomePage
