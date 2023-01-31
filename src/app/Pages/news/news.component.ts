import { Component, OnInit } from '@angular/core';

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


  related = "Related News";
  guides = "GUIDES & NEWS";
  boldText = "Read the latest articles";
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}

