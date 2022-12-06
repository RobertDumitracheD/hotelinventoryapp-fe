import { RoomsList } from './../rooms';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'hinv-rooms-list',
  templateUrl: './rooms-list.component.html',
  styleUrls: ['./rooms-list.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RoomsListComponent implements OnInit, OnChanges, OnDestroy{
  ngOnDestroy(): void {
    console.log("on destroy called");
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    if(changes['title'])
    this.title=changes['title'].currentValue.toUpperCase();
  }
  
  @Input() rooms:RoomsList[] | null= [];
  @Input() title:string = "";
  @Output() selectedRoom = new EventEmitter<RoomsList>();

  ngOnInit(): void {
    
  }

  selectRoom(room:RoomsList) {
    this.selectedRoom.emit(room);
  }



}
