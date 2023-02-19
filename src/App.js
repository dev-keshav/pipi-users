// import { TextField } from '@mui/material';
import { QRCodeSVG } from 'qrcode.react';
import './App.css';
import PaymentBox from './Components/PaymentBox';

function App() {
  return (
    <div className="App">
      {/* <PaymentBox /> */}

      <div className='card-hai'>
        <h3>PiPi-Users</h3>
        <PaymentBox />
        {/* <TextField id="standard-basic" label="Standard" variant="standard" /> */}
        <p>User QR Code</p>
        <div className='qr-div'>
          <QRCodeSVG className='qr-code' value='https://groobe-landing.netlify.app/' />
        </div>
      </div>
    </div>
  );
}

export default App;
