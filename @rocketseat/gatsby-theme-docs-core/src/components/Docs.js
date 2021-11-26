/* eslint-disable react/prop-types */
import React from 'react';

export default function Docspage({ data }) {
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
