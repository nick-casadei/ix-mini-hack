import styled from "styled-components";
import { asAnchor, ListItem, UnorderedList } from "govuk-react";
import React from "react";

const fontSizeNormal = "16px";
const fontSizeSmall = "14px";

const Footer = styled("div")`
  background-color: #dee0e2;
  bottom: 0px;
  color: #454a4c;
  border-top: 1px solid #a1acb2;
`;

const FooterBody = styled("div")`
  width: calc(100% - 30px);
  max-width: 960px;
  margin: auto;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;

  @media (min-width: 641px) {
    width: calc(100% - 60px);
    flex-direction: row;
    justify-content: space-between;
  }
`;

const FooterContent = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const TixnerFooter = () => (
  <Footer id="fsaFooter" role="contentinfo">
    <FooterBody>
      <div>
        <FooterContent />
      </div>
    </FooterBody>
  </Footer>
);

export default TixnerFooter;
