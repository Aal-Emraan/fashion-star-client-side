import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AllInboxIcon from "@material-ui/icons/AllInbox";
import WatchIcon from "@material-ui/icons/Watch";
import VisibilityIcon from "@material-ui/icons/Visibility";
import EmojiNatureIcon from "@material-ui/icons/EmojiNature";
import { Link, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
import ViewListIcon from "@material-ui/icons/ViewList";
import { Button } from "@mui/material";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function Dashboard(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="min-h-screen bg-gray-900">
      <div className="text-white border-b border-red-700 hover:bg-red-900 py-10 flex justify-center duration-300">
        <Link to="/" className="text-3xl font-serif">
          FashionStar
        </Link>
      </div>
      <List className=" text-white">
        <ListItem button component={NavLink} to="/">
          <ListItemIcon style={{ color: "red" }}>
            <AllInboxIcon></AllInboxIcon>{" "}
          </ListItemIcon>
          <p className="font-mono text-md">Home</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard">
          <ListItemIcon style={{ color: "red" }}>
            <AllInboxIcon></AllInboxIcon>{" "}
          </ListItemIcon>
          <p className="font-mono text-md">All Products</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/allWatches">
          <ListItemIcon style={{ color: "red" }}>
            <WatchIcon></WatchIcon>{" "}
          </ListItemIcon>
          <p className="font-mono mb-3">Watches</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/almdlasses">
          <ListItemIcon style={{ color: "red" }}>
            <VisibilityIcon></VisibilityIcon>{" "}
          </ListItemIcon>
          <p className="font-mono mb-3">Glasses</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/allJewellers">
          <ListItemIcon style={{ color: "red" }}>
            <EmojiNatureIcon></EmojiNatureIcon>{" "}
          </ListItemIcon>
          <p className="font-mono mb-3">Jewelleries</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/allOrders">
          <ListItemIcon style={{ color: "red" }}>
            <ViewListIcon></ViewListIcon>{" "}
          </ListItemIcon>
          <p className="font-mono mb-3">Manage All Orders</p>
        </ListItem>
        <ListItem button component={NavLink} to="/dashboard/addproduct">
          <ListItemIcon style={{ color: "red" }}>
            <ViewListIcon></ViewListIcon>{" "}
          </ListItemIcon>
          <p className="font-mono mb-3">Add Product</p>
        </ListItem>
      </List>
      <Divider />
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar className="bg-white text-black shadow-md mb-4">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <div className="flex justify-between w-full">
            <Typography variant="h6" noWrap>
              Manage All Products And Orders
            </Typography>
            <Typography className="ml-auto">
              <Link to="/dashboard/addproduct">Add Product</Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === "rtl" ? "right" : "left"}
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
      <div className="bg-blue-800 min-h-screen">
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
