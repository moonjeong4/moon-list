import styled from 'styled-components';

const FileInput = styled.input.attrs({ type: 'file' })`
  /* font-size: 1.4rem; */
  border-radius: 5px;

  &::file-selector-button {
    font: inherit;
    font-weight: 500;
    padding: 0.5rem 0.5rem;
    margin-right: 1.2rem;
    border-radius: 5px;
    border: none;
    color: #eef2ff;
    background-color: #3b82f6;
    cursor: pointer;
    transition:
      color 0.2s,
      background-color 0.2s;

    &:hover {
      background-color: #1d4ed8;
    }
  }
`;

export default FileInput;
