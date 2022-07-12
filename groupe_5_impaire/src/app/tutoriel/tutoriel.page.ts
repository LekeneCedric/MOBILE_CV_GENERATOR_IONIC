import { Component, OnInit } from '@angular/core';
import { DocumentViewer, DocumentViewerOptions } from '@awesome-cordova-plugins/document-viewer/ngx';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.page.html',
  styleUrls: ['./tutoriel.page.scss'],
})
export class TutorielPage implements OnInit {

  constructor(private document:DocumentViewer  ) { }
  
  ngOnInit() {
  }

}
