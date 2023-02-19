import './paymentBox.css';
import React, { useState } from 'react';

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
      <label>User ID  <br />
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <label>Transaction ID  <br />
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