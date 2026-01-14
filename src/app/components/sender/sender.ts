import { Component } from '@angular/core';
import { ShareDataService } from '../../services/share-data-service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-sender',
  imports: [CommonModule, FormsModule],
  templateUrl: './sender.html',
  styleUrl: './sender.css',
})
export class Sender {

  input: string='';
  constructor(private shareData: ShareDataService) { }

  sendData() {
    this.shareData.sendData(this.input);
  }
}
