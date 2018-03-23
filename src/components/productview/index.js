import React from "react"
import "./style.css"

class Productview extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      imageActive: this.props.image
    }
  }

  activateImage = () => {
    this.setState({
      imageActive: this.props.image2
    })
  }

  deactivateImage = () => {
    this.setState({
      imageActive: this.props.image
    })
  }

  render() {
    return (
      <div className="Productholder">
        <div
          className="ProductCard"
          onMouseOver={this.activateImage}
          onFocus={this.activateImage}
          onMouseLeave={this.deactivateImage}
          style={{ backgroundImage: `url(${this.state.imageActive})` }} />
        <li>{this.props.price} SEK</li>
        <li>{this.props.name}</li>
      </div>
    )
  }
}

export default Productview
