import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icatalog } from '../interface/CatalogList.interface';

@Injectable({
  providedIn: 'root'
})
export class ListCardService {

  constructor() { }
  CatalogList:Icatalog[]=[
    {
      id:1,
      name:"Shadowland Powerleveling",
      price:25,
      Paragraphs:"TBC Classic",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Finish StorylineStoryline", price:7},
        fast:{price:0},
      }
    },
    {
      id:2,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Shadowlands",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 2.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },
    {
      id:3,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Castle Nathria",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 3.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },
    {
      id:4,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Farming",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 4.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },    
    {
      id:5,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Gearing",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 5.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },    
    {
      id:6,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Raids",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 6.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },    
    {
      id:7,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Mounts",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    },    
    {
      id:8,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"PvP",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 2.png",
      parameters:{
              extr:{title:"Finish Storyline", price:7},
              oldContent:{title:"Finish Storyline", price:7},
              bos:{title:"Finish Storyline", price:7},
              fast:{price:7},
      }
    },    
    {
      id:9,
      name:"Shadowland Powerleveling",
      price:95,
      Paragraphs:"Shadowlands",
      timeSalle:12,
      info:["Any KEY level","Best Gear","Fast Boost" ],
      img:"assets/image/Cards-list/cards 3.png",
      parameters:{
        extr:{title:"Finish Storyline", price:7},
        oldContent:{title:"Finish Storyline", price:7},
        bos:{title:"Finish Storyline", price:7},
        fast:{price:0},
      }
    }
  ]
  getById(id:number){
    return this.CatalogList.find(p=>p.id==id)
  }
}
