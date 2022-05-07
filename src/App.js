import {Component} from 'react'

import Loader from 'react-loader-spinner'
import TravelCard from './TravelCard'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLoading: false, initialList: []}

  componentDidMount = () => {
    this.getTravelPackages()
  }

  getTravelPackages = async () => {
    this.setState({isLoading: true})
    const apiUrl = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(apiUrl)
    const data = await response.json()
    const updatedData = data.packages.map(eachItem => ({
      id: eachItem.id,
      imageUrl: eachItem.image_url,
      description: eachItem.description,
      name: eachItem.name,
    }))
    this.setState({initialList: updatedData, isLoading: false})
  }

  renderLoader = () => (
    <div testid="loader" className="loader">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  renderList = () => {
    const {initialList} = this.state
    return (
      <ul className="item-list">
        {initialList.map(eachItem => (
          <TravelCard eachDetails={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading, initialList} = this.state
    const renderView = isLoading ? this.renderLoader() : this.renderList()
    return (
      <div className="bg-container">
        <h1 className="heading">Travel Guide</h1>
        {renderView}
      </div>
    )
  }
}

export default App
