import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {
  pais !: Country;
  constructor(
    private activatedRooute : ActivatedRoute,
    private paisService : PaisService
    ) { }

  ngOnInit(): void {
    // this.activatedRooute.params.subscribe(({id}) =>{
    //   console.log(id)
    //   this.paisService.getPaisPorId(id).subscribe(pais=>{
    //     console.log(pais)
    //   })
    // })
    this.activatedRooute.params
    .pipe(
      switchMap(({id})=> this.paisService.getPaisPorId(id)),
      tap(console.log)
      )
      .subscribe(pais =>{
        this.pais = pais[0]
       console.log(this.pais)
    })
    }
  }
  // SwitchMap: Permite recibir un observable y devuelve otro observable
  // Lo que hago aca es que en vez de devoler el observable de la ruta
  // ya directamente en el medio cambio al observable de la respuesta
  // Muy bueno, tener en cuenta.
  