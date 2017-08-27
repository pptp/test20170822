import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { InfoTableLabel, InfoTableTextValue, InfoTableIconValue } from 'components';

import style from './styles.less'

import { TYPE_TEXT, TYPE_ICON } from 'components/organisms/InfoTable'

class InfoTableRow extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    type: PropTypes.string
  };

  static defaultProps = {
    type: TYPE_TEXT
  };

  render = () => {
    const { name, value, type } = this.props;

    const renderValue = () => {
      switch (type) {
        case TYPE_ICON:
          return (<InfoTableIconValue value={value} />)

        case TYPE_TEXT:
        default:
          return (<InfoTableTextValue value={value} />)
      }
    }

    return (<div className={style.root}>
      <InfoTableLabel name={name} />
      {renderValue()}
    </div>);
  }
}

export default InfoTableRow