import styled, { css } from 'styled-components';

const Form = styled.form`
  ${(props) =>
    props.type === 'regular' &&
    css`
      padding: 0.4rem 1rem;
      /* Box */
      background-color: #fff;
      border: 1px solid #f3f4f6;
      border-radius: 7px;
      width: 18rem;
    `}

  ${(props) =>
    props.type === 'modal' &&
    css`
      width: 80rem;
    `}
    
  overflow: hidden;
  font-size: 1.2rem;
`;

Form.defaultProps = {
  type: 'regular',
};

export default Form;
