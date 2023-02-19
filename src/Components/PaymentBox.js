import { useState } from 'react';
import './paymentBox.css';
import ReactDOM from 'react-dom/client';

function PaymentBox() {
  const [name, setName] = useState("");

  return (
    <form>
      <label>User name
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>User ID  <br/>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>Transaction ID  <br/>
        <input
          type="text" 
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
    </form>
  )
}

export default PaymentBox;