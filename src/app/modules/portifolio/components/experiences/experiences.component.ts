import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interfaces';
@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong: "Estagiário Fullstack",
        p:"Unimed Maceió | Jul 2023"
      },
      text: "Contratado peço período de 1 ano, atuei como estagiário de desenvolvimento web, adquirindo um vasto conhecimento em PHP, Html5, CSS3, Javascript, Angular, Typescript, PL/SQL "
    }
  ])
}
