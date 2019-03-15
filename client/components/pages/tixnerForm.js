import React from "react";
import { Header, Button } from "govuk-react";
import InputField from "@govuk-react/input-field";
import ContentItem from "../molecules/ContentItem";
import FileUpload from "@govuk-react/file-upload";
import Radio from "@govuk-react/radio";
import LabelText from "@govuk-react/label-text";
import Checkbox from "@govuk-react/checkbox";
import { Link } from "react-router-dom";
import TixnerLayout from "./TixnerLayout";
import styled from "styled-components";

const WhiteBackground = styled("div")`
  background: white;
  padding: 30px;
  border-radius: 5px;
`;

const MatchingForm = () => {
  return (
    <TixnerLayout>
      <WhiteBackground>
        <Header level={1} size="LARGE">
          Matching Form
        </Header>
        <ContentItem.B_20_20 />
        <InputField name="group0">Enter your full name:</InputField>
        <ContentItem.B_20_20 />
        <InputField name="group1" hint={["For example, ‘iX'"]}>
          Enter your service line:
        </InputField>
        <ContentItem.B_45_30 />
        <div>
          <LabelText>Time at IBM:</LabelText>
          <ContentItem.B_20_20 />

          <Radio name="group1">Less than 3 months</Radio>
          <Radio name="group1">3 months to 1 year </Radio>
          <Radio name="group1">1 year to 3 years</Radio>
          <Radio name="group1">3 years to 5 years</Radio>
          <Radio name="group1">Too long</Radio>
        </div>
        <ContentItem.B_45_30 />
        <LabelText>Your Focus/Interest areas:</LabelText>
        <ContentItem.B_20_20 />
        <Checkbox>Front-End</Checkbox>
        <Checkbox>Back-End</Checkbox>
        <Checkbox>Full Stack</Checkbox>
        <Checkbox>DevOps</Checkbox>
        <Checkbox>Data Science</Checkbox>

        <ContentItem.B_45_30 />

        <FileUpload
          name="group1"
          acceptedFormats=".jpg, .png"
          hint={["This can be in either JPG or PNG format"]}
        >
          Upload a really really cool photo of yourself
        </FileUpload>
        <ContentItem.B_45_30 />
        <Link to="/matches">
          <Button type="begin">Submit</Button>
        </Link>
      </WhiteBackground>
    </TixnerLayout>
  );
};

export default MatchingForm;
