import { Injectable } from '@angular/core';
import { Rezervacija } from '../modeli/rezervacija';


@Injectable({
  providedIn: 'root'
})
export class RezervacijaServis {

  private rezervacije: Rezervacija[] = [];

  constructor(){
    let savedRezervacije = localStorage.getItem("rezervacije");
    this.rezervacije  = savedRezervacije? JSON.parse(savedRezervacije) : [];
  }

  // CRUD

  getRezervacije(): Rezervacija[] {
    return this.rezervacije;
  }

  getRezervacija(id: string): Rezervacija | undefined {
    return this.rezervacije.find(res => res.id === id);
  }

  addRezervacija(rezervacija: Rezervacija): void {

    rezervacija.id = Date.now().toString();

    this.rezervacije.push(rezervacija);
    localStorage.setItem("rezervacije", JSON.stringify(this.rezervacije));
  }

  deleteRezervacija(id: string): void {
    let index = this.rezervacije.findIndex(res => res.id === id);
    this.rezervacije.splice(index,1)
    localStorage.setItem("rezervacije", JSON.stringify(this.rezervacije));
  }

  updateRezervacija(id: string, updatedRezervacija: Rezervacija): void {
    let index = this.rezervacije.findIndex(res => res.id === id);
    this.rezervacije[index] = updatedRezervacija;
    localStorage.setItem("rezervacije", JSON.stringify(this.rezervacije));
  }
  
}
