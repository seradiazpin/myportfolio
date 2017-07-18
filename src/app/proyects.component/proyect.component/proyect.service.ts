/**
 * Created by usuario on 09/06/2017.
 */
import {Injectable} from '@angular/core'

import { Proyect } from './proyect';
import { PROYECTS } from './mockproyects';

@Injectable()
export class ProyectsService{

  getData(): Promise<Proyect[]> {
    return Promise.resolve(PROYECTS);
  };
  getHero(id: number): Promise<Proyect> {
    return this.getData()
      .then(heroes => heroes.find(hero => hero.id === id));
  };
}
