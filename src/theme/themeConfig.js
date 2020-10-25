import { createMuiTheme } from '@material-ui/core/styles'
import { blue } from '@material-ui/core/colors'
 
const theme = createMuiTheme({
    palette:{
        primary:{
            light:blue[500],
            main:blue[600],
            dark:blue[800]
        }
    }
})

export default theme