import React from "react";
import { createWorker } from "tesseract.js";
import { FilePond, registerPlugin } from "react-filepond";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css";
import "filepond/dist/filepond.min.css";
import styles from "./CheckGrByImage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSync } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

registerPlugin(FilePondPluginImagePreview);

class CheckGrByImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isProcessing: false,
      ocrText: "",
      pctg: "0.00",
    };
    this.pond = React.createRef();
    this.worker = React.createRef();
    this.updateProgressAndLog = this.updateProgressAndLog.bind(this);
  }

  async doOCR(file) {
    this.setState({
      isProcessing: true,
      ocrText: "",
      pctg: "0.00",
    });
    // Loading tesseract.js functions
    await this.worker.load();
    // Loadingg language as 'English'
    await this.worker.loadLanguage("eng");
    await this.worker.initialize("eng");
    // Sending the File Object into the Recognize function to
    // parse the data
    const {
      data: { text },
    } = await this.worker.recognize(file.file);
    this.setState({
      isProcessing: false,
      ocrText: text,
    });
    console.log(this.state.ocrText);

    // if (this.state.ocrText.length) {
    //   const finalResult = this.state.ocrText;
    //   console.log(finalResult)
    //   axios
    //     .post(`http://localhost:8080/graformer`, {
    //       ocr: finalResult,
    //     })
    //     .then((res) => {
    //       console.log(res);
    //       console.log(res.data);
    //     });
    // }
  }
  updateProgressAndLog(m) {
    var MAX_PARCENTAGE = 1;
    var DECIMAL_COUNT = 2;

    if (m.status === "recognizing text") {
      var pctg = (m.progress / MAX_PARCENTAGE) * 100;
      this.setState({
        pctg: pctg.toFixed(DECIMAL_COUNT),
      });
    }
  }
  componentDidMount() {
    this.worker = createWorker({
      logger: (m) => this.updateProgressAndLog(m),
    });
  }
  render() {
    return (
      <div className={styles.mainPage}>
        <div className={styles.container}>
          <div style={{ marginTop: "10%" }} className={styles.row}>
            {/* <div className={styles.colMd4}></div> */}
            <div className={styles.colMd4}>
              <FilePond
                className={styles.filePond}
                ref={(ref) => (this.pond = ref)}
                onaddfile={(err, file) => {
                  this.doOCR(file);
                }}
                onremovefile={(err, fiile) => {
                  this.setState({
                    ocrText: "",
                  });
                }}
              />
            </div>
            {/* <div className={styles.colMd4}></div> */}
          </div>
          <div className={styles.card}>
            <h5 className={styles.cardHeader}>
              <div
                style={{ margin: "1%", textAlign: "left" }}
                className={styles.row}
              >
                <div className={styles.colCl12}>
                  <FontAwesomeIcon className={styles.icon} icon={faSync} />
                  {/* <i
                    className={
                      "fas fa-sync fa-2x " +
                      (this.state.isProcessing ? "fa-spin" : "")
                    }
                  ></i>{" "} */}
                  <span className={styles.statusText}>
                    {this.state.isProcessing
                      ? `Processing Image ( ${this.state.pctg} % )`
                      : "Parsed Text"}{" "}
                  </span>
                </div>
              </div>
            </h5>
            <div className={styles.cardBody}>
              <p className={styles.cardText}>
                {this.state.isProcessing
                  ? "..........."
                  : this.state.ocrText.length === 0
                  ? "No Valid Text Found / Upload Image to Parse Text From Image"
                  : this.state.ocrText}
              </p>
            </div>
          </div>

          <div className={styles.resultText}>
            <FontAwesomeIcon className={styles.icon} icon={faCheckCircle} />
            <span 
            className={styles.checkResult}
            >Result</span>
            <p className={styles.result}>abcd</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CheckGrByImage;
