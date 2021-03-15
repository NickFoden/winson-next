import React from "react";
import styled from "styled-components";
import { MenuBakery } from "../../../types/bakeryMenu";
import { MenuItem } from "../../../types/menuItem";

interface BakeryMenuProps {
  menu: MenuBakery;
}

export const StyledMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 0.25rem;
  width: 300px;
`;

export const StyledSectionTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
`;

const BakeryMenu = ({ menu }: BakeryMenuProps) => {
  const { fields } = menu;
  const {
    beer,
    burgersAndSandos,
    cafe,
    friedChicken,
    nonAlcoholic,
    pastries,
    sandwiches,
    smallBites,
    soyMilk,
    tea,
    wine,
  } = fields;
  const renderItems = (food: MenuItem[]) =>
    food.map((m) => (
      <StyledMenuItem key={m.sys.id}>
        <span className="item_title">
          {m.fields.name}{" "}
          <span className="item_desc">{m.fields.optionalDescription}</span>
        </span>
        <p className="price_span">
          {m.fields.price}
          {m.fields.priceHigh ? "/" + m.fields.priceHigh : ""}
        </p>
        <style jsx>{`
          .item_title {
            display: flex;
            flex-direction: column;
            font-size: 1rem;
          }
          .item_desc {
            font-size: 0.8rem;
            font-weight: 400;
            line-height: 1.1;
            margin-top: 2px;
          }
          .price_span {
            min-width: 50px;
            font-weight: 500;
            text-align: right;
          }
        `}</style>
      </StyledMenuItem>
    ));

  return (
    <div className="container">
      <section>
        <StyledSectionTitle>café</StyledSectionTitle>
        <ul>{renderItems(cafe)}</ul>
        <StyledSectionTitle>tea</StyledSectionTitle>
        <ul>{renderItems(tea)}</ul>
        <StyledSectionTitle>soy milk</StyledSectionTitle>
        <ul>{renderItems(soyMilk)}</ul>
        <StyledSectionTitle>beer</StyledSectionTitle>
        <ul>{renderItems(beer)}</ul>
        <StyledSectionTitle>wine</StyledSectionTitle>
        <ul>{renderItems(wine)}</ul>
        <StyledSectionTitle>non-alcoholic</StyledSectionTitle>
        <ul>{renderItems(nonAlcoholic)}</ul>
      </section>
      <section>
        <StyledSectionTitle>gāodiǎn (pastries)</StyledSectionTitle>
        <ul>{renderItems(pastries)}</ul>
        <StyledSectionTitle>sānmíngzhì (sandwiches)</StyledSectionTitle>
        <ul>{renderItems(sandwiches)}</ul>
        <StyledSectionTitle>burgers and sandos</StyledSectionTitle>
        <ul>{renderItems(burgersAndSandos)}</ul>
        <StyledSectionTitle>
          xiǎochí (small bites) + sālā (salad)
        </StyledSectionTitle>
        <ul>{renderItems(smallBites)}</ul>
        <StyledSectionTitle>fried chicken</StyledSectionTitle>
        <ul>{renderItems(friedChicken)}</ul>
        <p className="diet">
          v = vegetarian vg = vegan gf = gluten-free * = can be made as
        </p>
        <p className="warning">
          please inform us if you have a food allergy. consuming raw or
          undercooked meats, poultry, seafood, shellfish, or eggs may increase
          your risk of foodborne illness
        </p>
      </section>
      <style jsx>{`
        section {
          display: flex;
          flex-direction: column;
          width: 300px;
        }
        .container {
          display: grid;
          grid-template-columns: 1fr;
          margin: 2rem auto;
          width: 300px;
        }
        .diet {
          font-size: 0.8rem;
          margin: 1rem 0 0 0;
        }
        .warning {
          font-size: 0.8rem;
          margin: 1rem 0 0 0;
        }

        @media only screen and (min-width: 900px) {
          section {
            width: 400px;
          }
          .container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            width: 875px;
          }
        }
      `}</style>
    </div>
  );
};

export default BakeryMenu;
