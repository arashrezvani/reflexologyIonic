import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nerves',
  templateUrl: './nerves.page.html',
  styleUrls: ['./nerves.page.scss'],
})
export class NervesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isModalOpen = false;

  // باز کردن Modal
  openImageModal() {
    this.isModalOpen = true;
  }

  // بستن Modal
  closeImageModal() {
    this.isModalOpen = false;
  }
}
