import styled from '@emotion/styled';

export const Input = styled.input(
  `
    border-radius: 0;
    border: 1px solid transparent;
    padding: 0.6em;
    margin-right: 0.6em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background: none;
    transition: border-color 0.25s;
    &:not([disabled]):hover {
        border-bottom-color: #646cff;
    }
    &:focus, &:focus-visible {
      border-bottom-color: #fff;
      outline: none;
    }
  `
);

export const CheckBox = styled.input(
  `
    -webkit-appearance: none;
    appearance: none;
    background-color: #242424;
    padding: 0.6em;
    margin: 0;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    color: currentColor;
    width: 1.15em;
    height: 1.15em;
    border: 0.15em solid currentColor;
    border-radius: 0.15em;
    transform: translateY(-0.075em);
    display: grid;
    place-content: center;
    &::before {
      content: "";
      width: 0.65em;
      height: 0.65em;
      clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);
      opacity: 0;
      transition: 120ms opacity ease-in-out;
      box-shadow: inset 1em 1em #646cff;
      background-color: CanvasText;
    }
    &:checked::before {
      opacity: 1;
    }
  `
);