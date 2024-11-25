import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-residence',
  templateUrl: './detail-residence.component.html',
  styleUrls: ['./detail-residence.component.css']
})
export class DetailResidenceComponent {

  id!:number
    constructor(private act:ActivatedRoute){}


    ngOnInit(){
        this.id=this.act.snapshot.params['id']
    }
}
