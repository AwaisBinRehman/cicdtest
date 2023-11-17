import { Component } from '@angular/core';

@Component({
  selector: 'app-distributors',
  templateUrl: './distributors.component.html',
  styleUrls: ['./distributors.component.scss']
})
export class DistributorsComponent {

  distributors =  [
    {
      serialNumber: 1,
      name: "Jafarshad Mehmood",
      address: "Donga Sayyid Elahi Bazar",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "Jafarshad Mehmood",
      mobileNumber: "0302-6151444",
    },
    {
      serialNumber: 2,
      name: "Ch. Waqas Proprietor Bismillah Traders",
      address: "Gujrat",
      city: "Gujrat",
      province: "Punjab",
      contactPerson: "Ch. Waqas",
      mobileNumber: "0300-6211866",
    },
    {
      serialNumber: 3,
      name: "Sultan",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "Sultan",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 4,
      name: "M. Aslam",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Aslam",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 5,
      name: "M. Naeem",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Naeem",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 6,
      name: "M. Irfan",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Irfan",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 7,
      name: "M. Imran",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Imran",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 8,
      name: "M. Usman",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Usman",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 9,
      name: "M. Ali",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Ali",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 10,
      name: "M. Ahsan",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Ahsan",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 11,
      name: "M. Bilal",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Bilal",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 12,
      name: "M. Rizwan",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Rizwan",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 13,
      name: "M. Arshad",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Arshad",
      mobileNumber: "0300-6277777",
    },
    {
      serialNumber: 14,
      name: "M. Shahid",
      address: "Near Railway Station Kharian",
      city: "Kharian",
      province: "Punjab",
      contactPerson: "M. Shahid",
      mobileNumber: "0300-6277777",
    }
  ];

  displayedDistributors: any[] = [];
  showAllDistributors = false;

  ngOnInit() {
    // Initially display only a subset of distributors
    this.displayedDistributors = this.distributors.slice(0, 3);
  }

  toggleDisplay() {
    // Toggle between displaying all and a subset of distributors
    if (this.showAllDistributors) {
      this.displayedDistributors = this.distributors.slice(0, 3);
    } else {
      this.displayedDistributors = this.distributors;
    }
    this.showAllDistributors = !this.showAllDistributors;
  }
}
