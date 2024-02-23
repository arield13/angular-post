import { Component, OnDestroy } from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { PostData } from 'src/app/interfaces/post-data.interface';

@Component({
  selector: 'app-posts',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnDestroy {
  posts: any[] = [];
  selectedTag: string = '';
  searchForm: FormGroup;
  $destroy = new Subject<void>();
  errorMessage: string = '';

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      tag: ['', Validators.required],
      direction: [''],
      sortBy: ['']
    });
  }

  searchPostsByTag() {
    if (this.searchForm.valid) {
      const tag = this.searchForm.get('tag')?.value;
      const direction = this.searchForm.get('direction')?.value;
      const sortBy = this.searchForm.get('sortBy')?.value;

      this.posts = [];
      this.errorMessage = "";
      this.postService.getPostsByTag(tag, direction, sortBy).pipe(takeUntil(this.$destroy)).subscribe(
        (data: PostData[]) => {
          this.posts = data;
        },
        error => {
          console.error('Error fetching posts:',JSON.stringify(error));
          this.errorMessage = error.error;
        }
      );
    }
    else
      this.errorMessage = "tags parameter is required";

  }

  ngOnDestroy(): void {
    this.$destroy.next();
    this.$destroy.complete();
  }
}
