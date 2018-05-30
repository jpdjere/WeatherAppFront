import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ForecastItem from './ForecastItem';



const styles = theme => ({
  card: {
    display: 'flex',
    margin: '2rem',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    width: '100% !important',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
    height: 151,
  },

});

const listForecastItemDay = (forecastData) => {
  return forecastData.map( (forecast, index) =>
    (
      <ForecastItem
        key={`${forecast.weekDay}${forecast.hour}`}
        weekDay={forecast.weekDay}
        hour={forecast.hour}
        data={forecast.data}>
      </ForecastItem>
    ));
};

const renderProgressData = () => {
  return 'cargando ForecastExtended';
}

const ForecastExtended = ({forecastData, city, classes}) => (
      <div>
        <Card className={classes.card}>
          <CardContent className={classes.content}>
            ForecastExtended {city}
            {forecastData?
              listForecastItemDay(forecastData):
              renderProgressData()
            }
          </CardContent>
        </Card>
      </div>

);

ForecastExtended.propTypes = {
  classes: PropTypes.object.isRequired,
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array,
}
export default withStyles(styles, { withTheme: true })(ForecastExtended);
