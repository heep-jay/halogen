import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-servicemodal',
  templateUrl: './servicemodal.component.html',
  styleUrls: ['./servicemodal.component.css']
})
export class ServicemodalComponent implements OnInit {
  @Input() productName!: string;
  formName: string = "";
  formEmail: any = ""
  formSubject: string = "";
  formMessage: string = "";
  formData: any;
  formFname: string = ""
  formLname: string = ""

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  }
  onSubmit() {

    this.formName = `${this.formFname} ${this.formLname}`
    this.formData = {
      "customerEmailInfo": {
        "name": this.formName,
        "customerEmail": [
          this.formEmail
        ],
        "subject": this.productName
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
    this.formFname = ""
    this.formLname = ""
  }
}
