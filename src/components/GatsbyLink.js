import * as React from "react";
import {Link} from 'gatsby';
import './GatsbyLink.scss';

const GatsbyLink = ({to, className, title}) => (
  <Link to={to} className={`link ${className}`}>{title}</Link>
)

export default GatsbyLink;
