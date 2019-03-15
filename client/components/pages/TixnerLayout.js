import TixnerHeader from "./tixnerHeader";
import { GridRow, GridCol, Page } from "govuk-react";
import styled from "styled-components";
import React from "react";
import { MEDIA_QUERIES } from "@govuk-react/constants";

const StyledPage = styled("div")`
  background: #8a2387; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to right,
    #f27121,
    #e94057,
    #8a2387
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  height: 100vh;
`;
const GridRowZeroMargin = styled(GridRow)`
  margin: 0px;
`;
const GridColZeroPadding = styled(GridCol)`
  ${MEDIA_QUERIES.LARGESCREEN} {
    padding-right: 0px;
    padding-left: 0px;
  }
`;

const tixnerLayout = props => (
  <StyledPage>
    <Page header={<TixnerHeader {...props} />}>
      <GridRowZeroMargin>
        <GridColZeroPadding columnTwoThirds>
          {props.children}
        </GridColZeroPadding>
      </GridRowZeroMargin>
    </Page>
  </StyledPage>
);

export default tixnerLayout;
