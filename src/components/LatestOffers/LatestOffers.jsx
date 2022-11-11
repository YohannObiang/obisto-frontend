import React from "react";
import './LatestOffers.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../assets/image.png';
import Divider from '@mui/material/Divider';
import { createTheme, ThemeProvider} from '@mui/material/styles';
import axios from 'axios';



const LatestOffers = ({Objets}) => {

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

    const lastoffers = [Objets[Objets.length-1],Objets[Objets.length-2],Objets[Objets.length-3],Objets[Objets.length-4],Objets[Objets.length-5],Objets[Objets.length-6],Objets[Objets.length-7],Objets[Objets.length-8]]
    console.log(lastoffers)

    const [categorie, setcategorie] = React.useState([]);

  React.useEffect(() => {
    getcategorie();
  }, []);

  const getcategorie = async () => {
    var response = await axios.get("http://localhost:3001/categories");
    setcategorie(response.data);

  };
    return ( 

        <div className="container">
        <h2>Dernières offres</h2>

        <div className="LatestOffers">
        
        {Objets.map((item) => {

const filteredstuffs=categorie.filter((element,index)=>{
  return element.id_Categorie === item.id_categorie });
                return(
          <ThemeProvider theme={theme} key={item.id_objet}>

        <Card sx={{ width: '92%', marginBottom: 5}}  key='' >
        <CardMedia
          component="img"
          height="150"
          image={image}
          alt=""
        />
        <CardContent>

        
          <strong >{item.objet}</strong><br />
          
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
          <Button size="medium" variant="contained" color='secondary'> <strong className='text'>Emprunter</strong></Button>
          <Button size="small" ><span className='text'>VOIR</span></Button>
        </CardActions>
          </Card>
          </ThemeProvider>
              )})}

          


        </div>
        </div>
     );
}
 
export default LatestOffers;