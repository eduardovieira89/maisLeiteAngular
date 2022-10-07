import { Component, OnInit } from '@angular/core';
import { TokenstorageService } from 'src/app/usuario/tokenstorage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private tokenStorageService: TokenstorageService) { }

  ngOnInit(): void {
  }

}
