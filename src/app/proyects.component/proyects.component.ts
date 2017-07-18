/**
 * Created by seradiazpin on 08/06/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Proyect} from './proyect.component/proyect'
import {ProyectsService} from "./proyect.component/proyect.service";
declare var $:any;
@Component({
  selector: 'proyects',
  templateUrl: './proyects.component.html'
})
export class ProyectsComponent implements OnInit{
  proyects : Proyect[];
  constructor(private proyectService: ProyectsService){
  }
  ngOnInit(): void {
    this.getProyects();
  }
  getProyects(): void {
    this.proyectService.getData().then(proyects => this.proyects = proyects);
  }

}
