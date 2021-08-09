import React, { useRef } from "react";
import { Link } from "react-router-dom";

export default function FAQsection({ heading, content }) {
  var acc = useRef();
  var spanRef = useRef();
  const openIt = () => {
    if (acc.current.nextElementSibling.style.display === "block") {
      acc.current.nextElementSibling.style.display = "none";
      spanRef.current.style.fontSize = "50px";
      spanRef.current.style.paddingTop = "0";
      spanRef.current.textContent = "+";
    } else {
      acc.current.nextElementSibling.style.display = "block";
      spanRef.current.textContent = "X";
      spanRef.current.style.fontSize = "33px";
      spanRef.current.style.paddingTop = "12px";
    }
  };

  return (
    <section className="items">
      <Link ref={acc} to="#" onClick={openIt}>
        <h2>{heading}</h2>
        <span ref={spanRef} className="expand">
          +
        </span>
        <hr />
      </Link>
      <h4>{content}</h4>
    </section>
  );
}
