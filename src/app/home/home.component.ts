import { Component } from '@angular/core';
import {WebcamImage, WebcamModule} from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  permissionStatus: string | undefined;
  capturedImage: any ='';
  camData: any = null;
  trigger : Subject<void> = new Subject();



  checkPermission() {
    navigator.mediaDevices.getUserMedia(
      {
        video:{width:500, height:500}
      }).then((response)=>{
        this.permissionStatus = 'Allowed';
        this.camData = response;
        console.log(this.camData);
        
      }).catch (err=>{
        this.permissionStatus = 'Not Allowed';
        console.log(this.permissionStatus);
      })
    
  }
  get $trigger(): Observable<void>{
    return this.trigger.asObservable();
  }
  capture(event : WebcamImage) {
    console.log("clicked");
    console.log("event",event)   //detalji slike
    this.capturedImage = event.imageAsDataUrl;

  }
  captureImage(){
    this.trigger.next();
  }
}
