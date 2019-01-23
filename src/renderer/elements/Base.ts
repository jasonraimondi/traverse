import styled from 'styled-components';

import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

export const Title = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: ${themeConfig.sizes.topbarHeight};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themeConfig.colors.white};
`;

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
