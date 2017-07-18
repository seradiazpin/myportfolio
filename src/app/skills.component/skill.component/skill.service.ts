/**
 * Created by usuario on 10/06/2017.
 */
import {Injectable} from '@angular/core'

import { Skill } from './skill';
import {FRONTSKILLS, LANGUAGES, BACKSKILLS, TOOLS} from './mockskills';



@Injectable()
export class SkillsService{

  getFrontData(): Promise<Skill[]> {
    return Promise.resolve(FRONTSKILLS);
  };
  getBackData(): Promise<Skill[]> {
    return Promise.resolve(BACKSKILLS);
  };
  getToolsData(): Promise<Skill[]> {
    return Promise.resolve(TOOLS);
  };
  getLangData(): Promise<Skill[]> {
    return Promise.resolve(LANGUAGES);
  };
}
