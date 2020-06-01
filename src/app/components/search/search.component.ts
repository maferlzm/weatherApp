import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @ViewChild('inputCiudad')InputCiudad:ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  private ObtenerClimaActual(){
      fromEvent(this.InputCiudad.nativeElement, 'keyup').subscribe((valor) =>console.log(valor));
  }
}
