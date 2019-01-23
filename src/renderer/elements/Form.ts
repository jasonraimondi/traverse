import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 0.5rem;
  border-radius: 3px;
  border: 2px solid ${themeConfig.colors['grey-lighter']};
  background-color: ${themeConfig.colors['grey-lightest']};
  padding: 0.35rem;
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
`;

export const FormTitle = styled.h5`
  display: inline-block;
  margin: 0;
  margin-bottom: 0.5rem;
  &.selected {
    color: ${themeConfig.colors['green-darker']}
  }
`;

export const Submit = styled.button`
  border-radius: 999px;
  font-size: 0.8rem;
  font-weight: 700;
  display: block;
  margin-top: 0.5rem;
  color: ${themeConfig.colors.purple};
  background-color: ${themeConfig.colors.white};
  border-color: ${themeConfig.colors.purple};
  &:active, &:hover, &.selected {
    text-decoration: none;
    outline: none;
  }
`;
