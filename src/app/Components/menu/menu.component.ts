import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() menuR: any;
  @Input() menuL: any;
  constructor() { }

  ngOnInit(): void {
  }
  redirect(data: any) {
    console.log(data)
    window.location.href = data

    // document.getElementById(data)?.scrollIntoView({ behavior: "smooth" });

    // window.scrollTo()
  }
  scroll() {

  }
  toElem() {

  }
  toIdentitys() {

  }
}
