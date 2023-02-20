import { QRCodeSVG } from 'qrcode.react';
import React, { useState } from 'react';
import './qrCode.css';

function QrCode() {
  const [url, setUrl] = useState("");

  function generateQR(e){
    setUrl(e.target.value)
  }

  return (
    <form>
      <label>Enter your URL for QR Code  <br/>
        <input
          type="text" 
          value={url}
          onChange={(e) => {generateQR(e)}} 
        />
      </label>
      
      <QRCodeSVG className='qr-code' value={url} />
      
    </form>
  )
}

export default QrCode;