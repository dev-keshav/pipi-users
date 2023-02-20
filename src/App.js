import { Button } from '@mui/material';
import './App.css';
import PaymentBox from './Components/PaymentBox';
import QrCode from './Components/QrCode';

function App() {
  return (
    <div className="App">
      <div className='card-hai'>
        <h3>PiPi-Users</h3>
        <PaymentBox />
        <div className='qr-div'>
          {/* <QrCode /> */}
        </div>
        <Button variant="contained" color="success">Confirm</Button>
      </div>
    </div>
  );
}

export default App;













 