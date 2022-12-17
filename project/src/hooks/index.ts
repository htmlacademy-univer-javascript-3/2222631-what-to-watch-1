import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import type {UserState, AppDispatch} from '../types/user/user-state';

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<UserState> = useSelector;
