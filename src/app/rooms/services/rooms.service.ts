import { environment } from './../../environments/environments';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RoomsList } from './../rooms';
import { Injectable } from '@angular/core';
import { catchError, of, shareReplay, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  environment = environment.apiEndPoint;

  roomsList: RoomsList[]=[];

  constructor(private httpClient:HttpClient) {

  }

  getRooms$=this.httpClient.get<RoomsList[]>(this.environment+"/all").pipe(
    shareReplay(1)

  );

  getRooms(){
    return this.httpClient.get<RoomsList[]>(this.environment +"/all");
  }

  addRoom(newRoom: RoomsList){
    return this.httpClient.post<RoomsList[]>(this.environment+"/all/addRoom",newRoom);
  }

  updateRoom(updateRoomm: RoomsList, roomNumber:number){
    return this.httpClient.put<RoomsList[]>(this.environment+"/all/updateRoom/"+ roomNumber,updateRoomm);
  }

  deleteRoom(roomNumber:number) {
    return this.httpClient.delete<RoomsList[]>(this.environment+"/all/deleteRoom/"+ roomNumber);
  }

  loginAdmin(username:string,password:string) {
    return this.httpClient.get<string>(this.environment+"/all/login/"+username+"/"+password);
  }
}
