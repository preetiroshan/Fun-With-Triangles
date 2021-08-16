import { useState } from "react";
import { Link } from "react-router-dom";
import "../custom.css";
export default function Area() {
  const optionList = ["first", "second", "third"];
  const [show, setShow] = useState(false);
  const [area, setArea] = useState("");
  const handleCheck = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("isTriangle");
    let semiPerimeter = 0;
    let sum = 0;
    let sides = [];
    optionList.forEach((num) => {
      let userValue = parseInt(myForm.elements[num].value, 10);
      sum += userValue;
      sides.push(userValue);
    });
    semiPerimeter = sum / 2;
    let area = semiPerimeter;
    sides.forEach((side) => {
      area *= semiPerimeter - side;
    });
    setArea(Math.sqrt(area));
    setShow(true);
  };

  return (
    <div className="container container-center">
      <h3> Enter three sides of a triangle to know the area! </h3>
      <form id="isTriangle" className="section section-off-white">
        {optionList.map((num, key) => (
          <div key={key}>
            <label htmlFor="first">
              {" "}
              Enter {num}
              side( in units){" "}
            </label>
            <br />
            <input type="number" min="0" name={num} id={num} />
            <br />
          </div>
        ))}
        <button
          className="link link-primary check"
          type="submit"
          onClick={handleCheck}
        >
          Check
        </button>
      </form>
      {show && (
        <div className="container container center">
          {area > 0 ? (
            <p> {`The third side is: ${area} sq.units.`} </p>
          ) : (
            <p> {"Oops! No triangle can be formed by these sides😶"} </p>
          )}
        </div>
      )}
      <Link to="/" className="link">
        <button className="link link-secondary"> Go Back </button>{" "}
      </Link>
    </div>
  );
}
