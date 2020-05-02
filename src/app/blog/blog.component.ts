import { Article } from './../interfaces';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  articles: Article[] = [
    {
      image: 'third-party-cookies.jpg',
      title: 'Third-party cookies, and why you should delete them',
      timeToRead: 'How-To · 3 min read',
      authorName: 'Paul Black',
      authorAvatar: 'male.jpeg',
      articleDate: 'Apr 30, 2020'
    },
    {
      image: 'Catfishing-Featured.jpg',
      title: 'What is catfishing and how do you spot it?',
      timeToRead: 'How-To · 5 min read',
      authorName: 'Anna Rasmussen',
      authorAvatar: 'female.png',
      articleDate: 'Apr 30, 2020'
    },
    {
      image: 'NordVPN-app-update-macos-1200x675.png',
      title: 'NordVPN for macOS: release notes',
      timeToRead: 'Service Updates · 4 min read',
      authorName: 'Elle Friberg',
      authorAvatar: 'female.png',
      articleDate: 'Apr 27, 2020'
    },
    {
      image: 'how-to-avoid-bandwidth-throttling-in-germany.jpg',
      title: 'What is bandwidth throttling and how to stop it',
      timeToRead: 'In Depth · 3 min read',
      authorName: 'Zen Bahar',
      authorAvatar: 'female.png',
      articleDate: 'Apr 23, 2020'
    },
    {
      image: 'what-is-email-spoofing.jpg',
      title: 'What is email spoofing and how to avoid it',
      timeToRead: 'In Depth · 3 min read',
      authorName: 'Paul Black',
      authorAvatar: 'male.jpeg',
      articleDate: 'Apr 23, 2020'
    },
    {
      image: 'NordVPN-app-update-windows-1200x675.png',
      title: 'NordVPN for Windows: release notes',
      timeToRead: 'Service Updates · 5 min read',
      authorName: 'Elle Friberg',
      authorAvatar: 'female.png',
      articleDate: 'Apr 22, 2020'
    },
    {
      image: 'NordVPN-app-update-iphone-1200x675.png',
      title: 'NordVPN for iOS: release notes',
      timeToRead: 'Service Updates · 4 min read',
      authorName: 'Elle Friberg',
      authorAvatar: 'female.png',
      articleDate: 'Apr 22, 2020'
    },
    {
      image: 'is-teamviewer-safe.jpg',
      title: 'Is Teamviewer safe?',
      timeToRead: 'In Depth · 3 min read',
      authorName: 'Paul Black',
      authorAvatar: 'male.jpeg',
      articleDate: 'Apr 21, 2020'
    },
    {
      image: 'NordVPN-app-update-Android-1200x675.png',
      title: 'NordVPN for Android: release notes',
      timeToRead: 'Service Updates · 4 min read',
      authorName: 'Elle Friberg',
      authorAvatar: 'female.png',
      articleDate: 'Apr 21, 2020'
    },
    {
      image: 'DNS-sspoofing-Featured.jpg',
      title: 'All you need to know about DNS spoofing',
      timeToRead: 'In Depth · 5 min read',
      authorName: 'Anna Rasmussen',
      authorAvatar: 'female.png',
      articleDate: 'Apr 20, 2020'
    }
  ];

  popularArticles: Article[] = [
    {
      image: 'nordlynx_speed-test-1200x675-1.jpg',
      title: 'A single speed test is fun — hundreds of them may actually be accurate',
      timeToRead: 'Service Updates · 5 min read',
      authorName: 'Vykintas Maknickas',
      authorAvatar: 'male.jpeg',
      articleDate: 'Apr 27, 2020'
    },
    {
      image: 'nordlynx_speed-1200x675-1.jpg',
      title: 'One very strong reason to be excited about NordLynx (TL;DR: It’s speed)',
      timeToRead: 'Service Updates · 5 min read',
      authorName: 'Vykintas Maknickas',
      authorAvatar: 'male.jpeg',
      articleDate: 'Apr 23, 2020'
    },
    {
      image: 'Build-in-security-as-you-go-featured.jpg',
      title: 'DevSecOps – 3 keys to a secure workflow',
      timeToRead: 'How-To · 4 min read',
      authorName: 'Zen Bahar',
      authorAvatar: 'female.png',
      articleDate: 'Apr 23, 2020'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
