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
import {Link } from "react-router-dom";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



const FilterResult = ({filteredstuffs, SearchTerm, setfilteredstuffs,setBorrowed}) => {

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

  const [Prix, setPrix] = React.useState(0);
  const Borrow=(id_objet)=>{
    const choosenOne=filteredstuffs.filter((element,index)=>{
      return element.id_objet === id_objet});
      setBorrowed(choosenOne[0])


  };
  const handleChangePrix = (event) => {
    
    if(event.target.value === 2){
    var filteredData = filteredstuffs.filter(item => item.prix_jour < 10000 && item.prix_jour > 5000);
    setfilteredstuffs(filteredData);
  }
    // if(Prix === 2){
    //   var filteredData = filteredstuffs.filter(item => item.prix >= 2501 && item.prix <= 5000);
    // setfilteredstuffs(filteredData);
    // }
  };



    return ( 

        <div className="container">
        <h2>Resultat de recherche pour: "{SearchTerm}"</h2>
        <div className="filter">
            <select name="" id="price" onChange={handleChangePrix}>
                <option value={0}>--- Prix --- (fcfa)</option>
                <option value={1}>0 - 2500</option>
                <option value={2}>2501 - 5000</option>
                <option value={3}>5001 - 10000</option>
                <option value={4}>10001 - 20000</option>
                <option value={5}>10001 - 20000</option>
                <option value={6}>Plus de 20000</option>
            </select>
            

        </div>
        <div className="LatestOffers">
        {filteredstuffs.map((item) => {


  // var cate = filteredstuffs
  
                return(
                  <div key={item.id_objet} className='object'>

          <ThemeProvider theme={theme}>

        <Card sx={{ width: '95%', marginBottom: 1}}  key='' >
        <div className="img"
        style={{backgroundImage:`URL(./images/${item.image1})`}}
        ></div>
        <CardContent>

        
          <strong  >{item.objet}</strong><br />
          
          <Typography className='text'  variant="text" color="text.secondary">
          {item.Categorie} 
          </Typography>

          <br />
          <Typography  variant="h7" className='text'>
          {item.prix_jour} fcfa /Jour
          </Typography> <br />
          <Typography  variant="h7" className='text'>
          {item.prix_semaine} fcfa /Semaine
          </Typography>
        </CardContent>
        <Divider/>

        <CardActions>
        <Link to="/Validation">
          <Button size="small" variant="contained" color='secondary' onClick={()=>Borrow(item.id_objet)} > <strong className='text'>Emprunter</strong></Button>
        </Link>
        <Link to="/Details">
          <Button size="small" onClick={()=>Borrow(item.id_objet)}><span className='text'>VOIR</span></Button>

        </Link>
        </CardActions>
          </Card>
          </ThemeProvider>
          </div>
              )})}

        
        </div>
        </div>
     );
}
 
export default FilterResult;