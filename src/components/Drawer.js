import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonIcon from '@material-ui/icons/Person';
import Toolbar from '@material-ui/core/Toolbar';
import ExitToApp from '@material-ui/icons/ExitToApp';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { BrowserRouter as  Link } from 'react-router-dom';

const drawerWidth = 240;
// ----------------- datos de usuario
const usuario = {
  "nombre": "Juan",
  "apellido": "Romero",
  "correo": "juan.romero@correox.com"
}
// ----------------------------------------- estilos css para pagina
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));
// -------------------- Cerrar sesion
const logout = () => {
  localStorage.setItem('isLogginIn', 'false');
  localStorage.removeItem('isLogginIn');
  window.location.reload();

}
// ------------------  ventanas y diseño

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // ------------------------------- DRAWER --------------

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {[usuario.nombre + " " + usuario.apellido].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{<PersonIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
        <p>   {usuario.correo} </p>
      </List>
      <Divider />
    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      <Link to="/Login">
        <Button className="button"
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={() => logout()}
          startIcon={<ExitToApp />}
        >
          Log out
          </Button>
      </Link>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      {/*------------------ BASE CON CSS -----------*/}
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
            {/*--------------------- BARRA DE PRESENTACION IEIT LAB3------------------ */}
          </IconButton>
          <Typography variant="h6" noWrap>
            IETI LAB3
          </Typography>
        </Toolbar>
      </AppBar>
      {/*---------------------- DRAWER + CSSS +PARTE ENCABEZADO--------------------------------------*/}
      <nav className={classes.drawer} aria-label="mailbox folders">
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
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
      {/* <-------------------------- CARDS -------------------------------------------- */}

      <div className={classes.root2}>
      <br/><br/><br/><br/><br/>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Implement Login View
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              In progress - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Implement Login Controller
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Ready - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
        <Card className={classes.root2} >
          <CardContent>
            <Typography variant="h5" component="h5" gutterBottom>
              Facebook integration
              </Typography>
            <Typography variant="h6" component="h6" gutterBottom>
              Completed - 12-05-2019
              </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Juan Romero
              </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ResponsiveDrawer;