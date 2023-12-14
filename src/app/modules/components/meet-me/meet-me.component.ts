import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { Footeraboutus } from '../../models/dashboard/dashboard.model';

@Component({
  selector: 'app-meet-me',
  templateUrl: './meet-me.component.html',
  styleUrls: ['./meet-me.component.css']
})
export class MeetMeComponent implements OnInit {
  meetMeData: Observable<Footeraboutus[] | undefined> | undefined

  constructor(private storeService: StoreServiceService) { }

  ngOnInit(): void {
    this.storeService.getDashboardAllData();
    this.meetMeData = this.storeService.getDashboardAllData$.pipe(
      map((allData)=> {
         return allData?.meetme
      })
    )
  }

}
