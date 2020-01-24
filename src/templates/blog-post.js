import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { toJalaali } from "jalaali-js"

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  font-family: vazir;
  direction: rtl;
  padding: 1.45rem 1.0875rem;
`

const MarkedHeader = styled.h1`
  display: inline;
  border-radius: 1em 0 1em 0;
/*
  background-image: linear-gradient(
    -100deg,
    rgba(255, 250, 150, 0.15),
    rgba(255, 250, 150, 0.8) 100%,
    rgba(255, 250, 150, 0.25)
  );
*/
`

const HeaderDate = styled.h4`
  margin-top: 10px;
  color: #606060;
`

// STYLE THE TAGS INSIDE THE MARKDOWN HERE
const MarkdownContent = styled.div`
  a {
    text-decoration: none;
    position: relative;

/*
    background-image: linear-gradient(
      rgba(255, 250, 150, 0.8),
      rgba(255, 250, 150, 0.8)
    );
*/
    background-repeat: no-repeat;
    background-size: 100% 0.2em;
    background-position: 0 88%;
    transition: background-size 0.25s ease-in;
    &:hover {
      background-size: 100% 88%;
    }
  }
`

const RequiredTime = ({minutes}) => {
  const roundedMin = Math.ceil(minutes).toLocaleString('fa-IR');
    return <span> 
    <span> ~ </span>
    {roundedMin}
    <span> </span>
    دقیقه
    </span>
}


const JalaaliDate = ({date}) => {
	const ds = date.split('-');
	const jdate = toJalaali(Number(ds[0]), Number(ds[1]), Number(ds[2]));
	const year = jdate.jy.toLocaleString('fa-IR', {useGrouping: false});
	const month = jdate.jm.toLocaleString('fa-IR', {useGrouping: false});
	const day = jdate.jd.toLocaleString('fa-IR', {useGrouping: false});
	return <span>
		{year}/{month}/{day}
	</span>
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Content>
        <MarkedHeader>{post.frontmatter.title}</MarkedHeader>
        <HeaderDate>
          <JalaaliDate date={post.frontmatter.rawDate}/>
          <RequiredTime minutes={post.fields.readingTime.minutes}/>
	</HeaderDate>
        <MarkdownContent dangerouslySetInnerHTML={{ __html: post.html }} />
      </Content>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      excerpt(pruneLength: 160)
      frontmatter {
        date(formatString: "DD MMMM, YYYY")
        path
        rawDate: date
        title
      }
      fields {
        readingTime {
          text
          minutes
        }
      }
    }
  }
`
