import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-banner-carousel',
  templateUrl: './banner-carousel.component.html',
  styleUrls: ['./banner-carousel.component.scss']
})
export class BannerCarouselComponent {

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.loadScripts()
    },200);
  }

  loadScripts() {
    const scriptUrls = [
      "assets/plugins/jQuery/jquery.min.js",
      "assets/plugins/colorbox/jquery.colorbox.js",
      "assets/scrips/script.js",
      "assets/plugins/shuffle/shuffle.min.js",
      "assets/plugins/bootstrap/bootstrap.min.js",
      "assets/plugins/slick/slick-animation.min.js",
      "assets/plugins/slick/slick.min.js",
    ];

    scriptUrls.forEach(url => {
      const existingScript = document.querySelector(`script[src="${url}"]`);

      if (existingScript) {
        existingScript.remove();
      }

      const newScript = document.createElement('script');
      newScript.src = url;
      newScript.defer = true;
      document.body.appendChild(newScript);
    });
  }
}