import React, { useRef, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Icon from '@material-ui/core/Icon';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import OrderInfo from 'components/MyAccountInfo/OrderInfo';
import ProfileInfo from 'components/MyAccountInfo/ProfileInfo';
import './style.scss';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const drawerWidth = 240;

const useStyles = makeStyles(theme => {
  return ({
    root: {
      display: 'flex',
      position: 'relative',
    },
    drawer: {
      position: 'relative',
      [theme.breakpoints.up('sm')]: {
        width: drawerWidth,
        flexShrink: 0,
      },
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up('sm')]: {
        display: 'none',
      },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
      position: 'absolute',
      width: drawerWidth,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      minHeight: '50vh',
    },
  });
});

const MyAccountInfo = props => {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [user, setUser] = useState();
  const containerRef = useRef();
  const history = useHistory();

  useEffect(() => {
    const fetchMemberData = async () => {
      const resp = await axios
        .get(`${process.env.API_URL}/members/data`, {
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            Authorization: localStorage.getItem('token'),
          },
        })
        .catch(err => {
          if (err.response.status === 401) {
            console.log('401');
            history.push('/login');
          }
        });
      setUser(resp.data.user);
      console.log(resp);
    };
    fetchMemberData();
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const logout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        <ListItem button key='order' onClick={() => setSelectedMenu(0)} style={{justifyContent: 'space-between'}}>
          <Icon>shopping_bag</Icon>
          <ListItemText primary='Order' />
        </ListItem>
        <ListItem button key='person' onClick={() => setSelectedMenu(1)}>
          <Icon>perm_identity</Icon>
          <ListItemText primary='Profile' />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button onClick={() => logout()}>
          <Icon>logout</Icon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root} reef={containerRef}>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="persistent"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        {selectedMenu === 0 && <OrderInfo user={user} />}
        {selectedMenu === 1 && <ProfileInfo user={user} />}
      </main>
    </div>
  );
};

export default MyAccountInfo;
