/**
 * Created by usuario on 09/06/2017.
 */

import {Component, OnInit, Input} from '@angular/core';
import {Proyect} from './proyect'

@Component({
  selector: 'proyect',
  templateUrl: './proyect.component.html'
})
export class ProyectComponent{
  @Input() proyect : Proyect;
  getColor(name : String):string{
    switch (name.toUpperCase()){
      case "CSS":
        return "red";
      case "HTML":
        return "orange";
      case "JAVA":
        return "orange";
      case "JAVAEE":
        return "orange";
      case  "ANGULARJA":
        return "red darken-1";
      case  "ANGULAR":
        return "red lighten-1";
      case "BOOTSTRAP":
        return "purple";
      case "MATERIALIZECSS":
        return "pink accent-1";
      case "NODEJS":
        return "light-green lighten-3";
      case "EXPRESS":
        return "light-blue accent-1";
      case "JAVASCRIPT":
        return "yellow";
      case  "MONGODB":
        return " light-green accent-2";
      case "MYSQL":
        return "light-blue darken-4";
      case "PYTHON":
        return "yellow darken-1";
      case "C#":
        return "cyan";
      case  "C++":
        return "blue";
      case  "C":
        return "red accent-4 ";
      case "GIT":
        return "orange";
      case "GITHUB":
        return "black";
      case "BITBUCKET":
        return "blue";
      case "TRELLO":
        return "blue lighten-4";
      case "SLACK":
        return " yellow lighten-5";
      case "HEROKU":
        return "deep-purple darken-3 ";
      case "ILLUSTRATOR":
        return "orange";
      case "TYPESCRIPT":
        return "blue";
    }
  }
}
