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
            <Link to="/" className="px-4 py-2">
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
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'اخبار'} />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'تابلوی اعلانات'} />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'پروفایل'} />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'پیام خصوصی-عمومی'} />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'مشخصات پرونده'} />
                    </ListItem>
                  </Link>

                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'حق عضویت'} />
                    </ListItem>
                  </Link>

                  {/* <a
                    onClick={() =>
                      this.setState({ changePasswordDialogShow: true })
                    }
                  > */}
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'سوابق پرداخت'} />
                    </ListItem>
                  </Link>
                  {/* </a> */}
                  <Link to="/">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'تماس با ما'} />
                    </ListItem>
                  </Link>
                  <Link to="/InsuranceForm">
                    <ListItem button>
                      <ListItemIcon>
                        <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                      </ListItemIcon>
                      <ListItemText primary={'فرم بیمه'} />
                    </ListItem>
                  </Link>
                </List>
                <Divider />
                <List>
                  <Link to="/Login">
                    <a onClick={() => this.props.logout()}>
                      <ListItem button>
                        <ListItemIcon className="w-5">
                          <BiCaretLeftCircle className="w-5 h-5 text-custom-blue" />
                        </ListItemIcon>
                        <ListItemText primary="خروج" />
                      </ListItem>
                    </a>
                  </Link>
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
