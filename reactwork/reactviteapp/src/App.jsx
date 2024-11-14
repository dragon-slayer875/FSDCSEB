import React from "react";
import Student from "./Student";
function App() {
  const h1 = <h1>Hello World</h1>;
  const mystyle = {
    color: "red",
    backgroundColor: "yellow",
    display: "flex",
  };

  const studData = [
    {
      college: "ABES Engineering College",
      name: "Ankit",
      pic: (
        <img
          src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
          height={100}
          width={100}
        />
      ),
      branch: "CSE",
      roll: "787878",
      section: "B",
    },
    {
      college: "ABES Engineering College",
      name: "Ankit",
      pic: (
        <img
          src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
          height={100}
          width={100}
        />
      ),
      branch: "CSE",
      roll: "787878",
      section: "B",
    },
    {
      college: "ABES Engineering College",
      name: "Ankit",
      pic: (
        <img
          src="https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png"
          height={100}
          width={100}
        />
      ),
      branch: "CSE",
      roll: "787878",
      section: "B",
    },
  ];

  return (
    <div style={{ backgroundColor: "cyan" }}>
      {h1}

      <div style={mystyle}>ABES Engineering College</div>
      <div style={{ display: "flex" }}>
        {studData.map((item, index) => (
          <Student key={index} props={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
