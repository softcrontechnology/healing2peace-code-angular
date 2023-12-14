import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StoreServiceService } from 'src/app/core/services/store/store-service.service';
import { environment } from 'src/environments/environment';
import { BlogResponseModel } from '../../models/blog/blog.model';
import { CommentResponseModel } from '../../models/comments/comment.model';
import { BlogService } from '../../services/blog/blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {

  _lstBlogResponseModel: BlogResponseModel | undefined
  blogDetails: Observable<BlogResponseModel[] | undefined> | undefined
  blogMasterId: string | undefined | null | number;
  recentBlogs: Observable<BlogResponseModel[] | undefined> | undefined
  commentsDetails: Observable<CommentResponseModel[] | undefined> | undefined
  blogFriendlyUrl: string | undefined | null;
  blogTags: Observable<BlogResponseModel[] | undefined> | undefined
  imageUrl = environment.imageBaseurl;
  baseUrl = environment.baseUrl;
  constructor(
    private router: Router,
    private storeService: StoreServiceService,
    private activateroute: ActivatedRoute,
    private toaster: HotToastService,
    private blogService: BlogService

  ) { }

  blogdetailForm!: FormGroup;

  ngOnInit(): void {
    window.scroll({top: 350});
    this.blogdetailForm = new FormGroup({
      blog_comment: new FormControl(null, [Validators.required])
    })
    this.activateroute.paramMap.subscribe(params => {
      this.blogFriendlyUrl = params.get('title');
      console.log(this.blogFriendlyUrl);
    })



    this.storeService.getAllBlogValues();
    this.storeService.getAllBlogValue$.subscribe(data => {
      const blog = data?.filter(d => d?.blog_friendly_url == this.blogFriendlyUrl);
      blog?.forEach(id => {
        this.blogMasterId = id?.blog_master_id;
      })
    })
    this.blogDetails = this.storeService.getAllBlogValue$.pipe(map((d) => {
      return d?.filter(val => val?.blog_friendly_url == this.blogFriendlyUrl?.toString())
    }))
    this.recentBlogs = this.storeService.getAllBlogValue$.pipe(map((d) => {
      return d?.filter(val => val?.blog_friendly_url != this.blogFriendlyUrl?.toString())
    }))
    this.storeService.getAllComments();
    this.commentsDetails = this.storeService.getAllComments$.pipe(
      map((comment) => {
        return comment?.filter(c => c?.blog_master_id == this.blogMasterId);
      })
    )
    this.blogTags = this.storeService.getAllBlogValue$.pipe(
      map((blogs) => {
        const blog = blogs?.filter(d => d?.blog_friendly_url == this.blogFriendlyUrl);
        const allTags: BlogResponseModel[] = []
        blog?.forEach(b => {
          const blog_id = b?.blog_tag_id?.split(",");
          const tag_n = b?.tag_name?.split(",");
          tag_n?.forEach(function (v, i) {
            const obj: { blog_tag_id: string, tag_name: string | undefined } | any = {};
            obj.tag_name = v;
            obj.blog_tag_id = blog_id?.[i];
            allTags.push(obj);
          });
        })
        return allTags;
      })
    )



  }

  btnsubmit() {
    console.log(this.blogMasterId);
    console.log(this.blogdetailForm.value);
    const { blog_comment } = this.blogdetailForm.value;
    this.storeService.addComment({
      blog_comment,
      blog_master_id: (+(this.blogMasterId ?? 0)?.toString())
    })
    this.blogdetailForm.reset();
  }
  recentBlog(v: BlogResponseModel) {

    this.storeService.updateBlogView({
      blog_master_id: v?.blog_master_id
    })
    this.router.navigate([`/blog-details/${v?.blog_friendly_url}`]);
   
    this.blogDetails = this.storeService.getAllBlogValue$.pipe(map((d) => {
      return d?.filter(val => val?.blog_title == v?.blog_title)
    }))

    this.recentBlogs = this.storeService.getAllBlogValue$.pipe(map((d) => {
      return d?.filter(val => val?.blog_title != v?.blog_title)
    }))
    this.blogMasterId = ((v?.blog_master_id)?.toString());
    this.commentsDetails = this.storeService.getAllComments$.pipe(
      map((comment) => {
        return comment?.filter(c => c?.blog_master_id == this.blogMasterId);
      })
    )

    this.blogTags = this.storeService.getAllBlogValue$.pipe(
      map((blogs) => {
        const blog = blogs?.filter(d => d?.blog_title == v?.blog_title);
        const allTags: BlogResponseModel[] = []
        blog?.forEach(b => {
          const blog_id = b?.blog_tag_id?.split(",");
          const tag_n = b?.tag_name?.split(",");
          tag_n?.forEach(function (v, i) {
            const obj: { blog_tag_id: string, tag_name: string | undefined } | any = {};
            obj.tag_name = v;
            obj.blog_tag_id = blog_id?.[i];
            allTags.push(obj);
          });
        })
        return allTags;
      })
    )
  }
  openTag(id: string){
    this.storeService.getBlogTags(id);
    this.router.navigate(['/blogs'] ,{
       queryParams: {
          blog_id: id
       }
    });
  }
}
