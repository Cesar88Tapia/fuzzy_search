import React from "react";

class FuzzySearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      amount: "",
      date: "",
      cardInfo: ""
    }
    this.handleAmount = this.handleAmount.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleCardInfo = this.handleCardInfo.bind(this);
  }
  handleAmount(e) {
    this.setState({
      amount: e.target.value
    })
  }
  handleDate(e) {
    this.setState({
      date: e.target.value
    })
  }
  handelCardInfo(e){
    this.setState({
      cardInfo: e.target.value
    })
  }
  render() {
    return (
      <div>
        <div className="input-field">
          <label>Search</label>
         <input type="text" value={this.state.last} onChange={this.handleAmount}/>
         <button type="button" onSubmit={this.handleSubmit}>Search</button>
        </div>
      </div>
    )
  }
}

export default FuzzySearch;
