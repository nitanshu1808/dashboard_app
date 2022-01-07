import PropTypes from 'prop-types';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const SingleItemCard = ({ title, subtitle, link }) => {
  const navigateToLink = () => {
    window.location.href=link
  }
  const titleVariant = () => {
    if (link === undefined) {
      return "h3";
    }
    return "h5";
  }
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant={titleVariant()} component="div">
          { title }
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          { subtitle }
        </Typography>
      </CardContent>
      { link !== undefined &&
        <CardActions>
          <Button size="small" onClick={navigateToLink()}>View Member</Button>
        </CardActions>
      }
    </Card>
  );
};

SingleItemCard.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  link: PropTypes.string
};

export default SingleItemCard;


