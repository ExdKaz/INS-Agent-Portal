import { Component, OnInit } from '@angular/core';
import { Event } from 'src/app/model/event'
import { CartService } from 'src/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  item: any = null;
  userModel = new Event('jhon.smith@xyz.com', 'Happy Birthday!', 'Happy Birthday......');


  constructor(private eventService: CartService) { }

  ngOnInit() { }


  alertWithSuccess() {
    Swal.fire({
      position: 'bottom',
      title: 'Your Birthday wishes Has been Sent',
      confirmButtonText: 'OKAY THANKS!'
    });
  }

  onSubmit() {
    this.eventService.sendEvent(this.userModel).subscribe({
      next: () => { alert('Event Sent Successfully') },
      error: () => { alert('Error') }
    })
  }

}
