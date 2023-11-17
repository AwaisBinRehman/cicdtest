import { Component } from '@angular/core';

@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.scss']
})
export class ManagementComponent {
  teamMembers = [
    {
      imgSrc: '../../assets/images/icon-image/person.png',
      name: 'Bashir Ahmed',
      rank: 'CEO',
      twitter: 'javascript:void(0)', 
      linkedin: 'javascript:void(0)',
      website: 'javascript:void(0)', 
    },

    {
      imgSrc: '../../assets/images/icon-image/person.png',
      name: 'Ammar Bashir (Barrister)',
      rank: 'DIRECTOR',
      twitter: '#', 
      linkedin: '#',
      website: '#', 
    }

  ];
}
