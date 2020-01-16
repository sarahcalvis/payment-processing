import React from 'react';
import Text from '../components/Text.js';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/styles';
import styles from '../styles.js';

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
          <Text type="heading" text="PayPal Donate Button" />
          <Text type="subheading" text="Click the button to donate your desired amount of money to a PayPal account I made. This is not be a viable option for Giving Tree because we can neither see nor limit the amount the user chooses to donate. However, I need to look and see if PayPal has a button option that allows the site to specify the amount. If so, we can validate the amount and save it to the database before the user presses the button." />
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
          >
            <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
              <input type="hidden" name="cmd" value="_donations" />
              <input type="hidden" name="business" value="2GR89677RE6U2" />
              <input type="hidden" name="currency_code" value="USD" />
              <Button
                className={classes.heroButton}
                color="primary"
                variant="contained"
                size="large"
                align="center"
                aria-label="outlined primary button group"

                type="submit"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
                border="0" name="submit" title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button">
                Donate
              </Button>
              {/* <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" /> */}
              {/*<img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />*/}
            </form>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
