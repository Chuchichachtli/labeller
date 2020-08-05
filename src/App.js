import React from 'react';
import logo from './logo.svg';
import './App.css';
import TypeCell from './components/TypeCell/TypeCell';
import Popup from './components/Popup/Popup';
import Dropdown from 'react-dropdown';
import ImageCell from './components/ImageComponent/ImageCell';
import 'react-dropdown/style.css';
import doc1 from './doc1.jpg';

let colorOptions = ["green", "yellow", "orange", "pink", "magenta", "red", "salmon", "mediumseagreen", "slateblue", "maroon", "aquamarine", "purple"];
// Fazla sayfada sayfaları grupla
// Sayfa state'ine göre o sub-arrayi yükle
// Alt butonlarda 1 önce, sonra en baş en son göster.
// Go To Page'i ? 
// State'e payload ekle (farkları pushlamak için)

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classTypes: [[1, 1], [2, 2], [3, 3], [123, 5], [33, 99], [1233, 12], [99, 0], [90, 60], [90, 61], [90, 62]], //mock
      projects: ['abc', 'her ile 1 okul', 'denizbank', 'denizci'],
      showCreatePopup: false,
      typeState: 1,
      maxTypeState: Infinity,
      payload: [],
      currentTypeId: "",
      currentColour: ""
    }

  }
  setType = (key, colour) => {
    this.setState({ currentTypeId: key, currentColour: colour });
  }

  closePopup = () => {
    this.setState({ showCreatePopup: false });
  }

  addType = (type, page) => {
    const { classTypes } = this.state;
    let newTypeList = classTypes;
    newTypeList.push([type, page]);
    let typeCount = newTypeList.length;
    let maxTypePageCount = Math.ceil(typeCount / 5.0)
    this.setState({ classTypes: newTypeList, maxTypeState: maxTypePageCount });
  }

  render() {

    const { classTypes, showCreatePopup, typeState, currentTypeId } = this.state;

    return (
      <div>
        {showCreatePopup ?
          <Popup
            closePopup={this.closePopup}
            addNewType={this.addType}
          />
          :
          null}
        <div className="project-header">
          <div>
            <label style={{ float: "left", marginTop: "8px", marginRight: "5px", marginLeft: "10px", width: "5%" }}>Project:</label>
            <Dropdown
              options={this.state.projects}
              onChange={this._onSelect}
              menuClassName='quarter-width'
              className='quarter-width'
              placeholder="Select a project"
            />
          </div>
          <div style={{ marginTop: "15px", marginBottom: "10px" }}>
            <label style={{ width: "5%", marginRight: "5px" }}> Draft Name </label>
            <input type="text" className="quarter-width" placeholder="Draft Name"></input>
          </div>

        </div>
        <div className="cont">

          <div className="row">
            <div className="column">
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="0"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="1"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="2"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="3"/>

            </div>
            <div className="column">
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="4" />
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="5"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="6"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="7"/>
            </div>
            <div className="column">
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="8" />
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="9"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="10"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="11"/>
            </div>
            <div className="column">
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="12" />
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="13"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="14"/>
              <ImageCell documentName="Şanzıman Page 2" image={doc1} colour="null" id="15"/>
            </div>

            <input
              type="button"
              className="add-button"
              value="<"
              onClick={console.log()}
            />
            <input
              type="button"
              className="add-button"
              value="1"
              onClick={console.log()}
            />
            <input
              type="button"
              className="add-button"
              value=">"
              onClick={console.log()}
            />
          </div>
          <div className="dashboard clearfix">



            <div className="center-items">
              {/* <div className="header">            </div> */}
              <input
                type="button"
                className="add-button"
                value="<"
                onClick={() => { if (typeState !== 1) { this.setState({ typeState: typeState - 1 }) } }}
              />
              <input
                type="button"
                className="add-button"
                value=">"
                onClick={() => { if (typeState < this.state.maxTypeState && typeState < Math.ceil(this.state.classTypes.length / 5.0)) this.setState({ typeState: typeState + 1 }) }}
              />
              <br />
              <span style={{ marginBottom: "15px" }}>Class Types</span>
              <br />
              {/* <input type="button" value="Create New Type" style={{ marginTop: "20px" }}/>  */}

              <input
                type="button"
                className="add-button"
                value="Create New Type"
                onClick={() => { this.setState({ showCreatePopup: true }) }}
              />
              {classTypes.map((item, index) => {
                //let index = classTypes.indexOf(item);
                let color = colorOptions[index % 12];
                if (index >= (typeState - 1) * 5 && index < typeState * 5) { return (<TypeCell select={this.setType} type={item[0]} page={item[1]} labelCount="123" bgColor={color} currentId={currentTypeId} id={index} className="type-cell" />) }
                else { return <></> }
              })}

              <input
                type="button"
                className="add-button"
                value="<"
                onClick={() => { if (typeState !== 1) { this.setState({ typeState: typeState - 1 }) } }}
              />
              <input
                type="button"
                className="add-button"
                value=">"
                onClick={() => { if (typeState < this.state.maxTypeState && typeState < Math.ceil(this.state.classTypes.length / 5.0)) this.setState({ typeState: typeState + 1 }) }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;