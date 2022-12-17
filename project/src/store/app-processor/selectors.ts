import {UserState} from '../../types/user/user-state';
import {NameSpace} from '../../const';

export const getError = (state: UserState): string | null => state[NameSpace.App].error;
