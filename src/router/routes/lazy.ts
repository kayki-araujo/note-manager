import loadable from '@loadable/component';

export const Create = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.Create,
});

export const EditNote = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.EditNote,
});

export const Feed = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.Feed,
});

export const Note = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.Note,
});

export const NotFound = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.NotFound,
});

export const SignIn = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.SignIn,
});

export const SignUp = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.SignUp,
});

export const User = loadable(() => import('@pages'), {
  resolveComponent: (m) => m.User,
});
