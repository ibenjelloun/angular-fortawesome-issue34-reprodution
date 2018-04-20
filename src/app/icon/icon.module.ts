import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';

import { faCircleNotch } from '@fortawesome/pro-solid-svg-icons';
library.add(faCircleNotch);

@NgModule({
  imports: [FontAwesomeModule]
})
export class IconModule {}
