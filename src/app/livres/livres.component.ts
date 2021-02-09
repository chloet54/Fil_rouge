import { Component, Input, OnInit } from '@angular/core';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-livres',
  templateUrl: './livres.component.html',
  styleUrls: ['./livres.component.css']
})
export class LivresComponent implements OnInit {
    @Input() livreName: string;
    @Input() livreStock: boolean;
    @Input() livreAffiche: string;
    @Input() synopsis: string;
    @Input() date: string;
    @Input() id: string;
    
    constructor(private Livre: LivresService) {}

  ngOnInit() {
  }
  
  getStock(){
    return this.livreStock;
  }
  

changeColor() {
    if(this.livreStock){
        return 'green';
    } else{
        return 'red';
    }
}

removeLivre(id:any) {
  this.Livre.deleteLivre(id);
}

}
