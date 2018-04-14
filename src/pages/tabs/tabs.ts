import { Component } from '@angular/core';

import { BasicPage } from '../modals/basic/page';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = BasicPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
