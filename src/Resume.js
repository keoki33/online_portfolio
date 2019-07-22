import React, { Component } from "react";

import Loading from "./Loading";
import pdfFile from "./images/resume.pdf";

import { Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${
  pdfjs.version
}/pdf.worker.js`;

class Resume extends Component {
  state = { class: "resume", numPages: null, pageNumber: 1 };

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
        <Document
          onLoadSuccess={this.onDocumentLoadSuccess}
          className="pdf"
          file={pdfFile}
          // renderMode="canvas"
          loading={<Loading />}
        >
          <Page pageNumber={1} />
          <Page pageNumber={2} />
        </Document>
      </div>
    );
  }
}

export default Resume;
