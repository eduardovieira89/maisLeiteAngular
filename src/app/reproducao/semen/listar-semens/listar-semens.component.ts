import { SemenService } from '../semen.service';
import { Semen } from '../../../model/semen';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { AsyncPipe, CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-listar-semens',
    templateUrl: './listar-semens.component.html',
    styleUrls: ['./listar-semens.component.css'],
    imports: [RouterLink, AsyncPipe, CurrencyPipe, DatePipe]
})
export class ListarSemenComponent implements OnInit {

  semens$:Observable<Semen[]>;
  constructor(private semensService: SemenService) { }

  ngOnInit(): void {
    this.semens$ = this.semensService.list();
  }

}
