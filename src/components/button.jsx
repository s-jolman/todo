import styled from '@emotion/styled';

const colorVariantMap = {
  "primary": "#646cff",
  "secondary": "red",
}

export const Button = styled.button(
  `
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    transition: border-color 0.25s;
    cursor: default;
    &:not([disabled]) {
      cursor: pointer;
      &:hover {
        border-color: gray;
      }
    }
    &:focus, &:focus-visible {
      outline: 4px auto -webkit-focus-ring-color;
    }
    @media (prefers-color-scheme: light) {
      background-color: #f9f9f9;
    }
  `,
  ({ variant }) => variant
    ? ({
      "&:hover": {
        borderColor: colorVariantMap[variant],
      }
    })
    : undefined
);

const LinkButton = Button.withComponent('a')