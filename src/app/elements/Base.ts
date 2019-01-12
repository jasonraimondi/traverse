import styled from 'styled-components';

import { themeConfig } from '@/infrastructure/styles/Theme';

export const UnstyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Button = styled.button`
`;

export const PillButton = styled.button`
  background-color: ${themeConfig.colors.white};
  border-radius: 999px;
  border: 2px solid ${themeConfig.colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${themeConfig.colors.black};
  &:active, &:hover, &.selected {
    outline: none;
    text-decoration: underline;
    color: ${themeConfig.colors['green-dark']};
  }
  &.disabled {
    border-color: ${themeConfig.colors['grey-lighter']};
    background-color: ${themeConfig.colors['grey-lighter']};
    color: ${themeConfig.colors['grey-dark']};
    text-decoration: none;
  }
`;
