import { Component } from '@angular/core';

@Component({
  selector: 'app-safety-standard',
  templateUrl: './safety-standard.component.html',
  styleUrls: ['./safety-standard.component.scss']
})
export class SafetyStandardComponent {

 
  safetyPoints = [
    {
      title: 'Fire Water Spray System & ',
      images: [
        '../../assets/images/safety-standards/s2.jpg',
        '../../assets/images/safety-standards/s3.jpg'

      ],
      description: 'Our state-of-the-art fire water spray system is a crucial component in our safety infrastructure. This system is designed for rapid detection and suppression of potential fires, enhancing overall safety. It utilizes advanced technology to ensure quick and effective response in case of emergencies'
    },
   
    {
      title: 'Storage Tanks',
      images: [
        '../../assets/images/safety-standards/s1.jpg',
        '../../assets/images/safety-standards/s6.jpg'
      ],
      description: 'Our storage tanks comply with rigorous safety standards, providing a secure and efficient solution for LPG storage.'
    },
    {
      title: 'Cylinder Filling Shed',
      images: [
        '../../assets/images/safety-standards/s5.jpg',
        '../../assets/images/safety-standards/s4.jpg'
      ],
      description: 'The cylinder filling shed is equipped with advanced technology to ensure precise and safe filling operations for LPG cylinders.'
    },
    {
      title: 'Fire Fighting Drills',
      images: [
        '../../assets/images/safety-standards/s2.jpg'
      ],
      description: 'Regular fire-fighting drills are conducted, fostering a culture of preparedness and ensuring quick and effective responses in case of emergencies.'
    },
    {
      title: 'Bowser Decanting Point',
      images: [
        '../../assets/images/safety-standards/s5.jpg',
        
      ],
      description: 'Our Bowser decanting point is designed with precision, adhering to safety standards for the secure transfer of LPG.'
    },
    {
      title: 'Water Storage Capacity',
      images: [
        '../../assets/images/safety-standards/s7.jpg'
      ],
      description: 'With a water storage capacity of 60,000 gallons and a flow rate of 500 GPM for at least 200 hours, we meet and exceed NFPA-58 standards.'
    }
  ];

  slideConfig = {
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000
  };

  constructor() { }

  ngOnInit(): void {
    
  }
}
