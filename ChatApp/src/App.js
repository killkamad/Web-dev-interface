import React, { Component } from 'react';
import './App.css'
import { Sidebar } from './containers/Sidebar'
import { MessagesList } from './containers/MessagesList'
import { AddMessage } from './containers/AddMessage'
//import firebase from "firebase"
//import firebaseConfig from './config';

//firebase.initializeApp(firebaseConfig);

class App extends Component {

//  constructor(props) {
  //  super(props)
   // this.state = { text: "", messages: [] }
 // }
  	
 // componentDidMount(){
//	  firebase.database().ref("messages/").on("value",(snapshot)=>{
//		  
	//	  const currentMessages = snapshot.val()
		//  
		  //if (currentMessages != null){
			//  this.setState({
				//  messages: currentMessages
			  //})
		 // }
	  //})
  //}
  
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App
