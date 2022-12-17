import {NameSpace} from '../../const';
import {UserState} from '../../types/user/user-state';
import {AuthorizationStatus} from '../../const';

export const getAuthorizationStatus = (state: UserState): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAvatarUrl = (state: UserState): string | null => state[NameSpace.User].avatar;
