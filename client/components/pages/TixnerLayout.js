import TixnerHeader from "./TixnerHeader";
import { GridRow, GridCol, Page } from "govuk-react";
import styled from "styled-components";
import React from "react";
import { MEDIA_QUERIES } from "@govuk-react/constants";
import TixnerFooter from "./TixnerFooter";

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
  <React.Fragment>
    <Page header={<TixnerHeader {...props} />}>
      <GridRowZeroMargin>
        <GridColZeroPadding columnTwoThirds>
          {props.children}
        </GridColZeroPadding>
      </GridRowZeroMargin>
    </Page>
    <TixnerFooter />
  </React.Fragment>
);

export default tixnerLayout;
