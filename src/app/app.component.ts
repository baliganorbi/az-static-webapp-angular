import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<div> {{message}} </div>`,
})
export class AppComponent {
  message = 'My Azure Static WebApp';

  constructor(private http: HttpClient) {
    this.http.get('/api/message')
      .subscribe(
        (resp: any) => this.message = resp.text, // Success callback
        (error) => console.error('Error:', error), // Error callback
        () => console.log('Request completed') // Completion callback
      );
  }
}
