import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';

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
  gallery: any;
  videos: any;
  galleryVideos: any
  link: any;



  constructor(private api: ApiService) { }

  ngOnInit(): void {

    this.api.getGalleryPhotos().subscribe((data: any) => {
      if (this.isGallery) {
        console.log(this.isGallery)
        this.gallery = data
        this.isGallery = true
        this.galleryImages = this.gallery
        console.log(this.galleryImages)
      }
      return this.galleryImages
    })
    window.scrollTo(0, 0);
    this.showGallery()

    // this.isGallery = true;
    // this.isVideos = false;
  }
  onSelected(value: string): void {
    this.selectedTeam = value;

    if (this.selectedTeam === "2023") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter((gal: any) => gal.attributes.year === "2023")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2023")
      }

    }
    else if (this.selectedTeam === "2022") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter((gal: any) => gal.attributes.year === "2022")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2022")
      }
    }
    else if (this.selectedTeam === "2021") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter((gal: any) => gal.attributes.year === "2021")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2021")
      }
    }
    else if (this.selectedTeam === "2020") {
      if (this.isGallery) {
        this.galleryImages = this.gallery.filter((gal: any) => gal.attributes.year === "2020")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2020")
      }
    }
    else if (this.selectedTeam === "2019") {
      if (this.isGallery) {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2019")
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos.filter((gal: any) => gal.attributes.year === "2019")
      }
    }
    else {
      if (this.isGallery) {
        this.galleryImages = this.gallery
        console.log(this.galleryImages)
      } else {
        this.galleryImages = this.videos
      }
    }

  }
  showGallery() {
    this.isGallery = true;
    this.isVideos = false
    this.link = 'photos';
    if (this.isGallery) {
      this.galleryImages = this.gallery
    } else null
  }
  showVideos(year: string) {
    this.isGallery = false;
    this.isVideos = true;
    this.link = 'videos';
    if (this.isVideos) {
      console.log(this.isVideos)
      this.api.getGalleryVideos().subscribe((data: any) => {
        this.videos = data
        this.galleryImages = this.videos
      })
    }
  }

}
