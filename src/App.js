import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor()
  {
    super();
    this.state={
data:[{}]

    };
  }
  /*onInp1Change(event)
  {
    console.log(event.target);
    this.setState({
inp1: event.target.value

    });
  }
  onInp2Change(event)
  {
    console.log(event.target);
    this.setState({
inp2: event.target.value
    });
  }
  onInp3Change(event)
  {
    console.log(event.target);
    this.setState({
inp3: event.target.value
    });
  }
  onInp4Change(event)
  {
    console.log(event.target);
    this.setState({
inp4: event.target.value
    });
  }*/
  componentDidMount()
  {
    fetch('https://xi-apps.in/app/api/recognitions?token=tFcEtB5kxsN1gaS207MOHKs5').then((Response)=>Response.json()).then((findresponse)=>{
      findresponse.results.forEach(element => {
        console.log(element.id);
      });
    console.log(findresponse.results);
      this.setState({
        data:findresponse.results
      })
      
  })
}

  render() {
    return (
     
      <div className="App">
       
        <header className="App-header">
         
        </header>{    
        this.state.data.map((element)=>{
        return <div> {element.id}
                 {id.userName}
         </div>  
        })
      }
         
      </div>
    );
  }
}
export default App;