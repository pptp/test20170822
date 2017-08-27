import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './styles.less'
import { server } from 'src/config'

import { InfoTable } from 'components';
import { TYPE_TEXT, TYPE_ICON } from 'components/organisms/InfoTable'

@connect(
  state => ({
    selected: state.country.selected
  })
)
class CountryInfo extends Component {
  render = () => {
    const { selected } = this.props;

    if (!selected) {
      return null;
    }

    const data = [
      {
        name: 'name',
        value: selected.name,
        type: TYPE_TEXT,
      },
      {
        name: 'capital',
        value: selected.capital,
        type: TYPE_TEXT,
      },
      {
        name: 'region',
        value: selected.region,
        type: TYPE_TEXT,
      },
      {
        name: 'flag',
        value: `${server.url}${selected.ourFlag}`,
        type: TYPE_ICON,
      }
    ];

    return (<div className={style.root}>
      <InfoTable data={data} />
    </div>);
  }
}

export default CountryInfo