import TopNav, { asNavLinkAnchor, asTopNavAnchor } from "@govuk-react/top-nav";
import Main from "@govuk-react/main";
import styled from "styled-components";
import { BREAKPOINTS } from "@govuk-react/constants";
import React from "react";
import { Link } from "react-router-dom";

const MediaQueryLarge = `@media only screen and (min-width: ${
  BREAKPOINTS.LARGESCREEN
})`;

const AnchorTag = asTopNavAnchor("a");
const NavLink = asNavLinkAnchor(Link);

// center the service title text vertically when in desktop size windows
const TixnerTopNav = styled(TopNav)`
  ${MediaQueryLarge} {
    div:nth-child(2) {
      justify-content: center;
    }
  }
`;

const Company = (
  <AnchorTag
    href="https://www.ibm.com/services/ibmix/"
    target="_blank"
    aria-label="iX website (opens in new window)"
  >
    <TopNav.IconTitle>IBM iX</TopNav.IconTitle>
  </AnchorTag>
);

const ServiceTitle = <NavLink to={`/`}>Tixder App</NavLink>;

const HeaderMain = styled(Main)({
  paddingTop: 0
});

const TixnerHeader = props => (
  <div role="banner">
    <TixnerTopNav company={Company} serviceTitle={ServiceTitle} />
    <HeaderMain />
  </div>
);

export default TixnerHeader;
