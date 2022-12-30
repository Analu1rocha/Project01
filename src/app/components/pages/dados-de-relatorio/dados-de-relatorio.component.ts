import { Component } from '@angular/core';
import { faLink, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dados-de-relatorio',
  templateUrl: './dados-de-relatorio.component.html',
  styleUrls: ['./dados-de-relatorio.component.css']
})
export class DadosDeRelatorioComponent {

  faLink = faLink;
  faCircleChevronUp = faCircleChevronUp;

  dataAval: string="11/09/2022"
  nProposta: string="GF22/0001"
  produto: string="Previdência Individual"
  cpf: string ="312.286.988-00"
  nome: string="Marcos Oliveira Morais"
  vinculoCnpj: string="02"

}
