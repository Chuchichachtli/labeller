import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeCell from './components/TypeCell';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classTypes: [[1, 1], [2, 2], [3, 3], [123, 5], [33, 99], [1233, 12], [99, 0], [90, 60], [90, 61], [90, 62] ], //mock
      projects : [ 'abc', 'her ile 1 okul', 'denizbank', 'denizci']

    }
  }


  render() {

    const { classTypes } = this.state;

    return (
      <div>
      <div className="project-header">
          <label style={{float:"left", marginTop: "5px", marginRight:"5px", marginLeft: "10px"}}>Project:</label>
          <Dropdown 
            options={this.state.projects}
            onChange={this._onSelect} 
            menuClassName='quarter-width' 
            className='quarter-width'
            placeholder="Select an option" />;
        </div>
      <div className="cont">
        {}
        <div className="row">
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          <div className="column">
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
            <img src={logo} className="App-logo" alt="logo" />
          </div>
          
        </div>
        <div className="dashboard clearfix">
          <div className="center-items">
            <input type="button" value="Create New Type" style={{ marginTop: "20px" }}/> 
            
            {classTypes.map( item => {
              return (<TypeCell type={item[0]} page={item[1]} labelCount="123" bgColor="red" className="type-cell" />)
            })}

            
            <input type="button" value="Create New Type"></input>
            
          </div>


        </div>
      </div>
      </div>
    );
  }
}

export default App;
