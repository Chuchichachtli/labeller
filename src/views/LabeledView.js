import React, { Component } from 'react';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import ImageCell from '../components/ImageComponent/ImageCell';
import Doc1 from '../doc1.jpg';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./LabeledView.css";
class Labeled extends Component {
  constructor(props) {
    super(props);
    this.state = {
      docList: [{ image: Doc1, name: "doc name", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc name", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc name", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name", label: "Sözleşme Page 1" }, { image: Doc1, name: "doc name", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name", label: "Sözleşme Page 1" },
      { image: Doc1, name: "doc name", label: "Sözleşme Page 1" }]
    }
  }

  render() {
    const { docList } = this.state;

    return (
      <div>
        <NavigationBar />
        <div class="container-fluid container-dimensions">
          <div class="row">
            <div class="col-md">
              <ImageCell
                colour="red"
                documentName={docList[0] ? docList[0].name : null}
                image={docList[0] ? docList[0].image : null}
                id="0"
              />
              <ImageCell
                colour="green"
                documentName={docList[4] ? docList[4].name : null}
                image={docList[4] ? docList[4].image : null}
                id="4"
              />
              <ImageCell
                colour="red"
                documentName={docList[8] ? docList[8].name : null}
                image={docList[8] ? docList[8].image : null}
                id="8"
              />
              <ImageCell
                colour="green"
                documentName={docList[12] ? docList[12].name : null}
                image={docList[12] ? docList[12].image : null}
                id="12"
              />

            </div>
            <div class="col-md">
              <ImageCell
                colour="red"
                documentName={docList[1] ? docList[1].name : null}
                image={docList[1] ? docList[1].image : null}
                id="1"
              />
              <ImageCell
                colour="green"
                documentName={docList[5] ? docList[5].name : null}
                image={docList[5] ? docList[5].image : null}
                id="5"
              />
              <ImageCell
                colour="red"
                documentName={docList[9] ? docList[9].name : null}
                image={docList[9] ? docList[9].image : null}
                id="9"
              />
              <ImageCell
                colour="green"
                documentName={docList[13] ? docList[13].name : null}
                image={docList[13] ? docList[13].image : null}
                id="13"
              />
            </div>
            <div class="col-md">
              <ImageCell
                colour="red"
                documentName={docList[2] ? docList[2].name : null}
                image={docList[2] ? docList[2].image : null}
                id="2"
              />
              <ImageCell
                colour="green"
                documentName={docList[6] ? docList[6].name : null}
                image={docList[6] ? docList[6].image : null}
                id="6"
              />
              <ImageCell
                colour="red"
                documentName={docList[10] ? docList[10].name : null}
                image={docList[10] ? docList[10].image : null}
                id="10"
              />
              <ImageCell
                colour="green"
                documentName={docList[14] ? docList[14].name : null}
                image={docList[14] ? docList[14].image : null}
                id="14"
              />
            </div>
            <div class="col-md">
              <ImageCell
                colour="red"
                documentName={docList[3] ? docList[3].name : null}
                image={docList[3] ? docList[3].image : null}
                id="3"
              />
              <ImageCell
                colour="green"
                documentName={docList[7] ? docList[7].name : null}
                image={docList[7] ? docList[7].image : null}
                id="7"
              />
              <ImageCell
                colour="red"
                documentName={docList[11] ? docList[11].name : null}
                image={docList[11] ? docList[11].image : null}
                id="11"
              />
              <ImageCell
                colour="green"
                documentName={docList[15] ? docList[15].name : null}
                image={docList[15] ? docList[15].image : null}
                id="15"
              />
            </div>
            <div class="col-md" style={{ border: "3px solid black", borderRadius: '10px', marginTop: "10px", marginRight: '10px' }}>

            </div>
          </div>

        </div>
        <footer className="custom-footer">
          <input
            type="button"
            className="add-button"
            value="<"
            onClick={console.log()}
          />
          <input
            type="button"
            className="add-button"
            value=">"
            onClick={console.log()}
          />
        </footer>
      </div>

    );
  }
}

export default Labeled;