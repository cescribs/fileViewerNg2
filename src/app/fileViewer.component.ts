import { Component } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

@Component({
  selector: 'my-fileviewer',
  templateUrl: './fileViewer.component.html'

})

export class FileViewerComponent{
  constructor(
    private route: ActivatedRoute,
    private location: Location
  ) {}
  goBack(): void {
    this.location.back();
  }
}
