import styled from 'styled-components';

import { useMoveBack } from '../hooks/useMoveBack';
import { useEnMode } from '../context/EnModeContext';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: #082f49;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: #fff;
  border: 1px solid #f3f4f6;
  border-radius: 7px;

  padding: 3rem;
  display: flex;
  flex-direction: column;
  text-align: center;

  & h1 {
    margin-bottom: 1.6rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();
  const { isEnMode } = useEnMode();

  return (
    <StyledPageNotFound>
      <Box>
        <header className="text-3xl font-semibold">
          {isEnMode
            ? 'The page you are looking for could not be found 😢'
            : 'La page que vous recherchez est introuvable. 😢'}
        </header>
        <button onClick={moveBack} size="large">
          &larr; {isEnMode ? 'Go back' : 'Retourner'}
        </button>
      </Box>
    </StyledPageNotFound>
  );
}

export default PageNotFound;
