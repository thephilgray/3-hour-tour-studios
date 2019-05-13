import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import logo from "../img/logo-red.svg";

const Wrapper = styled.div`
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 60em) {
    max-width: 50em;
  }
`;

const StyledHeader = styled.header``;

const StyledFooter = styled.footer`
  width: 100%;
  text-align: center;
`;

const StyledContact = styled.section`
  position: relative;
  text-align: center;
  width: 100%;

  h2 {
    margin-bottom: 0;
  }
  p {
    margin-top: 0;
  }
  @media screen and (min-width: 60em) {
    text-align: right;
  }
`;

export const IndexPageTemplate = ({ heading }) => (
  <Wrapper>
    <StyledHeader>
      <div style={{ textAlign: "center" }}>
        <Link to="/" title="Logo">
          <img
            src={logo}
            alt="3 Hour Tour Studios"
            style={{ minWidth: "300px", margin: "0 auto" }}
          />
        </Link>
      </div>
      <h1 className="tagline">{heading}</h1>
    </StyledHeader>
    <StyledContact>
      <h2>Reach out to us directly by email or phone</h2>
      <p>
        <a href="mailto:management@drumandguitarlessons.com">
          management@drumandguitarlessons.com
        </a>
        <br />
        (949) 510-DRUM
      </p>
    </StyledContact>
    <StyledFooter>
      <p>&copy; 2019 3 Hour Tour Studios</p>
    </StyledFooter>
  </Wrapper>
);

IndexPageTemplate.propTypes = {
  heading: PropTypes.string
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <IndexPageTemplate heading={frontmatter.heading} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object
    })
  })
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        heading
        subheading
        description
      }
    }
  }
`;
