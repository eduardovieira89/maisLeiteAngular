import { DiagnosticoPrenhez } from 'src/app/model/diagnosticoPrenhez';
import { Component, Input } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-card-diagnostico-prenhez',
  templateUrl: './card-diagnostico-prenhez.component.html',
  styleUrls: ['./card-diagnostico-prenhez.component.css']
})
export class CardDiagnosticoPrenhezComponent {

  @Input() diagnosticoPrenhez:DiagnosticoPrenhez;
  @Input() idVaca: number;

}
