import React from 'react';

export default function Footer(props) {
  //
  return (
    <footer className="footer is-background-git">
      <div className="container">
        <div className="content has-text-centered">
          <p>
            <strong>GitFit</strong> by Sean Bray.
          </p>
          <a href="https://github.com/brootroot">
            <span className="icon has-text-black is-medium">
              <i className="fa fa-2x fa-github" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
