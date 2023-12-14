import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { BlogResponseModel } from '../../models/blog/blog.model';
import { CategoriesResponseModel } from '../../models/categories/categories.model';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  _lstBlogResponseModel: Observable<BlogResponseModel[]> | undefined;
  allBlogData: Observable<BlogResponseModel[] | undefined> | undefined
  BlogCategories: Observable<CategoriesResponseModel[] | undefined> | undefined
  imageUrl = environment.imageBaseurl;
  tabIndex : number = 0;
  constructor(
    private router: Router,
    private storeService: StoreServiceService,
    private route: ActivatedRoute,
    private blogService: BlogService


  ) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params)=> {
       if(params.has('blog_id')){
        this.allBlogData = this.storeService.getBlogTags$.pipe(
          map((blog)=> {
             return blog;
          })
        )
       }else{
        this.storeService.getAllBlogValues()
        this.allBlogData = this.storeService.getAllBlogValue$.pipe(map((blog) => {
          return blog;
        }))
       }
    })
    this.storeService.getALlCategories();
    this.BlogCategories = this.storeService.getAllCategories$.pipe(
      map((category) => {
        return category?.filter(c => c?.category_type === 'category');
      })
    )
  }
  readMore(d: BlogResponseModel) {

    this.storeService.updateBlogView({
      blog_master_id: d?.blog_master_id
    })
    this.router.navigate([`/blog-details/${d?.blog_friendly_url}`]); 
       


    // this.blogService.updateBlogView(d?.blog_master_id).subscribe(data=> {
    //    if(data){
    //       this.router.navigate([`/blog-details/${d?.blog_friendly_url}`]);   
    //    }
    // });



  }

  filterSelection(id: number , index : number) {
    this.tabIndex = index;
    if (id == 0) {
      this.allBlogData = this.storeService.getAllBlogValue$.pipe(map((blog) => {
        return blog;
      }))
    } else {
      this.allBlogData = this.storeService.getAllBlogValue$.pipe(
        map((val) => {
          return val?.filter(v => v?.blog_category_id === id)
        })
      )
    }
  }
}
