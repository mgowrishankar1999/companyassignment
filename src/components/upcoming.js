import React, { useState, useEffect } from "react";
import axios from "axios";
import './upcoming.css';

function Upcoming() {

  function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }

  function normalizeDistance(meters) {
    if (meters == null) {
      return 'Data unavailable';
    } else if (typeof meters == 'number') {
      return `${(meters / 1000).toFixed(2)} km`;
    } else if (typeof meters == 'string') {
      const numericPart = parseFloat(meters);
      if (isNaN(numericPart)) {
        return 'N/A';
      } else {
        return `${(numericPart / 1000).toFixed(2)} km`;
      }
    }
    return 'N/A';
  }

  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios.get('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=1&type=upcoming')
      .then(response => {
        if (!response.data || !response.data.events) {
          throw new Error('No events found');
        }
        setEvents(response.data.events);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  console.log(events);

  return (
    <div className="container-fluid maindude upcoming mt-4" >
      <div className="d-flex adjust">
        <h4 className="events">Upcoming events</h4>
        <span class="material-symbols-outlined rightarrowup " >trending_flat</span>
        <h4 className="seeall">See all</h4>
      </div>
     

      <div className="image-grid container ">
        {events.map((data, index) => (
          <div key={index} className="image-item">
            {index === 0 && <img className="image" src='/images/Rectangle 7.svg' alt="Event 1" />}
            {index === 1 && <img className="image" src='/images/Rectangle 9.svg' alt="Event 2" />}
            {index === 2 && <img className="image" src='/images/Rectangle 11.svg' alt="Event 3" />}
            {index === 3 && <img className="image" src='/images/Rectangle 15.svg' alt="Event 4" />}
            {index === 4 && <img className="image" src='/images/Rectangle 16.svg' alt="Event 5" />}
            {index === 5 && <img className="image" src='/images/Rectangle 17.svg' alt="Event 6" />}
            {index === 6 && <img className="image" src='/images/Rectangle 21.svg' alt="Event 7" />}
            {index === 7 && <img className="image" src='/images/Rectangle 22.svg' alt="Event 8" />}
            {index === 8 && <img className="image" src='/images/Rectangle 23.svg' alt="Event 9" />}
            {index === 9 && <img className="image" src='/images/Rectangle 37.svg' alt="Event 10" />}
            <div className="text-overlay">
              <p className="overlay-text ms-1">{formatDate(data.date)}</p> 
            </div>

            <div><h5 className="after ms-1">After note nearly</h5></div>
            <div className="d-flex cards">
              <p className="city ms-1"><span class="material-symbols-outlined mt-2">location_on</span>{data.cityName}</p>
              <p className=" text">{data.weather} | <span>{normalizeDistance(data.distanceKm)}</span></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Upcoming;
