import './App.css'
import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { Navigate } from 'react-router-dom'
import Postcode from './pages/Postcode'
import WasteType from './pages/WasteType'
import SelectSkip from './pages/SelectSkip'
import PermitCheck from './pages/PermitCheck'
import ChooseDate from './pages/ChooseDate'
import Payment from './pages/Payment'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post-code" element={<Postcode />} />
          <Route path="/waste-type" element={<WasteType />} />
          <Route path="/select-skip" element={<SelectSkip />} />
          <Route path="/permit-check" element={<PermitCheck />} />
          <Route path="/choose-date" element={<ChooseDate />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Router>
    </>
  )
}

const Home = () => {
  return <Navigate to="/select-skip" replace />;
}

export default App
