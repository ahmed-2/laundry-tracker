import React, { Component } from 'react';
import firebase from "firebase";
import './App.css';

var config = {
  apiKey: "AIzaSyAb6W6yLDpM_E7qPgh3lOmw6iqERysHUDg",
  authDomain: "usc-website-206715.firebaseapp.com",
  databaseURL: "https://usc-website-206715.firebaseio.com",
  projectId: "usc-website-206715",
  storageBucket: "usc-website-206715.appspot.com",
  messagingSenderId: "115895791273"
};
firebase.initializeApp(config);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Cinnamon College Laundry Tracker
          </h1>
          <h2>
            Floor 17
          </h2>
          {
            //Insert Floor (Table) here
          }
        </header>
      </div>
    );
  }
}

class Floor extends Component {
  //Table
}

class Machine extends Component {
  //Square cell of table
}

export default App;