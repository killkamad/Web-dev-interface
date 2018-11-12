import './App.css';
import React from "react";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '', myValue: [] };
    // this.readMyNumber = this.handleChangePlz.bind(this);
    this.showMyArray = this.handleSumbitPlz.bind(this)
  }
  handleSumbitPlz(event) {
    event.preventDefault();
    let tempValue = '';
    switch (parseInt(this.state.value)) {
      case 1:
        tempValue = "I";
        break;
      case 2:
        tempValue = "II";
        break;
      case 3:
        tempValue = "III";
        break;
      case 4:
        tempValue = "IV";
        break;
      case 5:
        tempValue = "V";
        break;
      case 6:
        tempValue = "VI";
        break;
      case 7:
        tempValue = "VII";
        break;
      case 8:
        tempValue = "VIII";
        break;
      case 9:
        tempValue = "IX";
        break;
      default:
        tempValue = "No such value"
    }
    let tempArray = this.state.myValue;
    tempArray.push(tempValue);
    this.setState({ myValue: tempArray });
  }
  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder='Your number ffs' value={this.state.value} onChange={(value) => this.setState({ value: value.target.value })} />
          <input type="submit" value="Convert plz" onSubmit={(event) => this.handleSumbitPlz(event)} />
        </form>
        <ul>
          {this.state.myValue.map(item => <li>{item}</li>)}
        </ul>
        <p>{this.state.value}</p>
      </div>
    );
  }
}



export default App;
