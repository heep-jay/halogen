import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})


export class GalleryComponent implements OnInit {
  galleryImages: any;
  selectedTeam = '';
  isGallery: boolean = true;
  isVideos: boolean = false;
  gallery = [{
    name: "gallery",
    year: "2023",
    type: "photo",
  }, {
    name: "gallery2",
    year: "2023",
    type: "photo",
  }, {
    name: "gallery3",
    year: "2023",
    type: "photo",
  }, {
    name: "gallery4",
    year: "2022",
    type: "photo",
  }, {
    name: "gallery5",
    year: "2022",
    type: "photo",
  }, {
    name: "gallery6",
    year: "2022",
    type: "photo",
  }, {
    name: "gallery7",
    year: "2021",
    type: "photo",
  }, {
    name: "gallery8",
    year: "2021",
    type: "photo",
  }, {
    name: "gallery10",
    year: "2021",
    type: "photo",
  },
  {
    name: "gallery10",
    year: "2023",
    type: "video",
  }, {
    name: "gallery5",
    year: "2023",
    type: "video",
  }, {
    name: "gallery2",
    year: "2023",
    type: "video",
  }, {
    name: "gallery4",
    year: "2022",
    type: "video",
  }, {
    name: "gallery7",
    year: "2022",
    type: "video",
  }, {
    name: "gallery6",
    year: "2022",
    type: "video",
  }, {
    name: "gallery",
    year: "2021",
    type: "video",
  }, {
    name: "gallery8",
    year: "2021",
    type: "video",
  }, {
    name: "gallery3",
    year: "2021",
    type: "video",
  },

  ]


  showGallery(year: string) {
    this.isGallery = true;
    this.isVideos = false
    if (this.isGallery) {
      this.galleryImages = this.gallery.filter(gal => gal.type === "photo")
    } else null
  }
  showVideos(year: string) {
    this.isGallery = false;
    this.isVideos = true;
    if (this.isVideos) {
      this.galleryImages = this.gallery.filter(gal => gal.type === "video")
    } else null

  }
  onSelected(value: string): void {
    this.selectedTeam = value;

    if (this.selectedTeam === "2023") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2023" && gal.type === "photo")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2023" && gal.type === "video")
      }

    }
    else if (this.selectedTeam === "2022") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2022" && gal.type === "photo")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2022" && gal.type === "video")
      }
    }
    else if (this.selectedTeam === "2021") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2021" && gal.type === "photo")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.gallery.filter(gal => gal.year === "2021" && gal.type === "video")
      }
    }
    else {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter(gal => gal.type === "photo")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.gallery.filter(gal => gal.type === "video")
      }
    }

  }
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
    if (this.isGallery) {
      this.galleryImages = this.gallery.filter(gal => gal.type === "photo")
    } else {
      this.galleryImages = this.gallery.filter(gal => gal.type === "video")
    }

    // this.isGallery = true;
    // this.isVideos = false;
  }

}
