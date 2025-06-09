import React, { useEffect, useState } from 'react'
import "./styles/CardSkip.css";

const CardSkip = ({selectedOn, selectedId}) => {

    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchingDataForCard = async () => {
            try{
              const response = await fetch("https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
              });
              if(!response.ok){
                setError("Failed to catch data");
                setLoading(false);
                return;
              }
              const data = await response.json();
              console.log(data);
              setSkips(data);
              setLoading(false);
            }catch(error){
                console.log(error?.message);
                setError(error?.message || "Something went wrong");
                setLoading(false);
            }
        }

        fetchingDataForCard();
    }, [])

    const selectSkipCard = (id) => {
        if(selectedOn){
            selectedOn(id);
        }
    }

  return (
    <>
        <div className="skip-cards-container">
            {loading && <p className="loading-message">Loading skip options...</p>}
            {error && <p className="error-message">{error}</p>}
            {!loading && !error && skips.length > 0 && skips.map((skip) => (
                <div key={skip.id} className={`skip-card ${selectedId === skip.id ? "selected" : ""}`}>
                    <h3>Skip Size: {skip.size}</h3>
                    <p>Hire Period: {skip.hire_period_days} days</p>
                    <p>Price before VAT: {skip.price_before_vat}</p>
                    <p>Allowed on road: {skip.allowed_on_road ? "Yes" : "No"}</p>
                    <p>Allows heavy waste: {skip.allows_heavy_waste ? "Yes" : "No"}</p>
                    <div>
                        <button className="button-select" onClick={() => selectSkipCard(skip.id)}>Select This Card</button>
                    </div>
                </div>
            ))}
        </div>
    </>
  )
}

export default CardSkip