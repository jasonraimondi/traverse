import * as React from 'react';

import { FrequencyType } from '@/models/Frequency.type';

interface Props {
  frequency: FrequencyType;
  language: string;
}

export class TitleBar extends React.Component<Props> {
  public render() {
    return (
      <div className='title-bar'>
        <span className='selected-frequency'>{this.ucFirst(this.props.frequency)}</span>
        &nbsp;
        <span className='selected-language'>{this.filterLanguage(this.props.language)}</span>
      </div>
    );
  }

  private ucFirst(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
  }

  private filterLanguage(language: string): string {
    if (language === '') {
      return 'All Languages';
    }
    return language;
  }
}
