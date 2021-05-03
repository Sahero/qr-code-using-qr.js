import React, { useState } from 'react';
import QRCode from './QRCode'

import "./styles.css";

export default function App() {

  const [url, setUrl] = useState();
  
 
  function generateQRCode(){
    let website = document.getElementById("website").value;
  
    if (website) {
    
      setUrl(website)

      document.getElementById("qrcode-container").style.display = "block";
    

    }
    else{
      alert("Please enter a valid URL");
    }
  }

  return (
    <div className="App">
      <div className="form">
      <h1>QR Code using qr.js</h1>
        <input type="url" id="website" name="website" 
               placeholder="https://webisora.com" required />
        <button type="button" onClick={generateQRCode}>
          Generate QR Code
        </button>

      <div id="qrcode-container">
        <hr/>
        {url ? 
        <>
          <QRCode value = {url} foreground="#5868bf" />
        </>
        : null 
        }
        
      </div>
    </div>
    </div>
  );
}
