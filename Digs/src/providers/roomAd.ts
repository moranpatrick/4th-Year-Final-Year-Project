import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class RoomAd {
 
  email: String;
  //apiURL = 'http://localhost:8080/';
  apiURL = 'http://54.73.1.214:8080/'; //patrick
  //apiURL = 'http://52.56.193.204:8080/'; // andrei
  //apiURL = 'http://54.72.69.79:8080/'; //gerard
 
  constructor(public http: Http) {
  }
  
  getRooms(){
    return this.http.get(this.apiURL + 'api/rooms').map(res => res.json());
  }

  getMyRooms(email){
    console.log("now in getMyRooms(): " + email);
    return this.http.get(this.apiURL + 'api/myRooms/' + email).map(res => res.json());
  }
 
  createRoom(room){
 
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    this.http.post(this.apiURL+'api/rooms', JSON.stringify(room), {headers: headers})
      .subscribe(res => {
        console.log(res.json());
      },
      error => {
        alert("ERROR CREATING ROOM: " + error);
      });
  }
 
  deleteRoom(id){
 
    this.http.delete(this.apiURL+'api/rooms/' + id).subscribe((res) => {
      console.log(res.json());
    });   
 
  }
 
}