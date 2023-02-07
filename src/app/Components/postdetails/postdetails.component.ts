import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/Service/api.service';
@Component({
  selector: 'app-postdetails',
  templateUrl: './postdetails.component.html',
  styleUrls: ['./postdetails.component.css']
})
export class PostdetailsComponent implements OnInit {


  constructor(private route: ActivatedRoute, private api: ApiService) { }
  postId: string | number | null = null
  mainImage: string = '';
  content: any;
  author: string = ''
  title: string = ''
  createdAt: any;
  related = "Related News";

  ngOnInit(): void {
    this.postId = this.route.snapshot
      .paramMap.get('id');
    console.log(this.postId)

    this.api.getOneNewsPost(this.postId).subscribe((data) => {
      this.title = data.attributes.title;
      this.author = data.attributes.author.data.attributes.name
      this.content = data.attributes.content
      this.createdAt = data.attributes.createdAt
      this.mainImage = data.attributes.mainImage.data.attributes.url
    })
  }

}
