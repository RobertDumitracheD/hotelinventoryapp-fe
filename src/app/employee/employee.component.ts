import { RoomsService } from './../rooms/services/rooms.service';
import { Component, Self } from '@angular/core';

@Component({
  selector: 'hinv-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers:[RoomsService]
})
export class EmployeeComponent {

  employeeName:string="Robert";

  constructor(@Self() roomsService:RoomsService){}

}
