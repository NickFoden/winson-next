import React from "react";
import { StyledBurger } from "./Burger.styled";

const Burger = ({ open = false, setOpen, ...props }) => {
  const isExpanded = open ? true : false;

  return (
    <div className="container">
      <StyledBurger
        aria-label="Toggle menu"
        aria-expanded={isExpanded}
        open={open}
        onClick={() => setOpen(!open)}
        {...props}
      >
        <span />
        <span />
        <span />
      </StyledBurger>
      <style jsx>{`
        .container {
          margin-right: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Burger;
