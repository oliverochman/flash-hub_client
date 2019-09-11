import React from 'react';
import { Grid, Button, Sticky } from 'semantic-ui-react';

const CategoryButtons = (props) => {

  return (
    <div id='category-buttons'>
      <Sticky>
        <Grid id='footer' centered columns={20}>
          <Grid.Column verticalAlign='middle' width={20}>
                <Button style={{ width: 300, height: 40 }}
                  onClick={props.getCategoryDeck}
                  id='ruby'
                >
                  Ruby
              </Button>
                <Button style={{ width: 300, height: 40 }}
                  onClick={props.getCategoryDeck}
                  id='javascript'
                >
                  JavaScript
              </Button>
                <Button style={{ width: 300, height: 40 }}
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