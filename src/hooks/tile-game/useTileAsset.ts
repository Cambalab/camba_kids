import { TileAsset } from '../../types';
import { TileAssetI } from '../../interfaces';
import { extractUuid } from '../../utils';

export const useTileAsset = (): TileAssetI => {
  function create(image: string): TileAsset {
    return {
      image,
      twinId: extractUuid(image) as string,
    };
  }

  function equal(
    { twinId: twinIdA }: TileAsset,
    { twinId: twinIdB }: TileAsset,
  ): boolean {
    return twinIdA === twinIdB;
  }

  return {
    create,
    equal,
  };
};
