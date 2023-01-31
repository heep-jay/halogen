import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isToggle: boolean = false
  isAboutToggle: boolean = false;
  isSolutionToggle: boolean = false;
  isCyberToggle: boolean = false;
  isMediaToggle: boolean = false;
  aboutUs = ""
  cyberSec = ""
  mediaCentre = ""
  enterHalo = ""
  otherSec = ""
  riskAdv = ""
  nav: any;
  aboutmenus: any;
  mediamenus: any;
  cybermenusL: any;
  cybermenusR: any;
  menusL: any;
  menusR: any;
  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.api.getNavBar().subscribe(data => {
      this.aboutUs = data.attributes.aboutUs
      this.riskAdv = data.attributes.riskAdv
      this.cyberSec = data.attributes.cyberSecurity
      this.mediaCentre = data.attributes.mediaCentre
      this.otherSec = data.attributes.otherSec
      this.enterHalo = data.attributes.enterHalo
      this.aboutmenus = data.attributes.abouts.data
      this.mediamenus = data.attributes.media_centres.data
      this.cybermenusL = data.attributes.cyber_menu_lefts.data
      this.cybermenusR = data.attributes.cyber_menu_rights.data
      this.menusL = data.attributes.menu_lefts.data
      this.menusR = data.attributes.menu_rights.data
      this.getMenuLinks()
    })

  }


  getMenuLinks() {
    this.cybermenusL.map((data: any) => {
      data.attributes.url = `http://localhost:4200/cyber-security#${data.attributes.url}`
      return this.cybermenusL;
    })
    this.cybermenusR.map((data: any) => {
      data.attributes.url = `http://localhost:4200/cyber-security#${data.attributes.url}`
      return this.cybermenusR;
    })
    this.menusL.map((data: any) => {
      data.attributes.url = `http://localhost:4200/other-security-solutions#${data.attributes.url}`
      console.log(data.attributes.url)
      return this.cybermenusL;
    })
    this.menusR.map((data: any) => {
      data.attributes.url = `http://localhost:4200/other-security-solutions#${data.attributes.url}`
      console.log(data.attributes.url)
      return this.cybermenusR;
    })
  }


  mediaToggle() {
    this.isMediaToggle = !this.isMediaToggle;
  }
  onToggle() {
    this.isToggle = !this.isToggle
  }
  aboutToggle() {
    this.isAboutToggle = !this.isAboutToggle
  }
  solutionToggle() {
    this.isSolutionToggle = !this.isSolutionToggle
  }
  cyberToggle() {
    this.isCyberToggle = !this.isCyberToggle
  }
  toCyber() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#cyber";
    this.isToggle = false;
    // document.getElementById("suv")?.scrollIntoView({ behavior: "smooth" });
  }
  toEnd() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#endpoint";
    this.isToggle = false;
  }
  toApp() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#app";
    this.isToggle = false;
  }
  toCloud() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#cloud";
    this.isToggle = false;
  }
  toEmail() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#email";
    this.isToggle = false;
  }
  toData() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#data";
    this.isToggle = false;
  }
  toIdentity() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#identity";
    this.isToggle = false;
  }
  toMobile() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#mobile";
    this.isToggle = false;
  }
  toNetwork() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#network";
    this.isToggle = false;
  }
  toBusiness() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#business";
    this.isToggle = false;
  }
  toWeb() {
    window.location.href = "https://halogen-group.vercel.app/cyber-security#critical";
    this.isToggle = false;
  }




  toSuv() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#suv";
    this.isToggle = false;
    // document.getElementById("suv")?.scrollIntoView({ behavior: "smooth" });
  }
  toElem() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#elem";
    this.isToggle = false;
  }
  toAccess() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#access";
    this.isToggle = false;
  }
  toIden() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#identity";
    this.isToggle = false;
  }
  toBus() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#business";
    this.isToggle = false;
  }
  toMobility() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#mobility";
    this.isToggle = false;
  }
  toEmerge() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#emerge";
    this.isToggle = false;
  }
  toMaritime() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#maritime";
    this.isToggle = false;
  }
  toFreight() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#freight";
    this.isToggle = false;
  }
  toExtraction() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#extraction";
    this.isToggle = false;
  }

  toCritical() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#critical";
    this.isToggle = false;
  }
  toHome() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#home";
    this.isToggle = false;
  }
  toIntelligence() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#intelligence";
    this.isToggle = false;
  }
  toTravel() {
    window.location.href = "https://halogen-group.vercel.app/other-security-solutions#travel";
    this.isToggle = false;
  }

}
