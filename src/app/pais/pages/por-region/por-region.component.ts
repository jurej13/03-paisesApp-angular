import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right:5px;
    }
  `
  ]
})
export class PorRegionComponent implements OnInit {

  // regiones : string[] = [  'EU','EFTA', 'CARICOM',
  //  'PA','AU','USAN','EEU','AL','ASEAN', 'CAIS',
  //  'CEFTA', 'NAFTA', 'SAARC']
  regiones : string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania']
  regionActiva : string =''
  paises : Country[] = []
  
  constructor(private paisService : PaisService) { }

  ngOnInit(): void {
  }
  getClaseCSS(region : string){
    return (region === this.regionActiva) 
        ? 'btn btn-primary' 
        : 'btn btn-outline-primary';
  }
  activarRegion(region : string){
    if(region === this.regionActiva) return;
    this.regionActiva = region;
    this.paises = []
    // Aca iria el llamado al servicio.
    this.paisService.buscarRegion(region).subscribe(resp=>{
      this.paises = resp
      console.log(this.paises)
    })
  }

}
