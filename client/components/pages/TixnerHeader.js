import TopNav, { asNavLinkAnchor, asTopNavAnchor } from "@govuk-react/top-nav";
import Main from "@govuk-react/main";
import PhaseBanner from "@govuk-react/phase-banner";
import styled from "styled-components";
import { BREAKPOINTS } from "@govuk-react/constants";
import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

const MediaQueryLarge = `@media only screen and (min-width: ${
  BREAKPOINTS.LARGESCREEN
})`;

const AnchorTag = asTopNavAnchor("a");
const feedbackLink = "https://goo.gl/forms/WB5adxvWQdDIfVvs2";
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

const NavAnchor = asNavLinkAnchor("a");
const ServiceTitle = <NavLink to={`/`}>TiXner App</NavLink>;

const StyledHeader = styled("div")({});

const HeaderMain = styled(Main)({
  paddingTop: 0
});

const TixnerHeader = props => (
  <StyledHeader role="banner">
    {props.acceptAllCookies === "true" ||
    props.acceptAllCookies === "false" ? null : (
      <section aria-label="cookie banner" />
    )}

    <TixnerTopNav company={Company} serviceTitle={ServiceTitle} />
    <HeaderMain>
      <PhaseBanner level="beta">
        This is a new service -
        <AnchorTag
          id="feedbackLink"
          href={feedbackLink}
          target="_blank"
          aria-label="your feedback (opens in new window)"
        >
          your feedback
        </AnchorTag>{" "}
        will help us improve it
      </PhaseBanner>
    </HeaderMain>
  </StyledHeader>
);

export default TixnerHeader;
