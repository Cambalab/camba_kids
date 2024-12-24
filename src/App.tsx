import livedj from './svg/live-dj-iso-black.svg';
import { ReactComponent as Octocat } from './svg/github.svg';
import './App.css';
import useImages from './hooks/tile-game/useImages';
import TileGameComponent from './components/tile-game/TileGame';

import { takeSome } from './utils';

import { useTileAsset } from './hooks/tile-game/useTileAsset';
import { TileAsset as TileAssetT } from './types';

function App() {
  const { images } = useImages();
  const { create: createTileAsset } = useTileAsset();

  const filteredImages = takeSome(images, 18);
  const tileAssets = filteredImages.map(
    (image: string): TileAssetT => createTileAsset(image),
  );

  return (
    <div className="App h-screen max-h-screen overflow-y-hidden">
      <div className="fixed bottom-2 left-2 h-12 w-12">
        <a
          href="https://github.com/Cambalab/camba_kids"
          target="_blank"
          rel="noreferrer"
        >
          <Octocat
            className={`
            transition duration-500
            cursor-default hover:cursor-pointer
            fill-accent-s-300 stroke-accent-s-700
            hover:fill-primary-300 hover:stroke-primary-700 hover:animate-jump
            active:fill-accent-p-500 active:stroke-accent-p-900
            active:shadow-2xl active:scale-95
          `}
          />
        </a>
      </div>
      <TileGameComponent tiles={tileAssets} />
    </div>
  );
}

export default App;
