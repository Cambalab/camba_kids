import { useEffect, useState } from 'react';
import { shuffleArray } from '../../utils';

const useImages = (): { images: string[] } => {
  const [getImages, setImages] = useState<string[]>([]);

  useEffect(() => {
    const peopleImages = [
      '223e7ed3-e3b3-4479-bed9-f0c41b194a8f.png',
      '88ac8dec-3067-4511-bf35-e20e49d8249c.png',
      '97621da9-a62c-4258-a776-62d51d197ea2.png',
      '7aef60ca-b680-4f87-b52e-5af69feb68a3.png',
      '95aa649c-bc4c-4ff9-b2e5-4101a60eb454.png',
      '03b4ca87-3599-43f6-a699-36e41d25899c.png',
      '2dc13aba-afd5-42fa-b8cb-20d437bf73f5.png',
      '0d8c762b-d262-433f-81e4-3769f4dfd3f1.png',
      '77945789-289c-4710-8c67-047b4ee05138.png',
      'ead70d75-3a7e-4c03-905c-7bb1e9cde902.png',
      '596da4d6-cabd-4c21-8d86-5e3562894ff6.png',
      '52ab7da9-40ae-4c93-804b-1c9c0773d65e.png',
      '4b0a49c4-6451-47b6-ab1c-1114d80e485e.png',
      '39766aa2-c9d0-420e-a3a8-3d7848902bb6.png',
      '5fb09785-a9a3-4e5e-9df7-8fb75cc80e47.png',
      '35ffcc50-8971-499c-81cc-4de7bfaffe3f.png',
    ]
    
    const kidsImages = [
      '39766aa2-c9d0-420e-a3a8-3d7848902bb6.png',
      '223e7ed3-e3b3-4479-bed9-f0c41b194a8f.png',
      '95aa649c-bc4c-4ff9-b2e5-4101a60eb454.png',
      '0d8c762b-d262-433f-81e4-3769f4dfd3f1.png',
      '596da4d6-cabd-4c21-8d86-5e3562894ff6.png',
      '35ffcc50-8971-499c-81cc-4de7bfaffe3f.jpeg',
      '03b4ca87-3599-43f6-a699-36e41d25899c.jpeg',
      '7aef60ca-b680-4f87-b52e-5af69feb68a3.jpeg',
      '52ab7da9-40ae-4c93-804b-1c9c0773d65e.jpeg',
      '88ac8dec-3067-4511-bf35-e20e49d8249c.jpeg',
      '77945789-289c-4710-8c67-047b4ee05138.jpeg',
      'ead70d75-3a7e-4c03-905c-7bb1e9cde902.jpeg',
      '4b0a49c4-6451-47b6-ab1c-1114d80e485e.jpeg',
      '5fb09785-a9a3-4e5e-9df7-8fb75cc80e47.jpeg',
      '2dc13aba-afd5-42fa-b8cb-20d437bf73f5.jpeg',
      '97621da9-a62c-4258-a776-62d51d197ea2.jpeg',
    ]


    const rootNamespace = 'images';
    const peopleNamespace = (filename: string) =>
      `${rootNamespace}/people/${filename}`;
    const kidsNamespace = (filename: string) =>
      `${rootNamespace}/kids/${filename}`;

    const generateImageNames = (
      images: string[],
      namespaceFunction: (imageName: string) => string,
    ): string[] =>
      images.map((imageName) =>
        namespaceFunction(imageName),
      );

    const landscapeImages = generateImageNames(
      peopleImages,
      peopleNamespace,
    );
    const itemImages = generateImageNames(kidsImages, kidsNamespace);

    const images = landscapeImages
      .concat(itemImages)
    const shuffledImages: string[] = shuffleArray(images);

    setImages(shuffledImages);
  }, []);

  return {
    images: getImages,
  };
};

export default useImages;
