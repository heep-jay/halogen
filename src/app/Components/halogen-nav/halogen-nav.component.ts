import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-halogen-nav',
  templateUrl: './halogen-nav.component.html',
  styleUrls: ['./halogen-nav.component.css']
})
export class HalogenNavComponent implements OnInit {
  @Input() cybermenusL: any;
  @Input() outMenu: any;
  @Input() phyMenu: any;
  @Input() secTechMenu: any;
  @Input() secEduMenu: any;
  @Input() riskMenu: any;
  @Output() btnClick = new EventEmitter

  // activeMenu: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  toggleMenu() {
    this.btnClick.emit()
  }
  toElem() {
    window.location.href = 'http://localhost:4200/security-technologies#elem'
  }
  redirect(url: any) {
    this.btnClick.emit()
    // this.activeMenu = false
    window.location.href = url
  }


}
