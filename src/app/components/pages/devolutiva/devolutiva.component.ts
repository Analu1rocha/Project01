
import { Component, OnInit } from '@angular/core';
import { faLink, faCircleChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faCircleDot } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-devolutiva',
  templateUrl: './devolutiva.component.html',
  styleUrls: ['./devolutiva.component.css']
})
export class DevolutivaComponent {

  faLink = faLink;
  farCircleDot= faCircleDot;
  faCircleChevronDown = faCircleChevronDown;

  dataAval:string="11/09/2022"
  nProposta:string="GF22/0001"
  produto:string="Previdência Individual"
  cpf:string ="312.286.988-00"
  nome:string="Marcos Oliveira Morais"
  vinculoCnpj:string="02"


}
