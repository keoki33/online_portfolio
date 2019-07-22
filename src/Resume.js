import React, { Component } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";

class Resume extends Component {
  state = { class: "resume", numPages: null, pageNumber: 1, file: pdfFile };

  whatever = () => {};

  componentDidMount() {
    this.setState({ class: "resume" });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  whatever = () => {};

  render() {
    const { pageNumber, numPages } = this.state;
    return (
      <div className={this.state.class}>
        <h1>Resume</h1>
        <Document file="file" onLoadSuccess={this.onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} />
        </Document>
        <p>
          Page {pageNumber} of {numPages}
        </p>
      </div>
    );
  }
}

export default Resume;
