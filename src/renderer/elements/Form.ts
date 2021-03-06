import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import styled from 'styled-components';

export const FormContainer = styled.div`
  margin-top: 0.5rem;
  border-radius: 3px;
  border: 2px solid ${themeConfig.colors.greyLighter};
  background-color: ${themeConfig.colors.greyLightest};
  padding: 0.35rem;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  margin: 7.5px 0 10px;
  font-size: 1rem;
  border: none;
  background: transparent;
  border-bottom: 1px solid ${themeConfig.colors.purple};
  &:hover, &:focus, &:selected {
    outline: 1px solid ${themeConfig.colors.purple};
  }
`;

export const Label = styled.label`
  display: block;
  font-size: 1rem;
  & small {
    margin-top: 3px;
    display: block;
    color: ${themeConfig.colors.greyDark};
  }
  & h4, p {
    margin-top: 0;
    margin-bottom: 0;
  }
`;

export const FormTitle = styled.h5`
  display: inline-block;
  margin: 0;
  margin-bottom: 0.5rem;
  &.selected {
    color: ${themeConfig.colors.greenDarker}
  }
`;

export const HollowButtonPrimary = styled.button`
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
