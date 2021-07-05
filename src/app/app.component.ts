import { Component } from '@angular/core';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUser, faEnvelope, faLock, faGlobe, faShoppingBag, faSkiingNordic } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  userIcon: IconDefinition = faUser;
  envelopeIcon: IconDefinition = faEnvelope;
  lockIcon: IconDefinition = faLock;
  globeIcon: IconDefinition = faGlobe;
  shoppingBagIcon: IconDefinition = faShoppingBag;
  skiingNordicIcon: IconDefinition = faSkiingNordic;
}
