import Axios from "axios"

// constantes
const dataInicial = {
    page: 0,
    array: []
}

//types
const GET_POKEMONS_FULLFIET = 'OBTENER_PROKEMONES_EXITO'

// reducer
export default function prokeReducer(state = dataInicial, actions){
    switch(actions.type){
        case GET_POKEMONS_FULLFIET:
            return { ...state, array:actions.payload.results, page:actions.payload.page }
        default:
            return state
    }
}

// acciones
export const getPokemonsActions = () => async (dispacth, getState) =>{
    try {
        const { page } = getState().pokemons
        const {data:{results}} = await Axios.get(`https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page}`)
         
        dispacth({
            type:GET_POKEMONS_FULLFIET,
            payload:{ 
                results,
                page: page+20
            }
        })
    } catch (error) {
    console.log("Jose: getPokemonsActions -> error", error)
        
    }
}
