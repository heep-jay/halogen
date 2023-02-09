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
  hash: any;
  // activeMenu: boolean = true;
  urls: any;
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
    console.log(url)

    // this.activeMenu = false
    window.location.href = url
    this.scroll()
  }
  scroll() {
    if (window.location.hash) {
      this.hash = window.location.hash;
      if (this.hash) {
        console.log(this.hash)
        document.getElementById(this.hash)?.scrollIntoView({ behavior: "smooth" });
      }
    }
  }
}



