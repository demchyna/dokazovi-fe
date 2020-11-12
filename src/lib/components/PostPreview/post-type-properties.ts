import { PostTypeEnum } from '../../types';

export type PostTypePropertiesType = {
  [key in PostTypeEnum]: {
    cyrillic: string;
  };
};

export const postTypeProperties: PostTypePropertiesType = {
  [PostTypeEnum.DOPYS]: {
    cyrillic: 'Допис',
  },
  [PostTypeEnum.STATTYA]: {
    cyrillic: 'Стаття',
  },
};
