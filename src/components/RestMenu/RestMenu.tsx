import React from "react";
import styled from "styled-components";
import { MenuContent } from "../../../types/menuContent";

interface RestMenuProps {
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

const RestMenu = ({ menu, ...props }: RestMenuProps) => {
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
        <StyledSectionTitle>food</StyledSectionTitle>
        <ul>{renderItems("61P8WgXiX9V1lmt6FZRBFP")}</ul>
        <StyledSectionTitle>beer</StyledSectionTitle>
        <StyledSectionTitle>can & bottle</StyledSectionTitle>
        <ul>{renderItems("21V6JJFoWE25ESGNiqhQ4Q")}</ul>
        <StyledSectionTitle>drafts</StyledSectionTitle>
        <ul>{renderItems("6Y4PargCt5Ysv5bRk0m0J4")}</ul>
        <StyledSectionTitle>grocery</StyledSectionTitle>
        <ul>{renderItems("6I9iScWxpaKc1dStXblHjJ")}</ul>
      </section>
      <section>
        <StyledSectionTitle>cocktails</StyledSectionTitle>
        <ul>{renderItems("6WfZm0iNDjZ5U20XtiPjKz")}</ul>
        <StyledSectionTitle>wine </StyledSectionTitle>
        <ul>{renderItems("1WBvbRYMpbZWPogkXdRVKH")}</ul>
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
