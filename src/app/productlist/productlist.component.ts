import { Component, OnInit } from '@angular/core';
import { NgserviceService } from '../ngservice.service';


@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.scss']
})
export class ProductlistComponent implements OnInit {

  constructor(private _service:NgserviceService) { }

  ngOnInit(): void {

    this._service.fetchProductListFromRemote().subscribe(

      data=>console.log("Data recieved"),
      error=>console.log("Exception Occoured")
    )
  }

}
