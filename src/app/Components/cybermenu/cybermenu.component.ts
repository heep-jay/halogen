import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cybermenu',
  templateUrl: './cybermenu.component.html',
  styleUrls: ['./cybermenu.component.css']
})
export class CybermenuComponent implements OnInit {
  @Input() cyberR: any;
  @Input() cyberL: any;
  constructor() { }


  ngOnInit(): void {
    console.log(this.cyberL)
  }

  redirect(data: any) {
    window.location.href = data
  }
  toElem() {
    window.location.href = `http://localhost:4200/other-security-solutions#elem`
  }
  toIdentitys() {
    window.location.href = `http://localhost:4200/other-security-solutions#identity`
  }
}
