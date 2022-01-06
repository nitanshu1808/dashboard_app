import PropTypes from 'prop-types';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleItemCard = ({ title, subtitle, link }) => {
  const navigateToLink = () => {
    window.location.href=link
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Team Member
        </Typography>
        <Typography variant="h5" component="div">
          { title }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { subtitle }
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={navigateToLink()}>View Member</Button>
      </CardActions>
    </Card>
  );
};

SingleItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
};

export default SingleItemCard;


