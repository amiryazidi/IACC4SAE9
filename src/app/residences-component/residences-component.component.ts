import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';

@Component({
  selector: 'app-residences-component',
  templateUrl: './residences-component.component.html',
  styleUrls: ['./residences-component.component.css']
})
export class ResidencesComponentComponent {
  filterAddress: string = '';
  favorites: Residence[] = [];
  listResidences: Residence[] = [
    { id: 1, "name": "El fel", "address": "Borj Cedria", "image": "../../assets/images/R1.jpg", status: "Disponible" },
    { id: 2, "name": "El yasmine", "address": "Ezzahra", "image": "../../assets/images/R2.jpg", status: "Disponible" },
    { id: 3, "name": "El Arij", "address": "Rades", "image": "../../assets/images/R3.jpg", status: "Vendu" },
    { id: 4, "name": "El Anber", "address": "inconnu", "image": "../../assets/images/R4.jpg", status: "En Construction" }
  ];
  showLocation(address: string): void {
    if (address === 'inconnu') {
      alert("L'adresse de cette résidence est inconnue");
    } else {
      console.log("Adresse : " + address);
    }
  }
  addToFavorites(residence: Residence) {
    if (!this.favorites.includes(residence)) {
      this.favorites.push(residence);
    }
  }

   // Filtrer les résidences
   getFilteredResidences(): Residence[] {
    return this.listResidences.filter(residence =>
      residence.address.toLowerCase().includes(this.filterAddress.toLowerCase())
    );
  }
}
