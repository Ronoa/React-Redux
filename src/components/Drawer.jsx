import React from 'react'
 
import { makeStyles, Drawer, List, ListItem, ListItemText } from '@material-ui/core';

const useStyles = makeStyles({
 
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  })

const DrawerCustom = ({isOpenDrawer, toggleDrawer}) =>{
    console.log("Jose: DrawerCustom -> toggleDrawer", toggleDrawer)
    const classes = useStyles()
  console.log('<DrawerCustom>')

  const _handleOpen = (ev) =>{
    console.log("Jose: _handleOpen -> ev", ev)
    console.log('asdasda')
    toggleDrawer(false)(ev)
  }

    return (
      <div >
        <Drawer anchor={'left'} open={isOpenDrawer} onClose={_handleOpen}>
          <List className={classes.list}>
            <ListItem>
              <ListItemText primary={'text'} />
            </ListItem> 
          </List>
        </Drawer>
      </div>
    )
}

export default DrawerCustom