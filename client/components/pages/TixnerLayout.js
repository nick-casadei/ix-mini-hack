import TixnerHeader from "./tixnerHeader";
import { GridRow, GridCol, Page } from "govuk-react";
import styled from "styled-components";
import React from "react";
import { MEDIA_QUERIES } from "@govuk-react/constants";

const GridRowZeroMargin = styled(GridRow)`
  margin: 0px;
`;
const GridColZeroPadding = styled(GridCol)`
  ${MEDIA_QUERIES.LARGESCREEN} {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const TixnerLayout = props => (
  <Page header={<TixnerHeader {...props} />}>
    <GridRowZeroMargin>
      <GridColZeroPadding columnTwoThirds>{props.children}</GridColZeroPadding>
    </GridRowZeroMargin>
  </Page>
);

export default TixnerLayout;
