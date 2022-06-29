import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Region.css";

const useIsMounted = () => {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, []);
  return isMounted;
};

function Region() {
  const [result, setResult] = React.useState({
    loading: true,
    data: [],
  });
  const isMounted = useIsMounted();

  const getTok = {
    headers: { Authorization: "token  " + localStorage.getItem("token") },
  };

  const params = useParams();
  let id = params.id;

  useEffect(() => {
    fetch(`https://discover-kenya.herokuapp.com/site/${id}`, getTok)
      .then((res) => res.json())
      .then((data) => {
        isMounted.current && setResult({ loading: false, data });
      });
    // eslint-disable-next-line
  }, [isMounted]);

  const navigate = useNavigate();
  function handleClick() {
    navigate("/search");
  }

  const [comments, setComments] = useState({
    added:""
  });


  function onComment(e) {
    e.preventDefault();
    fetch(`https://discover-kenya.herokuapp.com/addexperience/${id}`,{
      method: "POST",
      mode:'cors',
      headers:{
        "Content-Type":"application/json",
        "Authorization": "token  " + localStorage.getItem("token"),
        // getTok
      },
      body:JSON.stringify(comments)
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }
  // function onComment(e) {
  //   e.preventDefault();
  //   fetch(`https://discover-kenya.herokuapp.com/addexperience/${id}`,{
  //     getTok,
  //     method: "POST",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => console.log(data))
  //     .catch((error) => console.error(error));
  // }

  return (
    <div className="page">
      <div className="region-main">
        <h2>
          {result.data.title ? (
            <div>{result.data.title}</div>
          ) : (
            <div>loading...</div>
          )}
        </h2>
        <h4>Region: {result.data.region}</h4>
        <img
          src={result.data.image_url}
          alt={result.data.title}
          // style={{ height: "400px" }}
        />
        <br></br>
        <br></br>
        <button className="close-btn" onClick={handleClick}>
          CLOSE
        </button>
      </div>
      <div className="region-description">
        <p>
          <a
            href={`https://discover-kenya.herokuapp.com/map/${id}`}
            target="_blank"
            rel="noreferrer"
          >
            <FaMapMarkerAlt color={"red"} />
            View on Google Maps
          </a>{" "}
        </p>
        <h5>Nearby Town: {result.data.nearby_town}</h5>
        <h5
          style={{ lineHeight: "60px", fontSize: "16px" }}
          className="weather"
        >
          Current Weather:
          <br></br>
          <img
            src={result.data.weather_url}
            alt="weather symbol"
            className="weather-icon"
          />
          {result.data.weather_text}
        </h5>
        <h5 style={{ lineHeight: "20px" }}>
          Current Temperature: {result.data.degree_celcius}°
        </h5>
      </div>
      <div className="experience">
        <h5>People's Experiences</h5>
        <p>{result.data.experience}</p>
        <form onSubmit={onComment}>
          <textarea 
          className="comments" 
          placeholder="Add your Experience" 
          value={comments.added}
          onChange={e => setComments(e.target.value)}
          />
          <button className="exp-btn">SEND</button>
        </form>
      </div>
      {/* <button className="close-btn" onClick={handleClick}>CLOSE</button> */}
    </div>
  );
}
export default Region;
