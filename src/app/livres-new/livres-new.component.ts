import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-livres-new',
  templateUrl: './livres-new.component.html',
  styleUrls: ['./livres-new.component.css']
})
export class LivresNewComponent implements OnInit {
  newLivre: any;
  constructor(
    private Livre: LivresService,
    private router: Router
  ) { }
    


  ngOnInit() {
    this.newLivre = {
      title: null,
      affiche: null,
      Stock: null,
      synopsis: null,
      date: null
    };
  }

  onSaveLivre() {
    this.Livre.addLivre(this.newLivre);
    this.router.navigate(['/livres']);
  }


}
