import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { Component, Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-card-diagnostico-prenhez',
    templateUrl: './card-diagnostico-prenhez.component.html',
    styleUrls: ['./card-diagnostico-prenhez.component.css'],
    imports: [RouterLink, DatePipe]
})
export class CardDiagnosticoPrenhezComponent {

  @Input() diagnosticoPrenhez:DiagnosticoPrenhez;
  @Input() idVaca: number;

}
