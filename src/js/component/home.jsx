import React, { useState } from "react";

const Home = () => {
  const [selectedColor, setSelectedColor] = useState("red");

  // Creamos una funcion para cambiar el color cada vez que se pulse el botón.
  function cambiarColor() {
    const nextColor =
      selectedColor === "red"
        ? "green"
        : selectedColor === "green"
        ? "yellow"
        : "red";
    setSelectedColor(nextColor);
  }

  return (
    <>
      <div className="d-flex justify-content-center align-items-center">
        <div className="traffic-light">
          <div
            onClick={() => setSelectedColor("red")}
            className={"light red" + (selectedColor === "red" ? " glow" : "")}
          ></div>
          <div
            onClick={() => setSelectedColor("yellow")}
            className={
              "light yellow" + (selectedColor === "yellow" ? " glow" : "")
            }
          ></div>
          <div
            onClick={() => setSelectedColor("green")}
            className={
              "light green" + (selectedColor === "green" ? " glow" : "")
            }
          ></div>
        </div>
        <button className="btn btn-success ms-3" onClick={cambiarColor}>
          Change Light Color
        </button>
      </div>
    </>
  );
};

export default Home;
