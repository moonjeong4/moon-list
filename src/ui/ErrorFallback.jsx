import styled from 'styled-components';
import Button from './Button';

const StyledErrorFallback = styled.main`
  height: 100vh;
  background-color: #082f49;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* Box */
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

  & p {
    font-family: 'Sono';
    margin-bottom: 3.2rem;
    color: #6b7280;
  }
`;

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <StyledErrorFallback>
      <Box>
        <h1 className="text-3xl font-semibold">Something went worng 🧐</h1>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </Box>
    </StyledErrorFallback>
  );
}

export default ErrorFallback;
