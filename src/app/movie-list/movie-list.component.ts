import { Component, OnInit } from '@angular/core';
import { MovieListService } from 'services/movie-list.service';


@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  private name  =''
 
 
  movies : any =[]
  moviedetail : any =[]
  constructor(private service: MovieListService) { }

  ngOnInit(): void {
   
  }

  searchMovies(name :HTMLInputElement){
    this.name = name.value
    name.value =''
    // console.log(this.url + `s=${this.title}`)
    this.service.getMoviesByName(this.name).
    subscribe((response:any) => {
      this.movies = response.Search
      console.log(typeof(response))
      this.movies.map((i:any)=>i.isDetailsShown=false);
      console.log(this.movies)
      
    })
  }

  detailsShown(title :string){
    this.moviedetail=[]
    this.movies.map((i:any)=>i.isDetailsShown=false);
    let objIndex = this.movies.findIndex(((obj:any) => obj.Title == title));
    this.movies[objIndex].isDetailsShown =true

    this.service.getMoviesByTitle(title).
    subscribe((response:any) => {
      console.log(typeof(response))
      this.moviedetail = response
      console.log(response)
      // console.log(response.Ratings[0].Source)
     
    })
    
    
  }
    
  



}
