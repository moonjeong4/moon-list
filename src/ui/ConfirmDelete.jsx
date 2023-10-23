import styled from 'styled-components';
import Button from './Button';

const StyledConfirmDelete = styled.div`
  width: 15rem;
  display: flex;
  flex-direction: column;

  & p {
    color: #6b7280;
    margin-bottom: 0.5rem;
  }

  & div {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  font-weight: 500;
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  return (
    <StyledConfirmDelete>
      <Heading>Delete {resourceName}</Heading>
      <p>
        Are you sure you want to delete {resourceName} permanently? This action
        cannot be undone.
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={() => {
            onConfirm();
            onCloseModal();
          }}
        >
          Delete
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
