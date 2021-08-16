import { useState } from "react";
import { Link } from "react-router-dom";
import "../custom.css";
export default function IsTriangle() {
  const optionList = ["first", "second", "third"];
  const [success, setSuccess] = useState(false);
  const [show, setShow] = useState(false);
  const handleCheck = (e) => {
    let myForm = document.getElementById("isTriangle");
    e.preventDefault();
    let sum = 0;
    optionList.forEach((num) => {
      let userValue = myForm.elements[num].value;
      sum += parseInt(userValue, 10);
    });
    setSuccess(sum === 180 ? true : false);
    setShow(true);
  };

  return (
    <div className="container container-center">
      <h3>Enter 3 angles to know if they could make a triangle</h3>
      <form id="isTriangle" className="section section-off-white">
        {optionList.map((num, key) => (
          <div key={key}>
            <label htmlFor="first">Enter {num} angle</label>
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
          {success
            ? "Yayy! It forms a triangle"
            : "No..It does not form a triangle"}
        </div>
      )}
      <Link to="/" className="link">
        <button className="link link-secondary">Go Back</button>
      </Link>
    </div>
  );
}
