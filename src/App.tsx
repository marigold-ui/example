import { useState } from 'react';
import { useWindowSize } from 'react-use';
import Confetti from 'react-confetti';
import { Transition } from 'transition-hook';
import { Button, Box } from '@marigold/components';
import { Center } from './Center';

export const App = () => {
  const [show, setShow] = useState(false);
  const { width, height } = useWindowSize();

  return (
    <>
      <Center>
        <Button onClick={() => setShow(!show)}>Let it rain!</Button>
      </Center>
      {/*
      // @ts-ignore */}
      <Transition state={show} timeout={300}>
        {(stage, shouldMount) =>
          shouldMount && (
            <Box
              css={{
                transition: '.3s',
                opacity: stage === 'enter' ? 1 : 0,
              }}
            >
              <Confetti width={width} height={height} />
            </Box>
          )
        }
      </Transition>
    </>
  );
};

export default App;
