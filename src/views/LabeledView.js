import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ImageCell from '../components/ImageComponent/ImageCell';
import Footer from '../components/footerComponent/CustomFooter'
import Doc1 from '../doc1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LabeledView.css";
import Dropdown from 'react-dropdown';
class Labeled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [{ image: Doc1, name: "doc name1", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc name2", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name3", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc nam4e", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name8", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc name7", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc nam5", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name6", label: "Sözleşme Page 1" }],
      chosen: [], //ids of chosen documents
      colourList: ["black","black","black","black","black","black","black","black","black","black","black","black","black","black","black","black"],
      projects: ['abc', 'her ile 1 okul', 'denizbank', 'denizci']
    }
  }
  docClick = (id, colour, docName) =>{
    const { chosen, colourList } = this.state;
    let newChosen = chosen;
    let newColourList = colourList;
    if(colour==="black"){
      newColourList[id] = "red";
      newChosen.push(docName);
    }else{
      newColourList[id] = "black";
      newChosen.splice(newChosen.indexOf(docName), 1);
    }
    this.setState({chosen: newChosen, colourList:newColourList});

  }

  render() {
    const { docList, colourList } = this.state;
    console.log(this.state.chosen)
    return (
      <div>
        <NavigationBar />
        <Dropdown
                options={this.state.projects}
                onChange={this._onSelect}
                menuClassName='quarter-width'
                className='quarter-width'
                placeholder="Select a project"
              />
        <div class="container-fluid container-dimensions">
          <div class="row">
            <div class="col-md">
              <ImageCell
                colour={colourList[0]}
                documentName={docList[0] ? docList[0].name : null}
                image={docList[0] ? docList[0].image : null}
                savedDocument={true}
                documentType={docList[0] ? docList[0].label : null}
                selectDocument={this.docClick}
                id="0"
              />
              <ImageCell
                colour={colourList[4]}
                documentName={docList[4] ? docList[4].name : null}
                image={docList[4] ? docList[4].image : null}
                savedDocument={true}
                documentType={docList[4] ? docList[4].label : null}
                selectDocument={this.docClick}
                id="4"
              />
              <ImageCell
                colour={colourList[8]}
                documentName={docList[8] ? docList[8].name : null}
                image={docList[8] ? docList[8].image : null}
                savedDocument={true}
                documentType={docList[8] ? docList[8].label : null}
                selectDocument={this.docClick}
                id="8"
              />
              <ImageCell
                colour={colourList[12]}
                documentName={docList[12] ? docList[12].name : null}
                image={docList[12] ? docList[12].image : null}
                savedDocument={true}
                documentType={docList[12] ? docList[12].label : null}
                selectDocument={this.docClick}
                id="12"
              />

            </div>
            <div class="col-md">
              <ImageCell
                colour={colourList[1]}
                documentName={docList[1] ? docList[1].name : null}
                image={docList[1] ? docList[1].image : null}
                savedDocument={true}
                documentType={docList[1] ? docList[1].label : null}
                selectDocument={this.docClick}
                id="1"
              />
              <ImageCell
                colour={colourList[5]}
                documentName={docList[5] ? docList[5].name : null}
                image={docList[5] ? docList[5].image : null}
                savedDocument={true}
                documentType={docList[5] ? docList[5].label : null}
                selectDocument={this.docClick}
                id="5"
              />
              <ImageCell
                colour={colourList[9]}
                documentName={docList[9] ? docList[9].name : null}
                image={docList[9] ? docList[9].image : null}
                savedDocument={true}
                documentType={docList[9] ? docList[9].label : null}
                selectDocument={this.docClick}
                id="9"
              />
              <ImageCell
                colour={colourList[13]}
                documentName={docList[13] ? docList[13].name : null}
                image={docList[13] ? docList[13].image : null}
                savedDocument={true}
                documentType={docList[13] ? docList[13].label : null}
                selectDocument={this.docClick}
                id="13"
              />
            </div>
            <div class="col-md">
              <ImageCell
                colour={colourList[2]}
                documentName={docList[2] ? docList[2].name : null}
                image={docList[2] ? docList[2].image : null}
                savedDocument={true}
                documentType={docList[2] ? docList[2].label : null}
                selectDocument={this.docClick}
                id="2"
              />
              <ImageCell
                colour={colourList[6]}
                documentName={docList[6] ? docList[6].name : null}
                image={docList[6] ? docList[6].image : null}
                savedDocument={true}
                documentType={docList[6] ? docList[6].label : null}
                selectDocument={this.docClick}
                id="6"
              />
              <ImageCell
                colour={colourList[10]}
                documentName={docList[10] ? docList[10].name : null}
                image={docList[10] ? docList[10].image : null}
                savedDocument={true}
                documentType={docList[10] ? docList[10].label : null}
                selectDocument={this.docClick}
                id="10"
              />
              <ImageCell
                colour={colourList[14]}
                documentName={docList[14] ? docList[14].name : null}
                image={docList[14] ? docList[14].image : null}
                savedDocument={true}
                documentType={docList[14] ? docList[14].label : null}
                selectDocument={this.docClick}
                id="14"
              />
            </div>
            <div class="col-md">
              <ImageCell
                colour={colourList[3]}
                documentName={docList[3] ? docList[3].name : null}
                image={docList[3] ? docList[3].image : null}
                savedDocument={true}
                documentType={docList[3] ? docList[3].label : null}
                selectDocument={this.docClick}
                id="3"
              />
              <ImageCell
                colour={colourList[7]}
                documentName={docList[7] ? docList[7].name : null}
                image={docList[7] ? docList[7].image : null}
                savedDocument={true}
                documentType={docList[7] ? docList[7].label : null}
                selectDocument={this.docClick}
                id="7"
              />
              <ImageCell
                colour={colourList[11]}
                documentName={docList[11] ? docList[11].name : null}
                image={docList[11] ? docList[11].image : null}
                savedDocument={true}
                documentType={docList[11] ? docList[11].label : null}
                selectDocument={this.docClick}
                id="11"
              />
              <ImageCell
                colour={colourList[15]}
                documentName={docList[15] ? docList[15].name : null}
                image={docList[15] ? docList[15].image : null}
                savedDocument={true}
                documentType={docList[15] ? docList[15].label : null}
                selectDocument={this.docClick}
                id="15"
              />
            </div>
            <div class="col-md" style={{ border: "3px solid black", borderRadius: '10px', marginTop: "10px", marginRight: '10px' }}>

            </div>
          </div>

        </div>
        <Footer onClickForward={() => {console.log()}} onClickBackward={() => {console.log()} }/>
      </div>

    );
  }
}

export default Labeled;