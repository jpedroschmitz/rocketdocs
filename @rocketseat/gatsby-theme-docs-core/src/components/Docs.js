/* eslint-disable react/prop-types */
import React from 'react';

export default ({ data }) => <pre>{JSON.stringify(data, null, 2)}</pre>;
