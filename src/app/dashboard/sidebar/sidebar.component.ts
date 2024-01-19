import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output() sideNavToggled = new EventEmitter<boolean>()
  menuStatus: boolean = false;

  SideNavToggled() {
    this.menuStatus = !this.menuStatus;
    this.sideNavToggled.emit(this.menuStatus);
  }
  @Input() sideNavStatus: boolean = false;


  list = [
    {
      routeLink: '/dashboard',
      number: '1',
      name: 'dashboard',
      icon: "fa-solid fa-home"
    },
    {
      routeLink: '/productcategories',
      number: '2',
      name: 'product categories',
      icon: "fa-solid fa-phone"
    },
    {
      routeLink: '/leadmanagement',
      nummber: '3',
      name: 'Lead Management',
      icon: "fa-solid fa-chart-simple"
    },
    {
      routeLink: '/campaigns',
      nummber: '4',
      name: 'campaigns',
      icon: "fa-solid fa-envelope"
    },
    {
      routeLink: '/applications',
      nummber: '5',
      name: 'Applications',
      icon: "fa-solid fa-pencil"
    },
    {
      routeLink: '/mycontacts',
      nummber: '6',
      name: 'Mycontacts',
      icon: "fa-solid fa-users-line"
    },
    {
      routeLink: '/claims',
      nummber: '7',
      name: 'claims',
      icon: "fa-solid fa-chart-gantt"
    },
    {
      routeLink: '/twitter',
      nummber: '8',
      name: 'Twitter',
      icon: "fa-brands fa-twitter"
    },
    {
      routeLink: '/settings',
      nummber: '9',
      name: 'Settings',
      icon: "fa-solid fa-gear"
    }

  ]



}
