/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            github
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  return (
    <div className="bio">
      <StaticImage
        className="bio-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/eggngineer.png"
        width={90}
        height={90}
        quality={100}
        alt="Profile picture"
      />
      {author?.name && (
        <p>
          <strong>{author.name}</strong> {author?.summary || null}
          {` `}
          <br />
          <div class="wrap">
          <div>
          <a href={`https://twitter.com/${social?.twitter || ``}`}>
            <StaticImage
              className="bio-avatar"
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../images/twitter_logo.png"
              width={50}
              height={50}
              quality={100}
              alt="Profile picture"
            />
          </a>
          </div>
          <div>
          <a href={`https://github.com/${social?.github || ``}`}>
            <StaticImage
              className="bio-avatar"
              layout="constrained"
              formats={["auto", "webp", "avif"]}
              src="../images/github_logo.png"
              width={50}
              height={50}
              quality={100}
              alt="Profile picture"
            />
          </a>
          </div>
          </div>
        </p>
      )}
    </div>
  )
}

export default Bio
