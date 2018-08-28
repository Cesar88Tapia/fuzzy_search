import React from "react";
import ReactDom from "react-dom";
import FuzzySearch from "./components/FuzzySearch.jsx";
import Transactions from "./components/Tranctions.jsx";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      list: ""
    }
  }

  render() {
    return {
      <div>
         <h1> Fuzzy Search</h1>
         <FuzzySearch getTransactions={this.getTransaction}/>

      </div>
    }
  }
}

ReactDom.render(<App />, document.getElementById("app"));
