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


  constructor(private modalService: NgbModal, private api: ApiService) { }
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },

    );
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.api.getProductPage(2).subscribe((data) => {

      console.log(data)
      this.risks = data;
      this.productName = data.attributes.productName
      this.productHeader = data.attributes.productHeader
      this.productHeader = data.attributes.productHeader
      this.productBody1 = data.attributes?.productBody1
      this.productBody2 = data.attributes?.productBody2
      this.productBody3 = data.attributes?.productBody3
      this.productBody4 = data.attributes?.productBody4
      this.banners = data.attributes.product_banners.data
      this.products = data.attributes.products.data

      // this.getProductImg()
      console.log(this.banners)
    })

    this.api.getProductImage(2).subscribe((data) => {
      this.mainImage = data.attributes.productMainImage.data.attributes.url
    })

  }
  // getProductImg() {
  //   this.products.map((data: any) => {
  //     console.log(data)
  //     data.attributes.productImage.data.attributes.url = `http://localhost:1337${data.attributes.productImage.data.attributes.url}`
  //     return this.products
  //   })
  // }

  scrolll(data: any) {
    document.getElementById(data)?.scrollIntoView({ behavior: "smooth" });
  }


}
