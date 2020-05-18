import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

const Start = ({ data }) => {
  const { nodes } = data.allMdx;
  return (
    <>
      <Layout>
        <SEO title="Home" />
        <div className="is-grey is-purple-bg">
          <div className="row container-small pad-20-t pad-20-b">
            <div className="col-xs-12 col-md-6 pad-10-l">
              <h1 className="is-hero-menu margin-0 is-white">
                🍍 GATSBY PINEAPPLE
              </h1>
              <div className="border" />
              <h4 className="is-hero-sub-text is-white opacity-80">
                An MDX Boilerplate by SLD.
              </h4>
            </div>
          </div>
        </div>{" "}
        <div className="is-light-grey-bg">
          <div className="row container-small pad-10-t pad-10-b">
            <div className="col-xs-12 pad-10-l">
              <h4 className="is-hero-sub-text is-pink opacity-80">
                Click a presentation to begin.
              </h4>
            </div>
            {nodes.map((item) => {
              const { title, path, desc, location } = item.frontmatter;
              return (
                <div className="col-xs-12 col-md-6 col-lg-4 pad-10-l pad-10-r">
                  <Link to={path + "/slides/0"} className="link-reverse">
                    <h1>{title}</h1>
                    <h4>{desc}</h4>
                    <p className="opacity-50">{location}</p>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
      <footer className="is-white-bg is-grey margin-2 footer">
        Site made with{" "}
        <span role="img" aria-label="love">
          ❤️
        </span>{" "}
        by{" "}
        <a
          href="https://sld.codes"
          target="_blank"
          rel="noopener noreferrer"
          className="link"
        >
          sld.codes
        </a>
        <a
          className="link is-pink"
          href="https://www.buymeacoffee.com/lLj8yvRAk"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p>
            Buy me a coffee{" "}
            <span role="img" aria-label="coffee">
              ☕️
            </span>
            .
          </p>
        </a>
      </footer>
    </>
  );
};

export const query = graphql`
  {
    allMdx {
      nodes {
        frontmatter {
          path
          title
          desc
          location
        }
      }
    }
  }
`;

export default Start;
