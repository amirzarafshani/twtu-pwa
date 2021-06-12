import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import {
  Button,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  SwipeableDrawer,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';
import RTL from './RTL';
import { BiCaretLeftCircle } from 'react-icons/bi';
import logo from '../../../images/logo.png';
import withAuth from '../../redux/providers/withAuth';

const styles = {
  list: {
    width: 250,
  },
};

class SwipeDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      showContactUsModal: false,
      user: {},
      changePasswordDialogShow: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    const { user, changePasswordDialogShow } = this.state;

    return (
      <div>
        <Button onClick={this.toggleDrawer('open', true)}>
          <MenuIcon fontSize="large" />
        </Button>
        <RTL>
          <SwipeableDrawer
            className="swipe-drawer"
            anchor="left"
            disableDiscovery
            disableSwipeToOpen
            open={this.state.open}
            onClose={this.toggleDrawer('open', false)}
            onOpen={this.toggleDrawer('open', true)}
          >
            <Link to="/dashboard" className="px-4 py-2 ">
              <img src={logo} alt="" className="h-12" />
            </Link>

            <Divider />

            <div
              tabIndex={0}
              role="button"
              onClick={this.toggleDrawer('open', false)}
              onKeyDown={this.toggleDrawer('open', false)}
            >
              <div className={classes.list}>
                <List>
                  <Link to="/dashboard">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'پیش خوان'} />
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/profile">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'اطلاعات من'} />
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/documents">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'لیست مدارک شما'} />
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/myrulings">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'احکام من'} />
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/leagues">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'مسابقات من'} />
                    </ListItem>
                  </Link>

                  <Link to="/dashboard/payments">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'سوابق پرداخت'} />
                    </ListItem>
                  </Link>

                  <a
                    onClick={() =>
                      this.setState({ changePasswordDialogShow: true })
                    }
                  >
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'تغییر کلمه عبور'} />
                    </ListItem>
                  </a>
                </List>
                <List>
                  <a href="http://ikf.ir/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle size="1.5rem" />
                      </ListItemIcon>
                      <ListItemText primary={'سایت فدراسیون'} />
                    </ListItem>
                  </a>
                </List>
                <Divider />
                <List>
                  <a onClick={() => this.props.logout()}>
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-6 h-6 text-blue-900 fill-current" />
                      </ListItemIcon>
                      <ListItemText primary="خروج از سامانه" />
                    </ListItem>
                  </a>
                </List>

                {/* <ContactUsModal open={this.state.showContactUsModal} onClose={() => this.setState({ showContactUsModal: false })} /> */}
              </div>
            </div>
          </SwipeableDrawer>
        </RTL>
      </div>
    );
  }
}

export default withAuth(withStyles(styles)(SwipeDrawer));
