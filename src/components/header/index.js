import React from "react"
import { Link } from "react-router-dom"
import "./style.css"

const productsJson = require("./../products.json")

class Header extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      menu: []
    }
  }

  // if you're on startpage, set header color

  checkLocation() {
    if (window.location.pathname.includes("women")) {
      return "Header active"
    } else if (window.location.pathname.includes("men")) {
      return "Header active"
    } else {
      return "Header inactive"
    }
  }

  // set menu depending on the category you hover ove

  setDropdownMenu = value => {
    console.log(value)
    const activeMenu = productsJson.products.map(item => {
      if (item.gender === value) {
        return <li><Link to={`/${value}/${item.category}`}>{item.category}</Link></li>
      } else {
        return null
      }
    })
    this.setState({
      menu: activeMenu
    })
  }

  render() {
    return (
      <div>
        <div
          className={this.checkLocation()}>
          <Link className="logo" to="/" />
          <div className="menu">
            <Link
              onMouseOver={() => this.setDropdownMenu("women")}
              onFocus={() => this.setDropdownMenu("women")}
              to="/women">Women
            </Link>
            <Link
              onMouseOver={() => this.setDropdownMenu("men")}
              onFocus={() => this.setDropdownMenu("women")}
              to="/men">Men
            </Link>
            <Link to="/children">Children</Link>
            <div className="dropdownMenu">{this.state.menu}</div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
