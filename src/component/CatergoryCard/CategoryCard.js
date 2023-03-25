import React, {useState,useEffect} from "react";
import './CategoryCard.css'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Data from '../../Data';
import { Link } from "@mui/material";
import {  createTheme, ThemeProvider } from '@mui/material/styles';


export default function ImgMediaCard({title,description}) {

  const[Category,setCategory]=useState(Data.CardDetails)
  
  const theme = createTheme();

theme.typography.h5 = {
  fontSize: '1.2rem',
  '@media (max-width:600px)': {
    fontSize: '0.7rem',
  },
  '@media (min-width:601px)': {
    fontSize: '1.2rem',
  },
  '@media (min-width:1200px)': {
    fontSize: '1.2rem',
  },
  '@media (min-width:1000px)': {
    fontSize: '1rem',
  },
  // [theme.breakpoints.up('md')]: {
  //   fontSize: '1.4rem',
  // },
};


  return (
    
   
   <>
     <Card  sx={{minWidth:"25%",height:220,bgcolor: "#EBAE1F",padding:0.1,
      display: { xs: 'none',sm: 'none',md:'block', lg: 'block', xl: 'none', }}}>
      <CardMedia
        sx={{width:"100%" ,height: 220}}
        component="img"
        alt="alti"
        height="140"
        image={Category[0].img}
        onClick={() => { console.log('onClick'); }}
        
      />
      <CardContent sx={{bgcolor:"rgba(255, 255, 255, 0.2)" ,marginTop:-12,backdropFilter: "blur(0.1px)"}}>
        <Link to="" className="text-link" style={{cursor: "pointer"}}>
         <ThemeProvider theme={theme}>
           <Typography gutterBottom variant="h5" component="div" sx={{fontSize:20,textAlign:"center",color:"white",}}>
            {title}
           </Typography>
         </ThemeProvider>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",color:"white",fontSize:12}}>
         {description}
          </Typography> 
        </Link>
      </CardContent>
     </Card>
  
     <Card  sx={{minWidth:"50%",height:220,bgcolor: "#EBAE1F",padding:0.1,
      display: { xs: 'block',sm: 'block',md:'none', lg: 'none', xl: 'none' }}}>
      <CardMedia
        sx={{width:"100%" ,height: 220}}
        component="img"
        alt="alti"
        height="140"
        image={Category[0].img}
        
      />
      <CardContent sx={{bgcolor:"rgba(255, 255, 255, 0.2)" ,marginTop:-12,backdropFilter: "blur(0.1px)"}}>
        <Link to="" className="text-link" style={{cursor: "pointer"}}>
         <ThemeProvider theme={theme}>
           <Typography gutterBottom variant="h5" component="div" sx={{fontSize:20,textAlign:"center",color:"white",}}>
          ماشین الات بسته بندی
           </Typography>
         </ThemeProvider>
          <Typography variant="body2" color="text.secondary" sx={{textAlign:"center",color:"white",fontSize:12}}>
         Plastics,rubber...
          </Typography> 
        </Link>
      </CardContent>
     </Card>
   </>
     
  );
}