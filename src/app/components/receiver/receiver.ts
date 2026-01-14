import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-receiver',
  imports: [CommonModule, FormsModule],
  templateUrl: './receiver.html',
  styleUrl: './receiver.css',
})
export class Receiver {
  receivedData: string = 'No data!';

  constructor(private sharedData: ShareDataService) {
    this.sharedData.data$.subscribe(data => {
      this.receivedData = data;
    })
  }
}
