import {ThemePalette} from '@angular/material/core';

export interface Part {
    name: string;
    selected: boolean;
    color: ThemePalette;
    subparts?: Part[];
    image : string
  }