import React from "react";
import './body.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState,useEffect } from "react";



function fetchDataFromApi() {
    return fetch('https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  }
  
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
  




function Body() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const jsonData = await fetchDataFromApi();
          setData(jsonData.events);
        } catch (error) {
          setError(error);
        } finally {
          setIsLoading(false);
        }
      };
  
      fetchData();
    }, []);
    console.log(data)
    if (isLoading) {
      return <div>Loading...</div>;
    }
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    const responsive = {
  
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
  
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
        <div className="container position-relative body">
            <img className='banner' src={"/images/Banner.svg"} alt='Banner'/> 
            <div className="position-absolute discover" style={{color:"white", top:"5px", width:"76vw", textAlign:"center"}}>
                <h1 className="exciting">Discover Exciting Events Happening <br /> Near You - stay Tuned for Updates!</h1>
                <p className="paragraph">Dorem ipsum dolor sit amet, consectetur adipiscing.velit interdum, <br /> ac aliquet odio mattis. Class aptent taciti.</p>
            </div>
            <div className="ms-5 container d-flex position-absolute recomm">
              <h4 className="ms-5 shows ">Recommended shows </h4>
              <span class="material-symbols-outlined rightarrow " >trending_flat</span>
              <h4 className="see">See all</h4>
            </div>
            <Carousel className="maincard position-absolute container-fluid marshall"
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customTransition="all .7s"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {data.map((event,index) => (
                
                <div key={index} className="card  ">
                    {index === 0 && <img className="image" src='/images/Rectangle 2.svg' alt="Event 1" />}
                    {index === 1 && <img className="image" src='/images/Rectangle 4 (1).svg' alt="Event 2" />}
                    {index === 2 && <img className="image" src='/images/Rectangle 4-1.svg' alt="Event 3" />}
                    {index === 3 && <img className="image" src='/images/Rectangle 4.svg' alt="Event 4" />}
                    {index === 4 && <img className="image" src='/images/Rectangle 5-1.svg' alt="Event 5" />}
                    {index === 5 && <img className="image" src='/images/Rectangle 5-2.svg' alt="Event 6" />}
                    {index === 6 && <img className="image" src='/images/Rectangle 5.svg' alt="Event 7" />}
                    {index === 7 && <img className="image" src='/images/Rectangle 34.svg' alt="Event 8" />}
                    <div className="card-img-overlay">
                      <div className="d-flex items">
                          <div>  
                              <h5 className="me-2 makeagree">Make Agree </h5>
                              <p>  <span class="material-symbols-outlined loc mt-4">location_on</span> {event.cityName}</p>
                            
                          </div>
                          <div>
                            <p>{formatDate(event.date)}</p>
                            <p>{event.weather} | <span>{normalizeDistance(event.distanceKm)}</span></p>
                          </div>
                    
                      
                      </div>
                    </div>
                </div>
                
                ))}
            </Carousel>

    
        </div>
    );
}

export default Body;
