import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css']
})
export class PracticingDirectivesComponent implements OnInit {
  paragraphVisible = true;

  toogleClicks = [];

  constructor() {
  }

  ngOnInit() {
  }

  toggleParagraph() {
    this.paragraphVisible = !this.paragraphVisible;
    const d = new Date();
    const n = d.toString();
    this.toogleClicks.push({paragraphVisible: this.paragraphVisible, crtTime: n});
  }

  getBackground(index) {
    if (index >= 5) {
      return 'blue';
    }
  }

  getText(index) {
    if (index >= 5) {
      return 'white-color-text';
    }
  }
}
