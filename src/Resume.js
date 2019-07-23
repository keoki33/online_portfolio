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
  state = {
    class: "resume",
    numPages: null,
    pageNumber: 1,
    width: 0,
    height: 0
  };

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  whatever = () => {};

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.setState({ class: "resume" });
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  width = () => {
    if (this.state.width > 850) {
      return "800";
    } else {
      return this.state.width * 0.9;
    }
  };

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
          <Page width={this.width()} className="pdfPage" pageNumber={1} />
          <Page width={this.width()} className="pdfPage" pageNumber={2} />
        </Document>
      </div>
    );
  }
}

export default Resume;
