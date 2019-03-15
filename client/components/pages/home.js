import { ContentGroup } from "../atoms";
import styled from "styled-components";

const TextContainer = styled("div")`
  color: white;
`;

const Home = () => (
  <TextContainer>
    <h1>Welcome to Tixder</h1>

    <ContentGroup spacing="small">
      <h2>Find more techie peeps!</h2>
      <p>
        {`Note that this text is completely irrelivant to what I am trying to show you.`}
      </p>
    </ContentGroup>
  </TextContainer>
);

export default Home;
