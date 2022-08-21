import { Injectable } from '@angular/core';
import {CrudService} from "../../../shared/services/crud-service";
import {Sector} from "../../../shared/models/sector";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SectorService extends CrudService<Sector, number>{

  constructor(protected override _http: HttpClient) {
    super(_http, `${environment.api.baseUrl}/sectors`);
  }

  findByName(name: string): Observable<Sector> {
    return this._http.get<Sector>(this._baseUrl + "/" + name);
  }

}
