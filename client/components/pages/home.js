import { ContentGroup } from "../atoms";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Button } from "govuk-react";
import TixnerLayout from "./TixnerLayout";

const StyledBackground = styled("div")`
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

const TextContainer = styled(TixnerLayout)`
  color: white;
`;

const Home = () => (
  <StyledBackground>
    <TextContainer>
      <h1>Welcome to Tixder</h1>

      <ContentGroup spacing="medium">
        <p>
          {`Here is an explanation of what this app is for.. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `}
        </p>
      </ContentGroup>

      <Link to="/sign-up">
        <Button type="begin">Start</Button>
      </Link>
    </TextContainer>
  </StyledBackground>
);

export default Home;
