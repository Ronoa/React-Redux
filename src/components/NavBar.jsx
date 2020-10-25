import React from 'react'
import { AppBar, Button, IconButton, makeStyles, Toolbar, Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
import DrawerCustom from './Drawer';
 
const useStyles = makeStyles(theme=>({
  offset:theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))
const NavBar = () =>{
    const classes = useStyles()

    const [openDrawer, setOpenDrawer] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        console.log("Jose: toggleDrawer -> toggleDrawer.........")
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setOpenDrawer(open);
      };


    return (
      <div className={classes.root}>
        <AppBar position="fixed" color="primary">
        <Toolbar>
          <IconButton onClick={ toggleDrawer(true) } edge="start" color="inherit" className={classes.menuButton} aria-label="menu">
           
          <MenuIcon  /> 
            
          
          </IconButton>
          <Typography variant="h6" className={classes.title}  color='secondary'>
            Listado de Pokemons
          </Typography>
          <Button color='inherit'> Login </Button>
        </Toolbar>
        </AppBar>
        {openDrawer && <DrawerCustom
        isOpenDrawer={openDrawer}
        toggleDrawer={toggleDrawer}
        />}
        <div className={classes.offset}></div>
      </div>
    )
}

export default NavBar