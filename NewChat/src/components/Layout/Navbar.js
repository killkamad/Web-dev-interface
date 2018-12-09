import propTypes from 'prop-types';
import React from 'react';
import { Icon } from 'antd';
import { auth } from '../../firebase';

import './Navbar.css';


class Navbar extends React.Component {
  onClickLogout = () => {
    // FIREBASE
    auth.signOut()
  }

  render() {
    const { props } = this;

    return (
      <div className="navbar">

        <div className="nav-container">
          <div className="logo">
            <div>Супир Чат</div>
            <Icon type="message" />
          </div>

          {props.isAuthorized
               ? <a href="#" onClick={this.onClickLogout}>Выйти</a>
               : (
                 <div className="nav-links">
                   <a href="#" onClick={this.renderModal}>Войти</a>
                 </div>
               )
          }
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  auth: propTypes.bool.isRequired,
};

export default Navbar;
