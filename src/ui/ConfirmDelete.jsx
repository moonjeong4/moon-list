import styled from 'styled-components';
import Button from './Button';
import { useEnMode } from '../context/EnModeContext';

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
  color: #374151;
`;

function ConfirmDelete({ resourceName, onConfirm, disabled, onCloseModal }) {
  const { isEnMode } = useEnMode();
  return (
    <StyledConfirmDelete>
      <Heading>
        {isEnMode ? `Delete ${resourceName}` : `supprimer ${resourceName}`}
      </Heading>
      <p>
        {isEnMode
          ? `Are you sure you want to delete ${resourceName} permanently? This action cannot be undone.`
          : `Êtes-vous sûr de vouloir supprimer définitivement ${resourceName} ? Cette action ne peut pas être annulée.`}
      </p>

      <div>
        <Button
          variation="secondary"
          disabled={disabled}
          onClick={onCloseModal}
        >
          {isEnMode ? 'Cancel' : 'Non'}
        </Button>
        <Button
          variation="danger"
          disabled={disabled}
          onClick={() => {
            onConfirm();
            onCloseModal();
          }}
        >
          {isEnMode ? 'Delete' : 'supprimer'}
        </Button>
      </div>
    </StyledConfirmDelete>
  );
}

export default ConfirmDelete;
