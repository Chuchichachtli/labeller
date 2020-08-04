import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeCell from './components/TypeCell';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

let colorOptions = ["green", "yellow","orange","pink","magenta","red","salmon", "mediumseagreen", "slateblue", "maroon", "aquamarine", "purple"];
// Fazla sayfada sayfaları grupla
// Sayfa state'ine göre o sub-arrayi yükle
// Alt butonlarda 1 önce, sonra en baş en son göster.
// Go To Page'i ? 
// State'e payload ekle (farkları pushlamak için)

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
        <div>
            <label style={{ float: "left", marginTop: "8px", marginRight: "5px", marginLeft: "10px", width: "5%" }}>Project:</label>
            <Dropdown
              options={this.state.projects}
              onChange={this._onSelect}
              menuClassName='quarter-width'
              className='quarter-width'
              placeholder="Select an option"
            />
          </div>
          <div style={{marginTop:"15px", marginBottom:"10px"}}>
            <label style={{ width: "5%", marginRight: "5px" }}> Draft Name </label>
            <input type="text" className="quarter-width" placeholder="Draft Name"></input>
          </div>
          
        </div>
      <div className="cont">
        
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
          <input type="button" value="12" style={{display:'inline-block',bottom:'0', height:"20px"}}/>
          <input type="button" value="12" style={{display:'inline-block',bottom:'0', height:"20px"}}/>
          <input type="button" value="12" style={{display:'inline-block',bottom:'0', height:"20px"}}/>
        </div>
        <div className="dashboard clearfix">
          <div className="center-items">
            <span style={{marginBottom:"15px"}}>Class Types</span>
            {/* <input type="button" value="Create New Type" style={{ marginTop: "20px" }}/>  */}
            
            {classTypes.map( item => {
              let color = colorOptions[classTypes.indexOf(item) % 12];
              return (<TypeCell type={item[0]} page={item[1]} labelCount="123" bgColor={color} className="type-cell" />)
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
