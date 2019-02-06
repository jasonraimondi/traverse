import styled from 'styled-components';

import { themeConfig } from '@/renderer/infrastructure/styles/Theme';

export const Title = styled.div`
  width: 100%;
  height: ${themeConfig.sizes.topbarHeight}px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${themeConfig.colors.black};
`;

export const UnstyledList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding-left: 0;
`;

export const Anchor = styled.a`
  color: ${themeConfig.colors.purple};
  &:hover {
    text-direction: none;
    color: ${themeConfig.colors.purpleDark};
  }
`;

export const Button = styled.button`
`;

export const PillButton = styled.button`
  padding: 2px 8px;
  background-color: ${themeConfig.colors.white};
  border-radius: 999px;
  border: 2px solid ${themeConfig.colors.white};
  font-size: 0.8rem;
  font-weight: 700;
  color: ${themeConfig.colors.black};
  &:active, &:hover, &.selected {
    outline: none;
    border-color: ${themeConfig.colors.greenDark};
    color: ${themeConfig.colors.greenDark};
  }
  &.disabled {
    border-color: ${themeConfig.colors.greyLighter};
    background-color: ${themeConfig.colors.greyLighter};
    color: ${themeConfig.colors.greyDark};
    text-decoration: none;
  }
`;
