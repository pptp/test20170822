import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './styles.less'

import { InfoTableRow } from 'components'

export const TYPE_TEXT = 'text'
export const TYPE_ICON = 'icon'

class InfoTable extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired
  };

  render = () => {
    const { data } = this.props;

    const renderItem = (key, item) => {
      return (<InfoTableRow 
          key={key}
          name={item.name}
          value={item.value}
          type={item.type} />);
    }

    return (<div className={style.root}>
      { data.map((item, key) => renderItem(key, item)) }
    </div>);
  }
}

export default InfoTable