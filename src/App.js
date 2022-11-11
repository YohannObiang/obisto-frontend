import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import PhotoIcon from '@mui/icons-material/Photo';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import GamesIcon from '@mui/icons-material/Games';
import GarageIcon from '@mui/icons-material/Garage';
import DiscountIcon from '@mui/icons-material/Discount';
import logo from './assets/logo (2).png';
import './App.css';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import axios from 'axios';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import Home from './pages/Home';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Link } from "react-router-dom";
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

import FilterResult from './pages/FilterResult/FilterResult'
import Categorie from './pages/Categorie/Categorie';
import ConstructionIcon from '@mui/icons-material/Construction';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: `-${drawerWidth}px`,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `100%`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

export default function PersistentDrawerLeft() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  // Get all my stuffs

  const [Objets, setObjets] = useState([]);

  useEffect(() => {
    getObjets();
  }, []);

  const getObjets = async () => {
    var response = await axios.get("http://localhost:3001/objets");
    setObjets(response.data);

  };

  const [IdCategorie, setIdCategorie] = useState('');

  return (
    <Box sx={{ display: 'flex' }}>
              <BrowserRouter>

      <CssBaseline />
      <AppBar position="fixed" open={open} >
        <Toolbar className='Topbar'>
          <div className='Topbar'>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: 'none' }) }}
            >
              <MenuIcon sx={{color:'#262D44'}}/>
            </IconButton>

            <Link to="/">

            <img  src={logo} alt="" />
            </Link>
          </div>
          <IconButton
            color="inherit"
            sx={{width:'fit-content'}}
          >
            <DiscountIcon sx={{color:'#262D44'}}/>
          </IconButton>
        </Toolbar>
        
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon sx={{color:'#262D44'}}/> : <ChevronRightIcon  sx={{color:'#262D44'}}/>}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
       
            <Link to="/categorie" onClick={()=>{setIdCategorie('Sono')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <VolumeUpIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Sono
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Caméra')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <CameraAltIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Caméras
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Jeu vidéo')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <GamesIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Jeux vidéos
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Téléphone')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <SmartphoneIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Téléphones
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Outil')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <ConstructionIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Outils
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

            <Link to="/categorie" onClick={()=>{setIdCategorie('Machine')}}>

            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <PrecisionManufacturingIcon sx={{color:'#262D44'}}/>
                </ListItemIcon>
                <a>
                Machines
                </a>
              </ListItemButton>
            </ListItem>
            </Link>

        
        </List>
      </Drawer>
      <Main open={open} >
        <DrawerHeader />
      <Routes>  
        <Route path="/" element={<Home Objets = {Objets}/>} /> 
        <Route path="/recherche" element={<FilterResult/>} /> 
        <Route path="/categorie" element={<Categorie IdCategorie = {IdCategorie}/>} /> 
      </Routes>
        <Footer/>
      </Main>
      </BrowserRouter>

    </Box>
  );
}