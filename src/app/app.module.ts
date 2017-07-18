import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterializeModule} from 'angular2-materialize'


import { AppComponent } from './app.component';
import {AboutComponent} from "./about.component/about.component";
import {ProyectsComponent} from "./proyects.component/proyects.component";
import {SkillsComponent} from "./skills.component/skills.component";
import {FoterComponent} from "./footer.component/foter.component";
import {NavBarComponent} from "./nav-bar.component/nav-bar.component";
import {ProyectsService} from "./proyects.component/proyect.component/proyect.service";
import {ProyectComponent} from "./proyects.component/proyect.component/proyect.component";
import {SkillsService} from "./skills.component/skill.component/skill.service";
import {SkillComponent} from "./skills.component/skill.component/skill.component";



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProyectsComponent,
    SkillsComponent,
    FoterComponent,
    NavBarComponent,
    ProyectComponent,
    SkillComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ProyectsService,SkillsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
