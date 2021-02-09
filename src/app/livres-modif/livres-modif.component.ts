import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-livres-modif',
  templateUrl: './livres-modif.component.html',
  styleUrls: ['./livres-modif.component.css']
})
export class LivresModifComponent implements OnInit {
livre : any;
  constructor(
    private Livre: LivresService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.Livre.getLivreById(id).subscribe(res => {
      this.livre = res;
    })
  }
  
  onModif() {
    this.Livre.ModifLivre(this.livre).subscribe(res => {
      this.router.navigate(['/livres']);
    })

}
}
