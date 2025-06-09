import React, { useState } from 'react'
import NavBar from '../components/NavBar'
import CardSkip from '../components/CardSkip'
import "./styles/SelectSkip.css"
import { useNavigate } from 'react-router-dom'

const SelectSkip = () => {

  const [selectedSkipId, setSelectedSkipId] = useState(null);
  
  const navigate = useNavigate();

  const handleNextPage = () => {
    if(selectedSkipId){
      navigate("/permit-check");
    }
  }

  return (
    <div>
      <NavBar activeMenu="Select Skip" />
      <div className="select-skip-header">
        <h1>Select Your Ideal Skip Size</h1>
        <p>Choose from our available skips to get the right fit for your waste removal.</p>
      </div>
      <CardSkip selectedOn={setSelectedSkipId} selectedId={selectedSkipId} />
      {selectedSkipId && (
        <div className="next-button-container">
          <button className="button-next-main" onClick={handleNextPage}>Next</button>
        </div>
      )}
    </div>  
  )
}

export default SelectSkip