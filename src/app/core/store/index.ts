import { ActionReducerMap } from '@ngrx/store';
import { userReducer, UserState } from './user/user.reducer';

export interface AppState {
  userState: UserState;
  // creatorState: CreatorState;
}

export const reducers: ActionReducerMap<AppState> = {
  userState: userReducer,
  // creatorState: creatorReducer
};
