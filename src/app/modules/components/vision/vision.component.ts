import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { Footeraboutus } from '../../models/dashboard/dashboard.model';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.css']
})
export class VisionComponent implements OnInit {
  OurVisionData: Observable<Footeraboutus[] | undefined> | undefined
  
  constructor(private storeService: StoreServiceService) { }

  ngOnInit(): void {
    this.storeService.getDashboardAllData();
    this.OurVisionData = this.storeService.getDashboardAllData$.pipe(
      map((allData)=> {
         return allData?.ourvision
      })
    )
  }

}
