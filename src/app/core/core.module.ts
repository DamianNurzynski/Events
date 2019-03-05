import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/user/user.effects';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user/user.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { eventCreatorReducer } from './store/event-creator/event-creator.reducer';
import { EventCreatorEffects } from './store/event-creator/event-creator.effects';
import { AngularFireDatabaseModule } from '@angular/fire/database';


@NgModule({
  imports: [
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({
      user: userReducer
    }),
    EffectsModule.forFeature([EventCreatorEffects]),
    StoreModule.forFeature('event-creator', eventCreatorReducer),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    })
  ],
  declarations: [],
  providers: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only'
      );
    }
  }

  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
