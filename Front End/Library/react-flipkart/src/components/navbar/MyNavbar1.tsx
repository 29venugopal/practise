import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import { Link,useNavigate } from "react-router-dom";


export const MyNavbar1:React.FC=()=>{
     
  let navigate=useNavigate()
    return <>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

            < Link style={{ color: 'inherit', textDecoration:'none'}} to={"/project/home"}> MY FLIPKART </Link>
          </Typography>
             <Button variant="contained" color="error" >
              < Link style={{color: 'inherit', textDecoration: 'none'}} to={"/project/form"}>
                upload products
              </Link>
             </Button>
                   <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
    </>
}