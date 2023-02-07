import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  posts = [{
    id: 1,
    type: "Blog Post",
    title: "Halogen partners FG on Cyber Security Training.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/1.png",
  },
  {
    id: 2,
    type: "Webinar",
    title: "Nigeria needs a national emergency response policy.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/2.png",
  },
  {
    id: 3,
    type: "Report",
    title: "Technology-driven Business Process is the new normal.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/3.png",
  },
  {
    id: 4,
    type: "Webinar",
    title: "Nigeria needs a national emergency response policy.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/2.png",
  },
  {
    id: 4,
    type: "Webinar",
    title: "Nigeria needs a national emergency response policy.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/2.png",
  },]


  blogs = [{
    id: 1,
    type: "Blog Post",
    title: "Halogen partners FG on Cyber Security Training.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/1.png",
  },
  {
    id: 2,
    type: "Webinar",
    title: "Nigeria needs a national emergency response policy.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/2.png",
  },
  {
    id: 3,
    type: "Report",
    title: "Technology-driven Business Process is the new normal.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/3.png",
  }, {
    id: 4,
    type: "Report",
    title: "Technology-driven Business Process is the new normal.",
    smallText: "Saviez-vous que 78% des Québécois consultent un site Internet avant de faire un achat ?",
    image: "/assets/images/3.png",
  },]

  headlinesPost: any;
  normalPosts: any;

  related = "Related News";
  guides = "GUIDES & NEWS";
  boldText = "Read the latest articles";
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.api.getNewsandEvents().subscribe((data: any) => {
      console.log(data)
      console.log('abc')
      this.headlinesPost = data.attributes.news_posts.data.filter((data: any) => data.attributes.headline === true)
      console.log(this.headlinesPost)

      this.normalPosts = data.attributes.news_posts.data.filter((data: any) => data.attributes.headline === false)
      console.log(this.normalPosts)
      return this.headlinesPost, this.normalPosts
    })


  }

}

