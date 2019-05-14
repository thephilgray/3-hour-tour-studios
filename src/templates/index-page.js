import React from "react";
import PropTypes from "prop-types";
import { Link, graphql } from "gatsby";
import styled from "styled-components";
import Layout from "../components/Layout";
import logo from "../img/logo-red.svg";
import SEO from "../components/SEO";

const Wrapper = styled.div`
  /* margin: 0 auto;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 60em) {
    max-width: 50em;
  } */
  max-width: 60em;
  padding-top: 1em;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  min-height: calc(100vh - 1em);

  @media screen and (max-width: 30em) {
    
    h1 {
      font-size: 1.5rem;
    }
    h2{
      font-size: 1rem;
    }
    p{
      font-size: 1rem;
    }
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
  word-break: break-word;
  padding: 0 1em;

  h2 {
    margin: 0;
  }
  p {
    margin: 0;
  }
  @media screen and (min-width: 60em) {
    text-align: right;
  }
`;

export const IndexPageTemplate = ({ heading }) => (
  <Wrapper>
    <StyledHeader>
      <div style={{ textAlign: "center" }}>
        <Link
          to="/"
          title="Logo"
          style={{ display: "block", margin: "0 auto" }}
        >
          <img src={logo} style={{ width: "75%" }} alt="3 Hour Tour Studios" />
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
      <SEO title={frontmatter.title} />
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
      }
    }
  }
`;
