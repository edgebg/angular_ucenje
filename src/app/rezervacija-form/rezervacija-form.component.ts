import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { RezervacijaServis } from '../rezervacija/rezervacija.servis';
import { Rezervacija } from '../modeli/rezervacija';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rezervacija-form',
  templateUrl: './rezervacija-form.component.html',
  styleUrls: ['./rezervacija-form.component.css']
})
export class RezervacionaFormaComponent implements OnInit {

  reservationForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private RezervacijaServis: RezervacijaServis,
    private router: Router,
    private activatedRoute: ActivatedRoute){

  }

  ngOnInit(): void {
    this.reservationForm = this.formBuilder.group({
      checkInDatum: ['', Validators.required],
      checkOutDatum: ['', Validators.required],
      imeGosta: ['', Validators.required],
      emailGosta: ['', [Validators.required, Validators.email]],
      brojSobe: ['', Validators.required]
    })

    let id = this.activatedRoute.snapshot.paramMap.get('id')

    if(id){
      let rezervacija = this.RezervacijaServis.getRezervacija(id)

      if(rezervacija)
        this.reservationForm.patchValue(rezervacija)
    }
  }

  onSubmit() {
    if(this.reservationForm.valid){

      let rezervacija: Rezervacija = this.reservationForm.value;

      let id = this.activatedRoute.snapshot.paramMap.get('id')

      if(id){
        // Update
        this.RezervacijaServis.updateRezervacija(id, rezervacija)
      } else {
        // Nova
        this.RezervacijaServis.addRezervacija(rezervacija)   

      }

      this.router.navigate(['/list'])
    }
  }

}
