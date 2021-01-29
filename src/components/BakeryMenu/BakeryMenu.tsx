import React from "react";
import styled from "styled-components";
import { MenuContent } from "../../../types/menuContent";

interface BakeryMenuProps {
  menu: MenuContent;
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

const BakeryMenu = ({ menu, ...props }: BakeryMenuProps) => {
  const renderItems = (id: string) =>
    menu.items
      .filter((m) => m.fields.category.sys.id === id)
      .sort((a, b) => a.fields.price - b.fields.price)
      .map((m) => (
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
              font-size: 1rem;
            }
            .item_desc {
              font-size: 0.8rem;
              font-weight: 400;
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
        <ul>{renderItems("31ew4musUFvIQwGuUIzSqT")}</ul>
        <StyledSectionTitle>tea</StyledSectionTitle>
        <ul>{renderItems("6Prj3ThvNKHOog0QgKgJT1")}</ul>
        <StyledSectionTitle>soy milk</StyledSectionTitle>
        <ul>{renderItems("5Jq1WH2mW2hR8Mi8sTipoN")}</ul>
        <StyledSectionTitle>non-alcoholic</StyledSectionTitle>
        <ul>{renderItems("fPpaUAEwuMMVAKVYhB87T")}</ul>
        <StyledSectionTitle>beer</StyledSectionTitle>
        <ul>{renderItems("50Bp6zRhXoOq7VSiTdPK6D")}</ul>
        <StyledSectionTitle>wine</StyledSectionTitle>
        <ul>{renderItems("15tfKdhSoLmx6rlkMVi2TH")}</ul>
      </section>
      <section>
        <StyledSectionTitle>gāodiǎn (pastries) </StyledSectionTitle>
        <ul>{renderItems("53Rkquu36bGAmwXLD0u8R4")}</ul>
        <StyledSectionTitle>sānmíngzhì (sandwiches) </StyledSectionTitle>
        <ul>{renderItems("0QC1ImB9ci4w7oUG4XC35")}</ul>
        <StyledSectionTitle>burgers and sandos</StyledSectionTitle>
        <ul>{renderItems("76BKlNG3pAKhr16pGyn34j")}</ul>
        <StyledSectionTitle>
          xiǎochí (small bites) + sālā (salad)
        </StyledSectionTitle>
        <ul>{renderItems("76LH3xj7lRujiSttLngJvY")}</ul>
        <StyledSectionTitle>fried chicken</StyledSectionTitle>
        <ul>{renderItems("3sFtSsq8TFogydZmEqCxfP")}</ul>
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
