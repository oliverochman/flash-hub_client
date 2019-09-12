import React from 'react';
import { Modal, Button, Container, Card, Grid, Label, Reveal } from 'semantic-ui-react';


const SavedFlashcards = (props) => {
    return (
      <>
      <Modal id='my-flashcards' centered={false} trigger={<Button id='my-flashcards-button'>
        My Flashcards
        </Button>}>

      <Container style={{ height: 600 }}>
      <Grid centered columns={2}>
        <Grid.Column width={11}>
        <Button>Red</Button>
        <Button>Red + Yellow</Button>
          <Reveal animated='fade' id='My-flashcard'>
            <Reveal.Content visible>
              <Card style={{ width: 580, height: 400 }}>
                <Grid.Column width={2}>
                  <Label ribbon as='a' color='olive' id='category_JavaScript' >
                    JavaScript
                  </Label>
                </Grid.Column>
                <Card.Header as="h1" className="ui orange header" id='my-question' style={{ marginTop: '5em' }} textAlign='center'>
                  My Question
                </Card.Header>
              </Card>
            </Reveal.Content>
            <Reveal.Content>
              <Card style={{ width: 580, height: 400 }}>
                <Grid.Column width={2}>
                  <Label ribbon as='a' color='olive' id='category_JavaScript'>
                    JavaScript
                  </Label>
                </Grid.Column>
                <Card.Header as="h3" className="ui black header" id='my-answer' style={{ marginTop: '9em', marginLeft: '1em', marginRight: '1em' }} textAlign='center'>
                  My Answer
                </Card.Header>
              </Card>
            </Reveal.Content>
          </Reveal>
        </Grid.Column>

        <Grid>
          <Button className='update-button' onClick={props.updateStatus} id='red' style={{ width: 191, height: 50 }}>
            Repeat again, please
          </Button>
          <Button className='update-button' onClick={props.updateStatus} id='yellow' style={{ width: 191, height: 50 }}>
            Still needs practice
          </Button>
          <Button className='update-button' onClick={props.updateStatus} id='green' style={{ width: 191, height: 50 }}>
            I got this now
          </Button>
        </Grid>
      </Grid>
          </Container>
      </Modal>
      </>
    )
}

export default SavedFlashcards;