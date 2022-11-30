import { FC } from 'react';

type SectionTitleProps = {
  title: string;
};

export const SectionTitle: FC<SectionTitleProps> = ({ title }) => {
  return <h2>{title}</h2>;
};
