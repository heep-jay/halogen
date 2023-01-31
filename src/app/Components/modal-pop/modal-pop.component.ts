import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-modal-pop',
  templateUrl: './modal-pop.component.html',
  styleUrls: ['./modal-pop.component.css']
})
export class ModalPopComponent implements OnInit {
  @Input() products: any;
  formName: string = "";
  formEmail: any = ""
  formSubject: string = "";
  formMessage: string = "";
  formData: any;
  selectedService = ""
  constructor(private api: ApiService) { }

  ngOnInit(): void {
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

  onSelectService(service: any) {
    this.selectedService = service
    this.formSubject = this.selectedService
  }
}
