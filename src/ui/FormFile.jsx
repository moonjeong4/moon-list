import styled from 'styled-components';

const StyledFormFile = styled.div`
  width: 21rem;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 0.5rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.2rem;
  color: #b91c1c;
`;

function FormRowFile({ label, error, children }) {
  return (
    <StyledFormFile>
      {label && <Label htmlFor={children.props.id}>{label}</Label>}
      {children}
      {error && <Error>{error}</Error>}
    </StyledFormFile>
  );
}

export default FormRowFile;
