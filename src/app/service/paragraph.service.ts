import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor() { }
  ParagraphList=[
    {paragraph:'All'},
    {paragraph:"TBC Classic"},
    {paragraph:"Shadowlands"},
    {paragraph:"Castle Nathria"},
    {paragraph:"Farming"},
    {paragraph:"Gearing"},
    {paragraph:"Raids"},
    {paragraph:"Mounts"},
    {paragraph:"PvP"},
  ]
}
