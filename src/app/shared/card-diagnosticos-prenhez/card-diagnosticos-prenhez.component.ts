import { DiagnosticosPrenhez } from 'src/app/model/diagnosticosPrenhez';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-diagnosticos-prenhez',
  templateUrl: './card-diagnosticos-prenhez.component.html',
  styleUrls: ['./card-diagnosticos-prenhez.component.css']
})
export class CardDiagnosticosPrenhezComponent {

  @Input() diagnosticoPrenhez:DiagnosticosPrenhez;

}
