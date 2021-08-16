import { useState } from "react";
import { Link } from "react-router-dom";
import "../custom.css";
export default function Hypotenuse() {
  const optionList = ["first", "second"];
  const [show, setShow] = useState(false);
  const [third, setThird] = useState("");
  const handleCheck = (e) => {
    e.preventDefault();
    let myForm = document.getElementById("isTriangle");
    let sum = 0;
    optionList.forEach((num) => {
      let userValue = myForm.elements[num].value;
      sum += parseInt(userValue, 10) ** 2;
    });
    setShow(true);
    setThird(Math.sqrt(sum).toFixed(2));
  };

  return (
    <div className="container container-center">
      <h3>
        Enter 2 sides of a right triangle to know the third one(hypotenuse)
      </h3>
      <form id="isTriangle" className="section section-off-white">
        {optionList.map((num, key) => (
          <div key={key}>
            <label htmlFor="first">Enter {num} side (in units)</label>
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
          The third side is: {third} units.
        </div>
      )}
      <Link to="/" className="link">
        <button className="link link-secondary">Go Back</button>
      </Link>
    </div>
  );
}
