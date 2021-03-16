import React from "react";
import styled from "styled-components";
import { DinnerMenu } from "../../../types/dinnerMenu";
import { MenuItem } from "../../../types/menuItem";

interface RestMenuProps {
  menu: DinnerMenu;
}

export const StyledMenuItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin-top: 0.5rem;
  width: 300px;
`;

export const StyledSectionTitle = styled.h1`
  font-size: 1.25rem;
  font-weight: 700;
  margin: 1rem 0 0.5rem;
`;

const RestMenu = ({ menu, ...props }: RestMenuProps) => {
  const {
    baiju,
    canBottle,
    cocktails,
    dessert,
    drafts,
    grocery,
    largePlates,
    nonAlcoholic,
    sides,
    smallPlates,
    whiskey,
    wine,
  } = menu.fields;
  const renderItems = (food: MenuItem[]) =>
    food.map((m) => (
      <div key={m.sys.id}>
        <StyledMenuItem>
          <span className="item_title">
            {m.fields.name}{" "}
            <span className="item_desc">{m.fields.optionalDescription}</span>
          </span>
          <p className="price_span">
            {m.fields.price}
            {m.fields.priceHigh ? "/" + m.fields.priceHigh : ""}
          </p>
        </StyledMenuItem>
        {m.fields?.optionalAddOn && (
          <StyledMenuItem>
            <p className="add">{m.fields.optionalAddOn}</p>
            <p className="price_span add"> {m.fields?.optionalAddOnPrice}</p>
          </StyledMenuItem>
        )}
        <style jsx>{`
          .add {
            font-size: 0.8rem;
          }
          .add_on_price {
            margin-left: 2rem;
          }
          .column {
            display: flex;
            flex-direction: column;
          }
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
      </div>
    ));

  return (
    <div className="container">
      <section>
        <StyledSectionTitle>small plates</StyledSectionTitle>
        <ul>{renderItems(smallPlates)}</ul>
        <StyledSectionTitle>large plates</StyledSectionTitle>
        <ul>{renderItems(largePlates)}</ul>
        <StyledSectionTitle>sides</StyledSectionTitle>
        <ul>{renderItems(sides)}</ul>
        <StyledSectionTitle>dessert</StyledSectionTitle>
        <ul>{renderItems(dessert)}</ul>
        <StyledSectionTitle>can & bottle</StyledSectionTitle>
        <ul>{renderItems(canBottle)}</ul>
        <StyledSectionTitle>drafts</StyledSectionTitle>
        <ul>{renderItems(drafts)}</ul>
      </section>
      <section>
        <StyledSectionTitle>cocktails</StyledSectionTitle>
        <ul>{renderItems(cocktails)}</ul>
        <StyledSectionTitle>wine </StyledSectionTitle>
        <ul>{renderItems(wine)}</ul>
        <StyledSectionTitle>baiju</StyledSectionTitle>
        <ul>{renderItems(baiju)}</ul>
        <StyledSectionTitle>whiskey</StyledSectionTitle>
        <ul>{renderItems(whiskey)}</ul>
        <StyledSectionTitle>non-alcoholic</StyledSectionTitle>
        <ul>{renderItems(nonAlcoholic)}</ul>
        <StyledSectionTitle>grocery</StyledSectionTitle>
        <ul>{renderItems(grocery)}</ul>
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

export default RestMenu;
