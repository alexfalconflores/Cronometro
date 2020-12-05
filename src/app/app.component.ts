import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mensaje = '';

  // tslint:disable-next-line: typedef
  actualizar(t: string)
  {
    this.mensaje = t + '(se actualiza cada 10 segundos)';
  }
}
