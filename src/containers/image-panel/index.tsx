import React, { useEffect, useState } from "react";
import { Button } from "../../components/button";
import * as s from "./styles";

/**
 * Container which holds the images of the dog breeds
 * @param dogImages Array of dog image src strings
 * @param selectedDog Curently selected dog breed
 */

export interface IImagePanelProps {
  dogImages: string[];
  selectedDog: string;
}

const STEP = 20;

export const ImagePanel: React.FC<IImagePanelProps> = ({
  dogImages,
  selectedDog,
}) => {
  const [dogsToShow, setDogsToShow] = useState<number>(STEP);

  useEffect(() => {
    // Reset steps when there is a new dog
    setDogsToShow(STEP);
  }, [selectedDog]);

  return (
    <div>
      <s.title> Who let the {selectedDog}s out???</s.title>
      <s.imagePanel>
        {dogImages
          .filter((_, index) => index < dogsToShow)
          .map((img) => (
            <s.image src={img} alt="" key={img} data-testid={"image"} />
          ))}
      </s.imagePanel>
      {dogsToShow < dogImages.length && (
        <s.buttonContainer>
          <Button
            text={"GIVE ME MOAR"}
            onClick={() =>
              setDogsToShow((prevDogsToShow) => prevDogsToShow + STEP)
            }
          />
        </s.buttonContainer>
      )}
    </div>
  );
};
