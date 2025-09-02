import { Component, OnInit } from '@angular/core';
import { ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Gesture, GestureController, GestureDetail } from '@ionic/angular'; // اضافه کردن GestureDetail
@Component({
  selector: 'app-imageviewer',
  templateUrl: './imageviewer.page.html',
  styleUrls: ['./imageviewer.page.scss'],
})
export class ImageviewerPage implements OnInit {
  
  @ViewChild('zoomWrapper', { static: false }) zoomWrapper!: ElementRef;
  imageSrc: string = '';  
  images: string[] = [];
  pointName: string = '';
  fontSize = 16;
  scale = 1;
  translateX = 0;
  translateY = 0;
  fromPage: string = '/'; // پیش‌فرض

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gestureCtrl: GestureController
  ) {}

  ngOnInit() {
    console.log("ngOnInit ================ imageParam  ");
    this.route.paramMap.subscribe(params => {
      const imageParam = params.get('images');
      console.log("ngOnInit ================ imageParam  ",imageParam);
      if (imageParam) {
        this.imageSrc = decodeURIComponent(imageParam);
      }
    });
    
    this.route.queryParams.subscribe(q => {
      if (q['from']) {
        this.fromPage = q['from'];
      }
    });
  }

  ngAfterViewInit() {
    if (this.zoomWrapper) {
      const gesture = this.gestureCtrl.create({
        el: this.zoomWrapper.nativeElement,
        gestureName: 'pinch',
        onPinch: (ev: GestureDetail) => {
          // دسترسی به scale از event اصلی
          const pinchScale = (ev.event as any).scale || 1; // اگر scale مستقیماً در دسترس نیست
          this.scale = Math.max(0.5, Math.min(this.scale * pinchScale, 3));
        },
      });
      gesture.enable();
    }
  }

  goBack() {
    this.router.navigateByUrl(this.fromPage);
  }

  zoomIn() {
    this.scale = Math.min(this.scale + 0.2, 3);
  }

  zoomOut() {
    this.scale = Math.max(this.scale - 0.2, 0.5);
  }

  resetZoom() {
    this.scale = 1;
    this.translateX = 0;
    this.translateY = 0;
  }
}