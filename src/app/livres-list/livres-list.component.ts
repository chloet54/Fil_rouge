import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LivresService } from '../services/livres.service';

@Component({
  selector: 'app-livres-list',
  templateUrl: './livres-list.component.html',
  styleUrls: ['./livres-list.component.css']
})
export class LivresListComponent implements OnInit, OnDestroy {
  livres:any = [];
  LivreSubscription: Subscription;
  constructor(
    private Livre: LivresService) 
  {}
  ngOnInit() {
    this.LivreSubscription = this.Livre.livreSubject.subscribe((value) => {
      this.livres = value;
    });
    this.Livre.emitLivreSubject();
  }


  ngOnDestroy() {
    this.LivreSubscription.unsubscribe();
  }
}