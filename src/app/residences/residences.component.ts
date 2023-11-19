import { Component } from '@angular/core';
import { Apartment, Residence } from '../models/apartment';



@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences: Residence[] = [
    { id: 1, name: 'El fel', address: 'Borj Cedria', image: '../../assets/images/R1.jpg' },
    { id: 2, name: 'El yasmine', address: 'Ezzahra', image: '../../assets/images/R2.jpeg' },
    { id: 3, name: 'El Arij', address: 'Rades', image: '../../assets/images/R3.jpeg' },
    { id: 4, name: 'El Anber', address: 'Manzah 5', image: '../../assets/images/R4.jpeg' }
  ];

  listApartments: Apartment[] = [
    { id: 1, appartNum: 1, floorNum: 0, surface: 100, terrace: 'oui', surfaceTerrace: 20, category: 'S+1', description: 'Appartement S+1', residence: this.listResidences[0] },
    { id: 2, appartNum: 2, floorNum: 0, surface: 130, terrace: 'non', surfaceTerrace: 0, category: 'S+2', description: 'Appartement S+2', residence: this.listResidences[0] },
    { id: 3, appartNum: 3, floorNum: 0, surface: 150, terrace: 'oui', surfaceTerrace: 30, category: 'S+3', description: 'Appartement S+3', residence: this.listResidences[1] },
    { id: 4, appartNum: 4, floorNum: 0, surface: 150, terrace: 'oui', surfaceTerrace: 30, category: 'S+3', description: 'Appartement S+3', residence: this.listResidences[1] },
  ];

  selectedResidenceApartments: Apartment[] = [];
  favoriteApartments: Apartment[] = [];
  searchSurface: number | undefined;
  likesMap: Map<number, number> = new Map<number, number>(); // Map pour stocker les likes
  likedApartment: Apartment[] = [];

  showApartments(residence: Residence): void {
    this.selectedResidenceApartments = this.listApartments.filter(apartment => apartment.residence.id === residence.id);
  }

  likeApartment(apartment: Apartment): void {
    const apartmentId = apartment.id;
    const currentLikes = this.likesMap.get(apartmentId) || 0;
    const newLikes = currentLikes + 1;

    this.likesMap.set(apartmentId, newLikes);
    localStorage.setItem('likesMap', JSON.stringify([...this.likesMap])); // Sauvegarder dans le stockage local
    console.log(`Liked apartment with id ${apartmentId}. Total likes: ${newLikes}`);
  }
  ngOnInit(): void {
    const storedLikes = localStorage.getItem('likesMap');
    if (storedLikes) {
      this.likesMap = new Map(JSON.parse(storedLikes));
    }
  }

  getLikes(apartment: Apartment): number {
    return this.likesMap.get(apartment.id) || 0;
  }

  searchApartments(): void {
    if (this.searchSurface === undefined || this.searchSurface === null || isNaN(this.searchSurface)) {
      console.log("Entrer la capacité de l'appartement");
      return; // Sortir de la fonction si aucune capacité n'est spécifiée
    }

    this.selectedResidenceApartments = this.listApartments.filter(apartment => apartment.surface === this.searchSurface);
  }

  likeApp(id: number) {
    this.likedApartment.push(this.listApartments[id]);
    console.log(this.likedApartment);
  }

}