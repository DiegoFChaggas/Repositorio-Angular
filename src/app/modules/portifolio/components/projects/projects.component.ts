import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interfaces';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProject = signal<IProjects[]>([
    {
    src: 'assets/img/projects/rocketseat.png',
    alt: 'projeto de portfólio web, em html5 e css3',
    title: 'Portifólio',
    width: '100px',
    height: '51px',
    description: 'Meu primeiro projeto envolvento programação web a partir do curso da Rocketseat',
    links:[{
      href: 'https://diegofchaggas.github.io/Project-Rocketseat/',
      name: 'Conheça o meu primeiro projeto',
    }],
    }
  ])
}
