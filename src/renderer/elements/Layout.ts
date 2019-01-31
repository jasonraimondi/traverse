import { themeConfig } from '@/renderer/infrastructure/styles/Theme';
import styled from 'styled-components';

export const Main = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    "nav nav"
    "sidebar content";
  grid-template-columns: ${themeConfig.sizes.sidebarWidth}px 1fr;
  grid-template-rows: ${themeConfig.sizes.topnavHeight}px 1fr;
  &.no-sidebar {
    grid-template-areas:
      "nav"
      "content";
    grid-template-columns: 1fr;
  }
`;

export const MainTopbar = styled.nav`
  grid-area: nav;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${themeConfig.colors.black};
  background-color: ${themeConfig.colors.purple};
  & a:hover, button:hover {
    cursor: pointer;
  }
`;

export const MainContent = styled.div`
  grid-area: content;
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
  min-height: 0;
`;

export const MainSideNav = styled.div`
  grid-area: sidebar;
  min-height: 0;
  overflow-y: auto;
  border-right: 2px solid ${themeConfig.colors.black};
  word-wrap: break-word;
  display: flex;
  flex-direction: column;
`;
