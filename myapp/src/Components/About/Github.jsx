import React from "react";
import "./github.css";
export const Github = () => {
  return (
    <div className="container">
      <div>
        <h1>Github Status</h1>
        <img
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="left"
          src="https://github-readme-streak-stats.herokuapp.com/?user=Priyanshu7250&theme=radical"
          alt="priyanshu"
          height="200px"
          width="45%"
          marginBottom="20px"
        />
        <img
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="center"
          src="https://github-readme-stats.vercel.app/api?username=Priyanshu7250&show_icons=true&theme=radical"
          height="200px"
          width="45%"
        />
      </div>
      <div
        className="cont_2"
        height="400px"
        width="100%"
        border="1px solid red"
      >
        <h1> GitHub Contribution Calendar</h1>

        <img
          style={{
            justifyContent: "center",
            paddingBottom: "10px",
            margin: "auto",
            marginBottom: "20px",
          }}
          align="center"
          src="https://ghchart.rshah.org/Priyanshu7250"
          alt="Priyanshu7250"
          height="300px"
          width="90%"
        />
      </div>
    </div>
  );
};
