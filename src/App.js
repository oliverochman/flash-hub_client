import React from 'react';
import { Container } from 'semantic-ui-react';
import FlashcardDisplay from './components/FlashcardDisplay';

const App = () => {
  return (
    <>
      <Container>
        <h1>FlashHub</h1>
          <FlashcardDisplay />
      </Container>
    </>
  );
}

export default App;
