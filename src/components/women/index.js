import React from "react"
import Productview from "../productview"
import "./style.css"

const productsJson = require("./../products.json")

class Women extends React.Component {

  render() {
    return (
      <div className="Products">
        {productsJson.products.map(item => {
          if (item.gender === "women") {
            return <Productview
              name={item.name}
              key={item.id}
              price={item.price}
              size={item.size}
              image={item.image}
              image2={item.image2} />}
        })}
      </div>
    )
  }
}

export default Women
