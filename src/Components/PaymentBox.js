import './paymentBox.css';
import React, { useState } from 'react';
import QrCode from './QrCode';

function PaymentBox() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [transID, setTransID] = useState("");


  return (
    <form>
      <label>User name
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Wallet Address  <br />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>

      <div className='qr-code-div'>
        <QrCode />
      </div>

      <label>Balance  <br />
        <input
          type="text"
          value={transID}
          onChange={(e) => setTransID(e.target.value)}
        />
      </label>

    </form>
  )
}

export default PaymentBox;