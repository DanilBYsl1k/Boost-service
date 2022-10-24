import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ParagraphService {

  constructor() { }
  ParagraphList=[
    {paragraf:'All'},
    {paragraf:"TBC Classic"},
    {paragraf:"Shadowlands"},
    {paragraf:"Castle Nathria"},
    {paragraf:"Farming"},
    {paragraf:"Gearing"},
    {paragraf:"Raids"},
    {paragraf:"Mounts"},
    {paragraf:"PvP"},
  ]
}
