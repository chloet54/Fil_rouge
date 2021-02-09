import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { emitWarning } from 'process';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivresService {

  constructor(
    private http: HttpClient
  ) {
    this.getLivre();
   }



  livreSubject = new Subject<any[]>();
  private livres =[];
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }
    

  emitLivreSubject() {
    this.livreSubject.next(this.livres.slice());
  }
  setStock() {
    for(const i of this.livres) {
      i.Stock = true;
    }
    this.emitLivreSubject();
  }

  setRupture() {
    for(const iterator of this.livres) {
      iterator.Stock =false;
    }
    this.emitLivreSubject();
  }

  switchStock(index: number) {
    this.livres[index].Stock = true;
    this.emitLivreSubject();
  }

  switchRupture(index: number) {
    this.livres[index].Stock = false;
    this.emitLivreSubject();
  }

  getLivreById(id: number) {
    return this.http.get<any>('/api/livres/' + id);


}
addLivre(livre:any) {
  this.http.post<any>('/api/livres', livre, this.httpOptions).subscribe(res => {
    this.livres.push(res);
    this.emitLivreSubject();
  });
}

getLivre() {
  this.http.get<any>('/api/livres').subscribe((res) => {
    this.livres = res;
    this.emitLivreSubject();
  })
}

ModifLivre(livre:any) {
  var index =this.livres.findIndex(
    (livreToModif) => {
      if(livreToModif._id == livre._id) {
        return true;
      }
    }
  )
  this.livres.splice(index, 1, livre);
  this.emitLivreSubject();
  return this.http.put<any>('/api/livres/' +  livre._id, livre, this.httpOptions);
}

deleteLivre(id:any) {
  this.http.delete<any>('/api/livres/' + id).subscribe(res => {
    var index = this.livres.findIndex(
      (livreToDelete) => {
        if(livreToDelete._id == id) {
          return true;
        }
      }
    );
    this.livres.splice(index, 1);
    this.emitLivreSubject();
  });
}

}
