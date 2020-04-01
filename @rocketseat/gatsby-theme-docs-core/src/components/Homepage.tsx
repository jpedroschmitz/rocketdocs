import React from 'react';

const Homepage: React.FC<{ data: any }> = ({ data }) => (
  <pre>{JSON.stringify(data, null, 2)}</pre>
);

export default Homepage;
