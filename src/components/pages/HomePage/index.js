import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CountrySuggest, CountryInfo } from 'components';
import style from './styles.less'

class HomePage extends Component {
  render() {
    return (<div className={style.root}>
        <div className={style.component}>
          <CountrySuggest />
        </div>
        <div className={style.component}>
          <CountryInfo />
        </div>
      </div>
    )
  }
}

export default HomePage
