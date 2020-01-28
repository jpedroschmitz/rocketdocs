/* eslint-disable react/prop-types */
import React from 'react';
import Docs from '../../../components/Docs';

export default function Homepage({ data, pageContext }) {
  return <Docs data={data} pageContext={pageContext} />;
}
