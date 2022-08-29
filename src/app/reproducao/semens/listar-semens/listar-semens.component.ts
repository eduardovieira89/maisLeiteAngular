import { SemensService } from './../semens.service';
import { Semens } from './../../../model/semens';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-semens',
  templateUrl: './listar-semens.component.html',
  styleUrls: ['./listar-semens.component.css']
})
export class ListarSemensComponent implements OnInit {

  semens$:Observable<Semens[]>;
  constructor(private semensService: SemensService) { }

  ngOnInit(): void {
    this.semens$ = this.semensService.list();
  }

}
