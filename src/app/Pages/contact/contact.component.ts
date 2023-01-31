import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  selectedAdd = "";
  selectedService = ""
  name: string = ""
  phone: string = ""
  email: any;
  bgImage: any;
  services: any = ""
  add: string = ""
  locations: any;
  locationName: string = "";
  locationValue: string = ""
  locationSrc: string = "";
  src: string = ""
  formName: string = "";
  formEmail: any = ""
  formSubject: string = "";
  formMessage: string = "";
  formData: any;

  constructor(private api: ApiService) { }
  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.api.getContact().subscribe((data) => {
      this.name = data.attributes.name
      this.phone = data.attributes.phone
      this.add = data.attributes.address
      this.email = data.attributes.email
      // data.attributes.bgImage.data.attributes.url = `http:localhost:1337${data.attributes.bgImage.data.attributes.url}`
      this.bgImage = `http:localhost:1337${data.attributes.bgImage.data.attributes.url}`
      console.log(this.bgImage)
      this.locations = data.attributes.locations.data
    })
    this.api.getProducts().subscribe((data) => {
      this.services = data
    })
    this.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.5790581126607!2d3.3607143510254534!3d6.574688495221693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b939c0f889bdf%3A0x200104fe47b784aa!2s19b%20Mobolaji%20Bank%20Anthony%20Way%2C%20Onigbongbo%20101233%2C%20Lagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1674661675686!5m2!1sen!2sus"

  }

  onSelectService(service: any) {
    this.selectedService = service
    this.formSubject = this.selectedService
  }
  onSelected(address: string) {
    this.selectedAdd = address
    console.log(this.selectedAdd)
    this.locations.map((data: any) => {
      if (this.selectedAdd === data.attributes.locationVal) {
        console.log({ 'selAdd': this.selectedAdd }, { 'localVal': data.attributes.locationSrc })
        this.src = data.attributes.locationSrc
      }
    })
  }
  onSubmit() {
    this.formData = {
      "customerEmailInfo": {
        "name": this.formName,
        "customerEmail": [
          this.formEmail
        ],
        "subject": this.formSubject
      },
      "halogenEmailInfo": {
        "name": this.formName,
        "mobileNumber": "",
        "message": this.formMessage,
        "halogenEmail": [
          "jubriljammal69@gmail.com"
        ]
      }
    }
    console.log(this.formData)
    this.api.bookService(this.formData).subscribe()
    this.formMessage = ""
    this.formName = ""
    this.formSubject = ""
    this.formEmail = ""
  }
}




