import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ConversorService } from './services/conversor.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'conversorDeMoedas';

  formulario: any;
  valorConvertido: number = 0;
  visibilidadeValorConvertido: boolean = false; 
  currancies: [] = []
  
  constructor(private conversorSirvice: ConversorService){
  }

  ngOnInit(): void{
    this.visibilidadeValorConvertido = false;
    this.formulario = new FormGroup({
      valor: new FormControl(null)
    });
  }
  Converter(): void{
    const valor = this.formulario.value.valor;
    this.visibilidadeValorConvertido = true;
    this.conversorSirvice.RealizarConversor().subscribe(resultado =>{
      this.currancies = resultado.data;
      console.log(resultado)
      this.valorConvertido = Number((valor * resultado.data.BRL.value).toFixed(2));
    })
  }
}
