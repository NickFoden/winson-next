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
  font-weight: 600;
  margin: 1rem 0 0.5rem;
`;

const RestMenu = ({ menu, ...props }: RestMenuProps) => {
  const renderItems = (id: string) => {
    return menu.items
      .filter((m) => m.fields.category.sys.id === id)
      .sort((a, b) => a.fields.price - b.fields.price)
      .map((m) => (
        <StyledMenuItem>
          <span>{m.fields.name}</span>
          <span>{m.fields.price}</span>
        </StyledMenuItem>
      ));
  };
  return (
    <section className="container">
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
      <StyledSectionTitle>gāodiǎn (pastries) </StyledSectionTitle>
      <ul>{renderItems("53Rkquu36bGAmwXLD0u8R4")}</ul>
      <StyledSectionTitle>sānmíngzhì (sandwiches) </StyledSectionTitle>
      <ul>{renderItems("0QC1ImB9ci4w7oUG4XC35")}</ul>
      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          margin: 2rem auto;
          width: 300px;
        }
      `}</style>
    </section>
  );
};

export default RestMenu;
