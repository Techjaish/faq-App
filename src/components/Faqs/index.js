// Write your code here.

import FaqItem from '../FaqItem'

import './index.css'

const Faqs = props => {
  const {faqsList} = props

  return (
    <div className="main-container">
      <div className="sub-container">
        <h1 className="heading">FAQS</h1>
        <ul className="list-container">
          {faqsList.map(eachItem => (
            <FaqItem eachItem={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
