import React from 'react';
import LogoGit from './LogoGit';


const Footer = () => {
  return ( 
    <>

  <footer className="page-footer  cyan darken-4">
    <div className="container">
            © {new Date().getFullYear()} Copyright Text
            <LogoGit />
        <a className="grey-text text-lighten-4 right" href="https://github.com/komisdaria/react-mini-shop">Create by Daria Komissarova</a>
    </div>
  </footer>
            
    </>
   );
}
 
export default Footer;