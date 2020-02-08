import React from "react";
import { Link } from "gatsby";
import SEO from "../components/seo";

export default function lost() {
  return (
    <>
      <SEO title="404" />
      <div className="is-grey is-light-grey-bg pad-30-t pad-30-b margin-30-t margin-30-b">
        <div className="row container-small pad-20-t pad-20-b">
          <div className="col-xs-12 col-md-6 pad-10-l">
            <h1 className="is-hero-menu margin-0">Oops!</h1>
            <h4 className="is-hero-sub-text">Nothing here...</h4>
            <Link>
              <button className="btn margin-3-t">Take me home</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
