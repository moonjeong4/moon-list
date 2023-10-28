import styled from 'styled-components';

import { useMoveBack } from '../hooks/useMoveBack';
import { useEnMode } from '../context/EnModeContext';

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
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
