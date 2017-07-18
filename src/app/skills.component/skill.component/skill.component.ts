/**
 * Created by usuario on 10/06/2017.
 */
import {Component,Input} from '@angular/core';
import {Skill} from './skill'

@Component({
  selector: 'skill',
  templateUrl: './skill.component.html'
})
export class SkillComponent{
  @Input() skill : Skill;
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
        return "#e53935";
      case  "ANGULAR":
        return "#e55252";
      case "BOOTSTRAP":
        return "#4a148c";
      case "MATERIALIZECSS":
        return "#ff80ab";
      case "NODEJS":
        return "#8bc34a";
      case "EXPRESS":
        return "#80d8ff";
      case "JAVASCRIPT":
        return "yellow";
      case  "MONGODB":
        return "#b2ff59";
      case "MYSQL":
        return "#01579b";
      case "PYTHON":
        return "#ffea00";
      case "C#":
        return "cyan";
      case  "C++":
        return "#2962ff";
      case  "C":
        return "#d50000 ";
      case "GIT":
        return "orange";
      case "GITHUB":
        return "black";
      case "BITBUCKET":
        return "blue";
      case "TRELLO":
        return "#4fc3f7";
      case "SLACK":
        return "#fff9c4";
      case "HEROKU":
        return "#4527a0 ";
      case "ILLUSTRATOR":
        return "orange";
      case "TYPESCRIPT":
        return "blue";
    }
  }
}
