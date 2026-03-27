import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'my-app',
  template: `
    <p>
      Start editing to see some magic happen :)
    </p>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  name = 'Angular';
  apiUrl = 'https://www.techiediaries.com/api/data.json';
  error: string | null = null;
  constructor(private httpClient: HttpClient){}

  async ngOnInit(){
    this.fetchData();
  }

  private async fetchData(): Promise<void>
  {
    try 
    {
      const data = await this.httpClient.get(this.apiUrl).toPromise();
      console.log("Data: " + JSON.stringify(data));
    } catch(err) {
        this.error = 'failed to load data';
        console.log(this.error + err)
    }
  }
}
