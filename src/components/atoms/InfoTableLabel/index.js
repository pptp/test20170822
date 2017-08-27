import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './styles.less'

import { TYPE_TEXT, TYPE_ICON } from 'components/organisms/InfoTable'

class InfoTableLabel extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
  };

  render = () => {
    const { name } = this.props;

    return (<div className={style.root}>{name}:</div>);
  }
}

export default InfoTableLabel