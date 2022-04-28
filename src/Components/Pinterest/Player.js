import React from 'react';
import { Player } from 'video-react';
import AFDJ from '../Assets/img/Linkedin-Card-1.jpg'
import {Container,Box} from "@material-ui/core";

export default props => {
  return (
      <>
      <Container className="inner-container">
          <Box mt={2} mb={9}>
    <Player
    width="70%"
      playsInline
      poster={AFDJ}
      src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
    />
    </Box>
    </Container>
    </>
  );
};