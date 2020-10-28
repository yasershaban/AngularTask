import { Post } from './../../model/post/post';
import { ServicesService } from './../../services/services.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(private service: ServicesService) {

  }
  public posts: Post[]

  ngOnInit() {

    this.service.getAllServices().subscribe((data: Post[]) => {
      this.posts = data.slice(0, 3)

      console.log(this.posts);

    }


    );
  }
}
