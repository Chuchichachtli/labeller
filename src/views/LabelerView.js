import React from 'react';
import './App.css';
import TypeCell from '../components/TypeCell/TypeCell';
import Popup from '../components/Popup/Popup';
import Dropdown from 'react-dropdown';
import ImageCell from '../components/ImageComponent/ImageCell';
import 'react-dropdown/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import doc1 from '../doc1.jpg';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import Footer from '../components/footerComponent/CustomFooter';

let colorOptions = ["green", "yellow", "orange", "pink", "magenta", "red", "salmon", "mediumseagreen", "slateblue", "maroon", "aquamarine", "purple"];
// Fazla sayfada sayfaları grupla
// Sayfa state'ine göre o sub-arrayi yükle
// Alt butonlarda 1 önce, sonra en baş en son göster.
// Go To Page'i ? 
// State'e payload ekle (farkları pushlamak için)

class LabelView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      classTypes: [[1, 1], [2, 2], [3, 3], [123, 5], [33, 99], [1233, 12], [99, 0], [90, 60], [90, 61], [90, 62]], // types
      projects: ['abc', 'her ile 1 okul', 'denizbank', 'denizci'],   //Projects (for dropdown menu up top)
      showCreatePopup: false, //show or hide type creation popup
      typeState: 1, // current page in types
      maxTypeState: Infinity, // How many pages there are in the types area.
      currentTypeId: "", //current id of selected type
      currentColour: "", //current colour of selected type
      documentList: [[doc1, "KVKKPage1"], [doc1, "KVKK Page 2"], [doc1, "KVKK Page 3"], [doc1, "KVKK Page 4"], [doc1, "KVKK Page 5"],
      [doc1, "KVKK Page 6"],[doc1, "KVKKPage1"], [doc1, "KVKK Page 2"], [doc1, "KVKK Page 3"], [doc1, "KVKK Page 4"], [doc1, "KVKK Page 5"],
      [doc1, "KVKK Page 6"], [doc1, "KVKK Page 7"], [doc1, "KVKK Page 7"], [doc1, "KVKK Page 7"], [doc1, "KVKK Page 7"]], // document images and their names (comes from BE)
      payload: [], // What to send 
      docState: {} // To show changes in the UI
      //docs labeled icin back-end'den sayi gelmeli
    }
  }
  // Clear all current labels
  clearAllLabels = () => {
    const { payload, docState } = this.state;
    let newPayload = payload;
    let newDocState = docState;

    for (const x in newDocState) {
      newDocState[x].color = "black";
      newDocState[x].type = "-1";
    }
    newPayload = [];
    this.setState({ payload: newPayload, docState: newDocState });
    console.log(newDocState, payload)

  }
  // Label documents when clicked on with a valid type
  documentClick = (id, docName) => {
    const { currentTypeId, currentColour, docState, payload, classTypes } = this.state;
    let newDocState = docState;
    let newPayload = payload;
    let inPayload = false;
    let different = false;
    if (currentTypeId !== "" && currentColour !== "") {
      const strId = id.toString();

      if (newDocState[strId]) {
        if (newDocState[strId].color !== currentColour) {
          newDocState[strId].color = currentColour;
          newDocState[strId].type = currentTypeId;

        } else {
          newDocState[strId].color = 'black';
          newDocState[strId].type = '-1';
        }
      } else {
        newDocState[strId] = { color: currentColour, type: currentTypeId };
      }
      for (let i = 0; i < newPayload.length; i++) {
        if (newPayload[i][0] === docName && newPayload[i][1] !== classTypes[currentTypeId]) { different = true; inPayload = true; }
        else if (newPayload[i][0] === docName && newPayload[i][1] === classTypes[currentTypeId]) { inPayload = true; }
      }
      if (different && inPayload) {
        for (let i = 0; i < newPayload.length; i++) {

          if (newPayload[i][0] === docName) {
            newPayload[i][1] = classTypes[currentTypeId];
            inPayload = true;
          }
        }
      }
      if (inPayload && !different) {

        for (let i = 0; i < newPayload.length; i++) {
          if (newPayload[i][0] === docName && !different) {
            newPayload.splice(i, 1);
            inPayload = true;
          }
        }
      }
      if (!inPayload) { newPayload.push([docName, classTypes[currentTypeId]]); }
      this.setState({ docState: newDocState, payload: newPayload });
    }
  }

  setType = (key, colour) => {
    if (this.state.currentTypeId !== key) {
      this.setState({ currentTypeId: key, currentColour: colour });
    } else {
      this.setState({ currentTypeId: "", currentColour: "black" });
    }
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
    const { classTypes, showCreatePopup, typeState, currentTypeId, documentList, docState } = this.state;

    return (

        <div style={{paddingBottom:"100px"}}>
          
          {showCreatePopup ?
            <Popup
              closePopup={this.closePopup}
              addNewType={this.addType}
            />
            :
            null}
            <NavigationBar/>
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
          <div className="container-fluid">
            <div className="row">
              <div className="col-md">
                <ImageCell documentName={documentList[0] ? documentList[0][1] : null} image={documentList[0] ? documentList[0][0] : null} colour={docState['0'] ? docState['0'].color : "null"} id="0" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[4] ? documentList[4][1] : null} image={documentList[4] ? documentList[4][0] : null} colour={docState['4'] ? docState['4'].color : "null"} id="4" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[8] ? documentList[8][1] : null} image={documentList[8] ? documentList[8][0] : null} colour={docState['8'] ? docState['8'].color : "null"} id="8" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[12] ? documentList[12][1] : null} image={documentList[12] ? documentList[12][0] : null} colour={docState['12'] ? docState['12'].color : "null"} id="12" labelClick={this.documentClick} />
              </div>
              <div className="col-md">
                <ImageCell documentName={documentList[1] ? documentList[1][1] : null} image={documentList[1] ? documentList[1][0] : null} colour={docState['1'] ? docState['1'].color : "null"} id="1" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[5] ? documentList[5][1] : null} image={documentList[5] ? documentList[5][0] : null} colour={docState['5'] ? docState['5'].color : "null"} id="5" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[9] ? documentList[9][1] : null} image={documentList[9] ? documentList[9][0] : null} colour={docState['9'] ? docState['9'].color : "null"} id="9" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[13] ? documentList[13][1] : null} image={documentList[13] ? documentList[13][0] : null} colour={docState['13'] ? docState['13'].color : "null"} id="13" labelClick={this.documentClick} />
              </div>
              <div className="col-md">
                <ImageCell documentName={documentList[2] ? documentList[2][1] : null} image={documentList[2] ? documentList[2][0] : null} colour={docState['2'] ? docState['2'].color : "null"} id="2" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[6] ? documentList[6][1] : null} image={documentList[6] ? documentList[6][0] : null} colour={docState['6'] ? docState['6'].color : "null"} id="6" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[10] ? documentList[10][1] : null} image={documentList[10] ? documentList[10][0] : null} colour={docState['10'] ? docState['10'].color : "null"} id="10" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[14] ? documentList[14][1] : null} image={documentList[14] ? documentList[14][0] : null} colour={docState['14'] ? docState['14'].color : "null"} id="14" labelClick={this.documentClick} />
              </div>
              <div className="col-md">
                <ImageCell documentName={documentList[3] ? documentList[3][1] : null} image={documentList[3] ? documentList[3][0] : null} colour={docState['3'] ? docState['3'].color : "null"} id="3" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[7] ? documentList[7][1] : null} image={documentList[7] ? documentList[7][0] : null} colour={docState['7'] ? docState['7'].color : "null"} id="7" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[11] ? documentList[11][1] : null} image={documentList[11] ? documentList[11][0] : null} colour={docState['11'] ? docState['11'].color : "null"} id="11" labelClick={this.documentClick} />
                <ImageCell documentName={documentList[15] ? documentList[15][1] : null} image={documentList[15] ? documentList[15][0] : null} colour={docState['15'] ? docState['15'].color : "null"} id="15" labelClick={this.documentClick} />
              </div>
              <div className="col-md dashboard">
            {/* <div className="dashboard clearfix"> */}

              <div className="center-items">
                <input
                  type="button"
                  // className="add-button"
                  className="btn btn-light"
                  value="Save"
                  onClick={() => { console.log("Send Payload") }}
                  style={{ marginTop: "-20px" }}
                />

                <br/>
                <br />
                <input
                  type="button"
                  className="add-button"
                  value="Clear All Labels"
                  onClick={() => { this.clearAllLabels(); }}
                  style={{ marginTop: "-20px" }}
                />

                {currentTypeId !== "" ?
                  <><br /> <span>Selected: Document {classTypes[currentTypeId][0] + " Page " + classTypes[currentTypeId][1]}</span></> : null}
                <br />

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
              {/* <div>
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
              </div> */}
            </div>
            
          </div>
          <Footer/>
        </div>

    );
  }
}


export default LabelView;