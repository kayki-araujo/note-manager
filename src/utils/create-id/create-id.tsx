export const createId = () =>
  Array.from(Array(4), () =>
    Array.from(Array(4), () =>
      Math.floor(Math.random() * 36).toString(36)
    ).join('')
  ).join('-');
