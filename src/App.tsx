import React, { useRef, useEffect } from "react";
import WebViewer from "@pdftron/webviewer";
import "./App.css";

function App() {
  const viewerDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    WebViewer(
      {
        path: "lib",
        initialDoc:
          "pdf-documents/form-ahca-5000-3008-medical-certification-for-medicaid-long-term-care-services-and-patient-transfer-form.pdf",
      },
      viewerDiv.current as HTMLDivElement
    ).then((instance) => {
      console.log("Instance: " + instance);
    });
  }, []);

  return (
    <div className="App">
      <h1>PDF</h1>
      <div className="webViewer" ref={viewerDiv}></div>
    </div>
  );
}

export default App;
