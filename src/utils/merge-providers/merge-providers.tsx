import { FC, ReactElement } from 'react';
import { SingleChildrenProp } from '../../types/single-children-prop';

export const mergeProviders =
  (providers: FC<SingleChildrenProp>[]): FC<{ children: ReactElement }> =>
  ({ children }) =>
    providers.reduce((p, Curr) => <Curr>{p}</Curr>, children);
