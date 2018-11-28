import React, { Component } from 'react';

import Search from './Search';



class App extends Component {
  render() {
    return (
      <div className="App">
          <h2>Enter a word here to see the result</h2>
          <Search />
          <hr/>
          <p>
            The little database that words will be searched from is : <br/>
            'HTML','CSS','CSS3','NodeJS','PHP','JQUERY','JAVASCRIPT','BOOTSTRAP','REACTJS'
          </p>
          
          
      </div>
    );
  }
}

export default App;
