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
      <div
        style={{
          flexGrow: 1,
          maxHeight: 71,
          width: '100%',
          backgroundColor: '#fff',
        }}
      >
        <AppBar
          position="fixed"
          color="inherit"
          className="appbar"
          elevation={3}
        >
          <Toolbar className="justify-between">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              className="menu-icon"
            >
              <SwipeDrawer />
            </IconButton>

            <Link to="/dashboard" className="title">
              <img src={logo} alt="" className="h-12" />
            </Link>

            <IconButton aria-label="notifications" color="inherit">
              <Badge badgeContent={0} color="secondary">
                <IoIosChatbubbles color="#4DA6EA" fontSize="35px" />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
