import { Dispatch, FC } from 'react';

export type UseStateReturn<T> = [T, Dispatch<T>];
