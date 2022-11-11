import React from "react";
import './FilterResult.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/image.png';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Box from '@mui/material/Box';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const FilterResult = () => {

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

        <div className="container">
        <h2>Resultat de recherche pour: "Canon 650-D"</h2>
        <div className="filter">
            <select name="" id="">
                <option value={0}>--- Catégories ---</option>
            </select>
            <select name="" id="">
                <option value={0}>--- Prix --- (fcfa)</option>
                <option>0 - 2500</option>
                <option>2501 - 5000</option>
                <option>5001 - 10000</option>
                <option>10001 - 20000</option>
                <option>10001 - 20000</option>
                <option>Plus de 20000</option>
            </select>
            

        </div>
        <div className="LatestOffers">
        <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt="Chaussure"
        />
        <CardContent>

        
          <strong >Canon 650-D</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
            Caméra 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          8000 fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          40000 fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>


        </div>
        </div>
     );
}
 
export default FilterResult;