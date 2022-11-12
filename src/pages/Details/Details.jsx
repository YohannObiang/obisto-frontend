import React from "react";
import './Details.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/Iphone X.jpg';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Caroussel from "../../components/Caroussel";
import Box from '@mui/material/Box';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Link } from "react-router-dom";




const Details = ({Borrowed}) => {

  const theme = createTheme({
    palette: {
      primary: {
  
        main: '#000',
  
      },
      secondary: {
  
        main: '#8AE0AA',
        
      },
    },
  });
  
    return ( 

        <div className="contain">
       


  
<div className='desktop'>
          <ThemeProvider theme={theme} >

        <Card sx={{ width: '72%', height:'580px', marginBottom: 5}}  key='' >
          {/* <Caroussel/> */}
          <div className="image">
                   <img src={image}  height='100%'alt="" />
 
          </div>
        <CardContent>

        
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          <Card sx={{ width: '20%', height:'580px', marginBottom: 5}}  key='' className="cardDetails">
     

        <CardContent>
        <h3>{Borrowed.prix_jour} fcfa /Jour</h3>
        <strong>{Borrowed.objet}</strong>
        <br /><br />
        <Divider/>
        <br />
        <span>Forfaits de location:</span><br />
        <span>{Borrowed.prix_jour} fcfa /Jour</span><br />
        <span>{Borrowed.prix_semaine} fcfa /Semaine</span><br /><br />
        <span>Etat: Excellent</span><br /><br />
        <div className="description">
        {Borrowed.description}
        </div>
                <Divider/>

        </CardContent>

        <CardActions className='centered'>
        <Link to="/Validation">
          <Button size="medium" variant="contained" color='secondary' sx={{marginBottom: 1, marginLeft:1}}> <strong className='text'>Emprunter</strong></Button>
        </Link>

        </CardActions>
          </Card>
          </ThemeProvider>
</div>
<div className='mobile'>     
       <ThemeProvider theme={theme} >

        <Card sx={{ width: '90%', height:'450px', marginBottom: 2}}  key='' >
          {/* <Caroussel/> */}
          <div className="image">
                   <img src={image}  height='100%'alt="" />
 
          </div>
        <CardContent>

        
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          <Card sx={{ width: '90%', height:'270px', marginBottom: 2}}  key='' >
        
        <CardContent>
        <h3>{Borrowed.prix_jour} fcfa /Jour</h3>
        <strong>{Borrowed.objet}</strong>
        <br /><br />
        <Divider/>
          <div className="etatproduit">
            <div>
        <span>Forfaits de location:</span><br />
        <span>{Borrowed.prix_jour} fcfa /Jour</span><br />
        <span>{Borrowed.prix_semaine} fcfa /Semaine</span><br />
            </div>
            
        <div>
                  <span>Etat: Excellent</span><br />

        </div>
          </div>
        
        <div className="description">
        {Borrowed.description}
        </div>
        
        </CardContent>
        <Divider/>
      <div className="centered">
        <CardActions>
        <Link to="/Validation">
          <Button size="medium" variant="contained" sx={{m:1}} color='secondary'> <strong className='text'>Emprunter</strong></Button>
          </Link>
        </CardActions></div>
          </Card>
          </ThemeProvider>
</div>

        
        </div>
     );
}
 
export default Details;