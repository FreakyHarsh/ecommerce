import React from "react";
import "@app/styles/index.scss";

interface IAppProps {
  Component: React.ElementType;
  pageProps: unknown;
}

const MyApp: React.FC<IAppProps> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

export default MyApp;
