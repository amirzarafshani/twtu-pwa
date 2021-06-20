import * as React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import Badge from '@material-ui/core/Badge';
import SwipeDrawer from './SwipeDrawer';
import { IoIosChatbubbles } from 'react-icons/io';
import logo from '../../../images/logo.png';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="sticky top-0 max-h-16 w-full bg-white mb-10">
        <AppBar
          position="sticky"
          color="inherit"
          className="appbar"
          elevation={3}>
          <Toolbar className="justify-between">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="menu-icon">
              <SwipeDrawer />
            </IconButton>

            <Link to="/" className="title">
              <img src={logo} alt="" className="h-12" />
            </Link>

            <IconButton aria-label="notifications">
              <Badge badgeContent={0} color="secondary">
                <IoIosChatbubbles className="text-custom-blue text-3xl" />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
