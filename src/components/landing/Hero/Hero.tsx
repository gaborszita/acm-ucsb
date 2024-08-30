import { Grid, Typography, Button, Box, CardMedia } from "@mui/material";
import { ArrowRightAlt } from "@mui/icons-material";
import TypewriterText from "./TypewriterText";

const Hero = () => {
  return (
    <Box sx={{ padding: '5rem', position: 'relative' }}>
      <Grid container spacing={4} alignItems="center">

        <Grid item xs={12} md={6} sx={{ zIndex: 2 }}>

          <div className="flex flex-col min-h-64">
            <Typography variant="h2" sx={{ fontWeight: 'bold', color: '#222', paddingBottom: '10px' }}>
              UCSB's Premier <br/> Community of all things 
            </Typography>
            
            <TypewriterText />
            
          </div>


          {/* TODO: Improve Button Styling */}
          <Button
            variant="contained"
            sx={{ backgroundColor: '#D65A31', color: 'white', fontWeight: 'bold', borderRadius: '30px', padding: '0.5rem 2rem' }}
            endIcon={<ArrowRightAlt />}
          >
            Get Involved
          </Button>
        </Grid>

        <Grid item xs={12} md={6} sx={{ position: 'relative' }}>
          {/* Placeholder Image */}
          <Box
            sx={{
              textAlign: 'center',
              position: 'absolute',
              top: '-12rem', // Adjust to control vertical overlap
              left: '4rem', // Adjust to control horizontal overlap
              zIndex: 1,
            }}
          >
            <CardMedia
              component="img"
              src="/assets/HeroLogo.png"
              alt="Hero Image"
              sx={{
                width: '120%',
                maxWidth: '40rem',
                margin: '0 auto',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
