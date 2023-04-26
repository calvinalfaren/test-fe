import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  public searchInput: string;

  constructor() { }

  setSearchInput(value: string){
    this.searchInput = value;
  }

  getSearchInput(): string {
    return this.searchInput;
  }
}
