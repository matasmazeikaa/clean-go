import * as React from 'react';
import {Link} from 'gatsby';
import CleanGoLogo from '../images/logo.svg';
import './Logo.scss';

const Logo = ({className}) => (
  <Link to='/' className={`logo ${className}`}>
    <CleanGoLogo/>
  </Link>
)

export default Logo;
