import { NotesProvider } from '@contexts';
import { mergeProviders } from '../../utils/merge-providers';

const ROOT_PROVIDERS_LIST = [NotesProvider];

export const RootProviders = mergeProviders(ROOT_PROVIDERS_LIST);
