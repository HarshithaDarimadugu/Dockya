import { Component , OnInit } from '@angular/core';
import * as Aos from 'aos';




@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styleUrls: ['./frontpage.component.css']
})
export class FrontpageComponent implements OnInit {
  constructor() {}
  ngOnInit() {
    Aos.init({
      duration: 1200,
    })
    
  }
}


