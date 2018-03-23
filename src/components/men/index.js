import React from "react"
import Productview from "../productview"

const productsJson = require("./../products.json")

class Men extends React.Component {

  render() {
    return (
      <div className="Products">
        {productsJson.products.map(item => {
          if (item.gender === "men") {
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

export default Men
