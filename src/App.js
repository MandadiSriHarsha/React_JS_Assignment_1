import './App.css'
import {Component} from 'react'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const DisplayHistoryList = props => {
  const {data, deleteList} = props
  const {id, logoUrl, title, domainUrl, timeAccessed} = data
  const ondelete = () => {
    deleteList(id)
  }
  return (
    <li className="history-item">
      <p className="history-item-time">{timeAccessed}</p>
      <div className="history-content-card">
        <img src={logoUrl} alt="domain logo" className="history-item-logo" />
        <div className="history-item-text-card">
          <p className="history-item-text-card-heading">{title}</p>
          <p className="history-item-text-card-description">{domainUrl}</p>
        </div>
        <button
          onClick={ondelete}
          type="button"
          testId="delete"
          className="history-item-button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="history-item-delete-icon"
          />
        </button>
      </div>
    </li>
  )
}

class History extends Component {
  state = {searchValue: '', historyList: initialHistoryList}

  searchHistory = event => {
    this.setState({searchValue: event.target.value.toLowerCase()})
  }

  deleteItem = id => {
    const {historyList} = this.state
    const list = historyList.filter(eachitem => eachitem.id !== id)
    this.setState({historyList: list})
  }

  render() {
    const {searchValue, historyList} = this.state
    const newHistoryList = historyList.filter(eachitem =>
      eachitem.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
    let element = null
    if (newHistoryList.length === 0) {
      element = (
        <div className="error-message-container">
          <p className="error-message">There is no history to show</p>
        </div>
      )
    } else {
      element = (
        <div className="history-card">
          <ul className="history-list">
            {newHistoryList.map(eachitem => (
              <DisplayHistoryList
                data={eachitem}
                key={eachitem.id}
                deleteList={this.deleteItem}
              />
            ))}
          </ul>
        </div>
      )
    }
    return (
      <div className="search-history-bg-container">
        <div className="input-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="input-card-image"
          />
          <div className="input-box-container">
            <div className="search-icon-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                alt="search"
                className="search-icon"
              />
            </div>
            <input
              onChange={this.searchHistory}
              type="search"
              placeholder="Search"
              className="search-bar"
            />
          </div>
        </div>
        {element}
      </div>
    )
  }
}

const App = () => <History />

export default App
