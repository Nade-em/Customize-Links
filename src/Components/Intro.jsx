import React, { useState } from "react";
import "./Signup.css";
import Profile from "./Profile";

function Intro() {
  const [pname, setName] = useState(null);
  const [img, setImg] = useState(null);
  const [bio, setbio] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  const signupStyle = {
    margin: "1rem 0",
    border: "1px solid white",
    width: "400px",
    height: "250px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    padding: "20px",
    background: "rgba(200, 200, 200, 0.3)",
    backdropFilter: "blur(2rem)",
  };

  const inpStyle = {
    width: "100%",
    padding: "8px",
    borderRadius: "8px",
    outline: "none",
    border: "1px solid gray",
  };

  return (
    <div style={signupStyle} className="animateBox">
      {showProfile ? (
        <Profile name={pname} imgurl={img} bio={bio} />
      ) : (
        <>
          <h2 style={{ borderBottom: "2px solid red", width: "50px" }}>Intro</h2>

          <input
            placeholder="name..."
            style={inpStyle}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            placeholder="image link"
            style={inpStyle}
            onChange={(e) => setImg(e.target.value)}
          />

          <input
            placeholder="bio"
            style={inpStyle}
            onChange={(e) => setbio(e.target.value)}
          />

          <button
            className="btn"
            onClick={() => {
              setShowProfile(true);
            }}
          >
            Submit
          </button>
        </>
      )}
    </div>
  );
}

export default Intro;
