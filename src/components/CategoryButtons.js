import React from 'react';
import { Grid, Button, Sticky } from 'semantic-ui-react';

const CategoryButtons = (props) => {

  return (
    <div id='category-buttons'>
      <Sticky>
        <Grid id='footer' centered columns={16}>
          <Grid.Column verticalAlign='middle' width={16}>
                <Button
                  className='button-class'
                  style={{ width: 300, height: 40 }}
                  onClick={props.getCategoryDeck}
                  id='ruby'
                >
                  Ruby
              </Button>
              <Button
                className='button-class'
                style={{ width: 300, height: 40 }}
                onClick={props.getCategoryDeck}
                id='javascript'
              >
                JavaScript
            </Button>
            <Button 
              className='button-class'
              style={{ width: 300, height: 40 }}
              onClick={props.getCategoryDeck}
              id='commands'
            >
              Git Commands
            </Button>
          </Grid.Column>
        </Grid>
      </Sticky>
    </div>
  )
}

export default CategoryButtons; 