import { Component, OnInit } from '@angular/core';
import { RezervacijaServis } from '../rezervacija/rezervacija.servis';
import { Rezervacija } from '../modeli/rezervacija';

@Component({
  selector: 'app-rezervacija-list',
  templateUrl: './rezervacija-list.component.html',
  styleUrls: ['./rezervacija-list.component.css']
})
export class RezervacionaListaComponent implements OnInit {

  rezervacije: Rezervacija[] = [];

  constructor(private RezervacijaServis: RezervacijaServis){}

  ngOnInit(): void {
    this.rezervacije = this.RezervacijaServis.getRezervacije();
  }

  deleteRezervacija(id: string){
    this.RezervacijaServis.deleteRezervacija(id);
  }

}
