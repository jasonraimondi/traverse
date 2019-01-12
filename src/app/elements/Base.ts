import styled from 'styled-components';

import { theme } from '@/infrastructure/styles/Theme';

export const UnstyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Button = styled.button`
`;

export const PillButton = styled.button`
  background-color: ${theme.colors.white};
  border-radius: 999px;
  border: 2px solid ${theme.colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${theme.colors.black};
  &:active, &:hover, &.selected {
    outline: none;
    text-decoration: underline;
    color: ${theme.colors['green-dark']};
  }
  &.disabled {
    border-color: ${theme.colors['grey-lighter']};
    background-color: ${theme.colors['grey-lighter']};
    color: ${theme.colors['grey-dark']};
    text-decoration: none;
  }
`;
