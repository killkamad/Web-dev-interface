import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     numbers : []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event){
    this.setState({numbers: event.target.value})
  }
  handleSubmit(event){
    if(this.state.numbers == 1){
      this.state.numbers = "I";
      alert(this.state.numbers)

    }
    else if(this.state.numbers == 2){
      this.state.numbers = "II";
      alert(this.state.numbers)

    }
    else if(this.state.numbers == 3){
      this.state.numbers = "III";
      alert(this.state.numbers)

    }
    else if(this.state.numbers == 4){
      this.state.numbers = "IV";
      alert(this.state.numbers)

    }
    else if(this.state.numbers == 5){
      this.state.numbers = "V";
      alert(this.state.numbers)

    }
    else{alert("vvedite ot 1-5")}
    event.preventDefault();
    

    
    

  
    }
    
    
  
  render() {
    return (
      
        <form id="form" onSubmit={this.handleSubmit}>
           <input type="text" name="kek" placeholder="цифра" id="kek" value={this.state.value} onChange={this.handleChange}/>
           <input type="submit"  name="submit" value="submit" id="submit" onSubmit={this.handleSubmit}/>
        </form>
       
    );
  }
}


export default App;
