import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css']
})
export class PropertyBindingComponent implements OnInit {

  isDisabled:boolean = true;
  isHidden:boolean = false;
  
  imagePath:string = "../../../assets/images/cat.jpg";
  imageAlternate:string = "No cat image"

  constructor() { }

  ngOnInit(): void {
    // setInterval(()=>{
    //   this.isHidden = !this.isHidden;
    // }, 1000)
  }

}
