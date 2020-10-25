import React from 'react';
import { useDispatch, useSelector} from 'react-redux'
import { 
    Button, 
    List, 
    ListItemText
} from '@material-ui/core'; 
 

import { getPokemonsActions } from '../redux/pokeDucks'
import NavBar from './NavBar';
 
const Pokemons = () => {
    const dispatch = useDispatch()     

    const {array:pokemons, page} = useSelector(store=>store.pokemons) 

  return (
    <div >   
    <NavBar/>
    <Button color='primary'  variant='contained'  
        onClick={()=> dispatch(getPokemonsActions())}> GET POKEMONS </Button>
   
   
        <h3>{page}</h3>
        <List>
        {
          pokemons.map(item=>(
          
          <ListItemText key={item.name}>
            {item.name}
          </ListItemText>
            ))
          }
        </List>
         
    </div>
  );
}

export default Pokemons;
