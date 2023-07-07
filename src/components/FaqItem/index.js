// Write your code here.

import {Component} from 'react'

import './index.css'

class FaqItem extends Component {
  state = {isClick: false}

  changeState = () => {
    this.setState(prevState => ({isClick: !prevState.isClick}))
  }

  render() {
    console.log(this.state)
    const {isClick} = this.state
    const {eachItem} = this.props
    const {questionText, answerText} = eachItem
    let Element
    if (isClick) {
      Element = <p className="paragraph">{answerText}</p>
    } else {
      Element = ''
    }

    const imgUrl = isClick
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altText = isClick ? 'minus' : 'plus'
    return (
      <li className="item-container">
        <div className="item-head">
          <h1 className="item-head">{questionText}</h1>
          <button className="button" type="button" onClick={this.changeState}>
            <img src={imgUrl} alt={altText} className="image" />
          </button>
        </div>
        <hr />
        {Element}
      </li>
    )
  }
}

export default FaqItem
