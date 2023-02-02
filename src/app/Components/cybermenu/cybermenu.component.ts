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
    console.log(data)
  }
  toPhy() {

    window.location.href = `https://halogenwebsite.vercel.app/other-security-solutions#phy`
  }
  toElem() {
    window.location.href = `https://halogenwebsite.vercel.app/other-security-solutions#elem`
  }
  toIdentitys() {
    window.location.href = `https://halogenwebsite.vercel.app/other-security-solutions#identity`
  }
}
