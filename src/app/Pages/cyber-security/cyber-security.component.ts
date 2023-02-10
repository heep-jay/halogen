import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-cyber-security',
  templateUrl: './cyber-security.component.html',
  styleUrls: ['./cyber-security.component.css']
})
export class CyberSecurityComponent implements OnInit {
  closeResult: string = "";
  risks: any;
  prodP: any;
  productName: string = "";
  productHeader: string = "";
  mainImage: any;
  productBody1: any;
  productBody2: any;
  productBody3: any;
  productBody4: any;
  banners: any;
  products: any;
  pImage: any;
  services: string[] = [];
  hash: any;
  mm: any;
  constructor(private modalService: NgbModal, private api: ApiService) { }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }

  async ngOnInit() {
    // window.scrollTo(0, 0);
    this.api.getProductPage(2).subscribe(async (data) => {

      console.log(data)
      this.risks = data;
      this.productName = await data.attributes.productName;
      this.productHeader = data.attributes.productHeader;
      this.productHeader = data.attributes.productHeader;
      this.productBody1 = data.attributes?.productBody1;
      this.productBody2 = data.attributes?.productBody2;
      this.productBody3 = data.attributes?.productBody3;
      this.productBody4 = data.attributes?.productBody4;
      this.banners = data.attributes.product_banners.data;
      this.products = data.attributes.products.data;
      this.products.map((data: any) => {
        this.services.push(data.attributes.productName);
      });

      // this.getProductImg()
      // window.onload = function () {
      //   if (window.location.hash) {

      //     console.log(window.location.hash.slice(1))
      //     let hash = window.location.hash.slice(1)
      //     document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      //   }
      // }

    })

    this.api.getProductImage(2).subscribe((data) => {
      this.mainImage = data.attributes.productMainImage.data.attributes.url
    })

  }
  ngAfterViewInit() {
    console.log('abc working')
    if (window.location.hash) {
      this.api.getProductPage(2).subscribe(async (data) => {
        await data
        let hash = window.location.hash.slice(1)
        console.log(hash)
        document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
      })

    }


  }

  scrolll(data: any) {
    // console.log(data)
    // document.getElementById(data)?.scrollIntoView({ behavior: "smooth" });
  }


}
