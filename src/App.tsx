
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TicketForm from './pages/TicketForm';
import TicketSuccess from './pages/TicketSuccess';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TicketForm/>}/>
          <Route path="/success-ticket" element={<TicketSuccess/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
