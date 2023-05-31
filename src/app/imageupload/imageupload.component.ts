import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-imageupload',
  templateUrl: './imageupload.component.html',
  styleUrls: ['./imageupload.component.css']
})
export class ImageuploadComponent {
  constructor() { }
  ngOnInit() {
    
}
url="./assets/Nature.jpeg";

onSelectFile(e:any){
  if(e.target.files){
    var reader=new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;
    }
  }

}
}
