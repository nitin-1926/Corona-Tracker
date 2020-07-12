import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css';
import CountUp from 'react-countup';
import cx from 'classnames';

const Cards = ({ data: { confirmed,recovered,deaths,lastUpdate, },country}) => {
    let flag = 0;
    if(!confirmed){
        return 'Loading....';
    }
    if(country === ''){
        flag = 1;
    }
    return (
        <div className = {styles.container} >
            <Grid container spacing={3} justify='center'>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Infected</Typography>
                        <Typography variant='h5'>
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                duration={2.5}
                                separator=','
                        />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><font className={styles.analyticsText} style={{display: flag ? 'block' : 'none'}}><strong>Population infected</strong></font> <font className={styles.analyticsNumber} style={{display: flag ? 'block' : 'none'}}>{(confirmed.value*100/7600000000).toFixed(2)} %</font></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Recovered</Typography>
                        <Typography variant='h5'>
                        <CountUp 
                                start={0}
                                end={recovered.value}
                                duration={2.5}
                                separator=','
                        />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><font className={styles.analyticsText} style={{display: flag ? 'block' : 'none'}}><strong>Overall Recovery Rate</strong></font> <font className={styles.analyticsNumber} style={{display: flag ? 'block' : 'none'}}>{(recovered.value*100/confirmed.value).toFixed(2)} %</font></Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>Deaths</Typography>
                        <Typography variant='h5'>
                        <CountUp 
                                start={0}
                                end={deaths.value}
                                duration={2.5}
                                separator=','
                        />
                        </Typography>
                        <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2'><font className={styles.analyticsText} style={{display: flag ? 'block' : 'none'}}><strong>Overall Mortality Rate</strong></font> <font className={styles.analyticsNumber} style={{display: flag ? 'block' : 'none'}}>{(deaths.value*100/confirmed.value).toFixed(2)} %</font></Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
};

export default Cards;