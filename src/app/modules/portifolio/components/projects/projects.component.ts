import { Component, inject, signal } from '@angular/core';

//Interface
import { IProjects } from '../../interface/IProjects.interfaces';

//Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

//Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';
//Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports:[MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);
  public arrayProject = signal<IProjects[]>([
    {
    src: 'assets/img/projects/rocketseat.png',
    alt: 'projeto de portfólio web, em html5 e css3',
    title: 'Portifólio',
    width: '100px',
    height: '70px',
    description: 'Meu primeiro projeto envolvento programação web a partir do curso da Rocketseat',
    links:[{
      href: 'https://diegofchaggas.github.io/Project-Rocketseat/',
      name: 'Conheça o meu primeiro projeto',
    }],
    }
  ])
  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }
}
