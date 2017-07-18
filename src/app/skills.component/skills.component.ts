/**
 * Created by seradiazpin on 08/06/2017.
 */
import { Component } from '@angular/core';
import {Skill} from "./skill.component/skill";
import {SkillsService} from "./skill.component/skill.service";

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html'
})
export class SkillsComponent  {
  fskills : Skill[];
  bskills : Skill[];
  tskills : Skill[];
  lskills : Skill[];
  constructor(private skillsService: SkillsService){}
  ngOnInit(): void {
    this.getFrontSkills();
    this.getBackSkills();
    this.getToolsSkills();
    this.getLangSkills()
  }
  getFrontSkills(): void {
    this.skillsService.getFrontData().then(skills => this.fskills = skills);
  }
  getBackSkills(): void {
    this.skillsService.getBackData().then(skills => this.bskills = skills);
  }
  getToolsSkills(): void {
    this.skillsService.getToolsData().then(skills => this.tskills = skills);
  }
  getLangSkills(): void {
    this.skillsService.getLangData().then(skills => this.lskills = skills);
  }
}
