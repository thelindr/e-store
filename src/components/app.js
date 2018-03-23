import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Women from "./women"
import Men from "./men"
import Home from "./home"
import Header from "./header"

class App extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route path="/women" component={Women} />
          <Route path="/men" component={Men} />
        </div>
      </BrowserRouter>
    )
  }

}

export default App
