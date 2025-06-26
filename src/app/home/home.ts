import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { UrlService } from '../services/url-service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-home',
  imports: [CommonModule, FormsModule,HttpClientModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  longUrl: string = '';
  shortUrl: string = '';

  constructor(
    private urlService:UrlService) { }

  shortenUrl() {
    if (!this.longUrl.trim()) return;
    this.urlService.getShortenedUrl(this.longUrl).subscribe({
      next:(response) => {
        this.shortUrl=response;
      },
      error:(err) => {
        console.log(err);
      }
    })
  }

}
