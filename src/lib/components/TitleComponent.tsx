import React from 'react';
import { Helmet } from 'react-helmet';

export interface ITitleComponentProps {
  title?: string;
}

const TitleComponent: React.FC<ITitleComponentProps> = ({ title }) => {
  const appTitle = 'Dokazovi'; // app title default prefix

  return (
    <Helmet>
      {/* add prefix if title passed or return only prefix
      e.g. Dokazovi | COVID-19 */}
      <title>{title ? `${appTitle} | ${title}` : appTitle}</title>
    </Helmet>
  );
};

export default TitleComponent;
