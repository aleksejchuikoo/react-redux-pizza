import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock({ margin }) {
  return (
    <ContentLoader
      style={margin && { marginRight: 0 }}
      speed={2}
      width={280}
      height={457}
      viewBox="0 0 280 457"
      backgroundColor="#f6e8b6"
      foregroundColor="#f7df88">
      <circle cx="140" cy="139" r="120" />
      <rect x="-1" y="285" rx="10" ry="10" width="280" height="26" />
      <rect x="0" y="323" rx="10" ry="10" width="280" height="84" />
      <rect x="0" y="420" rx="10" ry="10" width="103" height="31" />
      <rect x="141" y="414" rx="20" ry="20" width="140" height="39" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
