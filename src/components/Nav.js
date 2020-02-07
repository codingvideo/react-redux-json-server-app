import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => (
  <div className="links">
    <Link className="link" to="/">All</Link>
    <Link className="link" to="/first">First</Link>
    <Link className="link" to="/last">Last</Link>
  </div>
);
