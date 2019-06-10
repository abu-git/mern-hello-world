import React, { Component } from 'react';
import axios from 'axios';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      data : ""
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/')
      .then(res => {
        console.log(res.data[0].data);
        this.setState({ data: res.data[0].data });
      })
      .catch(err => console.log(err));
  }

  render(){
    const textFromBackend = this.state.data;
    return(
      <div className="App">
        {textFromBackend}
      </div>
    );
  }
}
export default App;
