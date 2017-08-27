import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'

import style from './styles.less'

import { TYPE_TEXT, TYPE_ICON } from 'components/organisms/InfoTable'

class InfoTableIconValue extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  render = () => {
    const { value } = this.props;

    return (<img className={style.root} src={value}/>);
  }
}

export default InfoTableIconValue