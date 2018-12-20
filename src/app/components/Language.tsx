import { ILanguage } from '@/app/components/LanguageList';
import * as React from 'react';
import styled from 'styled-components';

const ListItem = styled.li`
  padding: 7.5px 0;
`;

const Label = styled.button`
  width: 100%;
  color: black;
  border: none;
  border-radius: 19px;
  &:active, &.selected {
    text-decoration: underline;
    outline: none;
  }
  &:hover {
    color: grey;
  }
`;

interface Props {
  language: ILanguage;
  isSelected: boolean;
  selectLanguage(): void;
}

export class Language extends React.Component<Props> {
  public render() {
    return <ListItem className='language-list-item'>
      <Label className={this.props.isSelected ? 'selected' : null}
             onClick={this.props.selectLanguage}>
        {this.props.language.title}
      </Label>
    </ListItem>;
  }
}
