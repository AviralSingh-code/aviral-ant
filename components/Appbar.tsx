import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const AppBarComponent = () => {
    return (
        <div>
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
               The Media Ant
            </Typography>
            <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
        </div>
    );
};

export default AppBarComponent;
