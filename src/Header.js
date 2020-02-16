import React from 'react';

export const Header = () => {
  return (
    <div className="header">
      <a
        href="https://github.com/jpangelle/formik-demo"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="github logo"
          className="github"
          src="https://i.imgur.com/RtIBYaN.png"
        />
      </a>
      <a
        href="https://codesandbox.io/s/formik-demo-ws1fm"
        rel="noopener noreferrer"
        target="_blank"
      >
        <img
          alt="codesandbox logo"
          className="codesandbox"
          src="https://i.imgur.com/CwfgbS8.png"
        />
      </a>
    </div>
  );
};
