import React from 'react'
import './Poetry.css'
import { NavBar } from '../NavBar'
import { Document, Page, pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;



export class Poetry extends React.Component {
    state = { numPages: null, pageNumber: 1 };

    onDocumentLoadSuccess = ({ numPages }) => {
      this.setState({ numPages });
  } 

  goToPrevPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState(state => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber } = this.state;

    return (
      <div>
        <NavBar navType="project" variant="light"/>
        <div id="poetrypage">
          {this.state.pageNumber > 1 &&
            <button id="prettybutton" onClick={this.goToPrevPage}>Prev</button>
          }
          |   
          {this.state.pageNumber < 11 &&
            <button id="prettybutton" onClick={this.goToNextPage}>Next</button>
          }
          <Document
            file="/portfolio.pdf"
            onLoadSuccess={this.onDocumentLoadSuccess}>
            <Page pageNumber={pageNumber} />
          </Document>
          
          
        </div>
        
      </div>
    )
  }
}
