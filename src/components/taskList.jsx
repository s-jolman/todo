import styled from '@emotion/styled';

export const TaskList = styled.ul(
  `
    padding: 0;
  `
);

export const TaskListItem = styled.li(
  `
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.6em;
    & > input[type="text"] {
      flex: 1 0 100%;
      margin-left: 0.6em;
    }
  `
);