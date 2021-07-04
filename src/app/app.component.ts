import { Component, OnInit } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faLock, faGlobe, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  envelopeIcon: IconDefinition = faEnvelope;
  lockIcon: IconDefinition = faLock;
  globeIcon: IconDefinition = faGlobe;
  shoppingBagIcon: IconDefinition = faShoppingBag;

  ngOnInit() {
  }
}
