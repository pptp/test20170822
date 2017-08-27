import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import style from './styles.less'
// import { * as loadingIconSrc } from './loader.gif'
// console.log('loadingIconSrc', loadingIconSrc)

const KEY_ESC = 27;

import { countrySelects } from 'src/actions/country.actions'

@connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators({countrySelects}, dispatch)
  })
)
class SuggestInput extends Component {
  static propTypes = {
    suggestList: PropTypes.array.isRequired,
    doUpdateSuggest: PropTypes.func,
    initialInput: PropTypes.string,
    viewComponent: PropTypes.func,
    placeholder: PropTypes.string,
    loading: PropTypes.bool
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

  doSelect = (key) => {
    const { countrySelects } = this.props.actions;
    countrySelects(key);
  }

  doCollapse = () => {
    this.setState({
      isOpen: false
    })
  }

  onKeyDown = (eventProxy) => {
    if (eventProxy.which === KEY_ESC) {
      this.doCollapse();
    }
  }

  componentWillMount = () => {
    const { initialInput } = this.props;
    document.addEventListener('click', this.handleClick, false);
    this.setState({
      input: initialInput
    });
  }

  componentWillUnmount = () => {
    document.removeEventListener('click', this.handleClick, false);
  }

  handleClick = e => {
    if(!ReactDOM.findDOMNode(this).contains(e.target)) {
      this.doCollapse()
    }
  }

  render = () => {
    const {
      suggestList,
      updateSuggest,
      initialInput,
      viewComponent,
      placeholder,
      loading
    } = this.props;
    const { input, isOpen } = this.state;
    const { onChange, onKeyDown, doSelect } = this;

    const itemView = (key, item) => (<div className="popup-item"
          key={key}
          onClick={doSelect.bind(this, key)}>
        {viewComponent(item)}
      </div>);

    const popupClause = isOpen ? (<div className={style.popup}>
      {suggestList.map((suggestItem, key) => itemView(key, suggestItem) )}
    </div>) : '';

    return (<div className={style.root}>
        <input className={style.input + (loading ? ' loading' : '')}
            placeholder={placeholder}
            onKeyDown={onKeyDown}
            value={input}
            ref="input"
            onChange={onChange} />
        {popupClause}
      </div>);
  }
}



export default SuggestInput;