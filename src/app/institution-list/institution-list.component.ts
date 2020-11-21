import { Component, OnInit } from '@angular/core';
import { Institution } from './institution';

@Component({
  selector: 'app-institution-list',
  templateUrl: './institution-list.component.html',
  styleUrls: ['./institution-list.component.scss']
})
export class InstitutionListComponent implements OnInit {

  institutions: Institution[] = [ 
    {
      image: '',
      name: 'La casa azul',
      location: 'Rauch BsAs Argentina',
      presentation: 'Comedor comunitario para niños/as, centro de recreacion y apoyo escolar',
      collected: 0,
      description: 'Somos un comedor comunitario formado en sus origenes por residentes del barrio Mit aunque luego se fue sumando otros colaboradore. Nuestros comedores alimentan hoy a niños y adolescentes brindándoles un espacio de alimentación saludable y, además, un ámbito de colaboración, interacción y reunión. ',
      links: ['www.instagram.com','www.facebook.com', 'www.lacasaazul.org'],
    },
    {
      image: '',
      name: 'Sonrisas felices',
      location: 'Tandil BsAs Argentina',
      presentation: 'Comedor comunitario para niños/as',
      collected: 0,
      description: 'Somos un comedor comunitario formado en sus origenes por residentes del barrio Mit aunque luego se fue sumando otros colaboradore. Nuestros comedores alimentan hoy a niños y adolescentes brindándoles un espacio de alimentación saludable y, además, un ámbito de colaboración, interacción y reunión. ',
      links: ['www.instagram.com','www.facebook.com'],
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
