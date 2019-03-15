import React from "react";
import ThumbDownButton from "../atoms/ThumbDownButton";
import ThumbUpButton from "../atoms/ThumbUpButton";
import ProfileImage from "../atoms/ProfileImage";
import TixnerLayout from "./TixnerLayout";
import { Header } from "govuk-react";
import Table from "@govuk-react/table";
import { Link } from "react-router-dom";
import styled from "styled-components";

const WhiteBackground = styled("div")`
  background: white;
  padding: 30px;
  border-radius: 5px;
`;

const Matches = () => {
  return (
    <TixnerLayout>
      <WhiteBackground>
        <Header level={1} size="LARGE">
          Matches
        </Header>
        <Table caption="Profile:">
          <Table.Row>
            <Table.CellHeader>Full Name:</Table.CellHeader>
            <Table.Cell>Nick Casadei</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Service Line:</Table.CellHeader>
            <Table.Cell>iX</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Time at IBM:</Table.CellHeader>
            <Table.Cell>3 months to 1 year</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.CellHeader>Focus Area:</Table.CellHeader>
            <Table.Cell>Front-End</Table.Cell>
          </Table.Row>
        </Table>
        <ThumbDownButton />
        <Link to="/projects">
          <ThumbUpButton />
        </Link>
        <ProfileImage />
      </WhiteBackground>
    </TixnerLayout>
  );
};

export default Matches;
