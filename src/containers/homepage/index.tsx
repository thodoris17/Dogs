import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown } from "../../components/dropdown";
import { ImagePanel } from "../image-panel";
import * as s from "./styles";

/**
 * Homepage of Dogs.com
 * @param dogs Array of dog breeds
 */

interface IProps {
  dogs: string[];
}

export const Homepage: React.FC<IProps> = ({ dogs }) => {
  const [selectedDog, setSelectedDog] = useState<string>();
  const [selectedDogImages, setSelectedDogImages] = useState<string[]>([]);

  useEffect(() => {
    if (selectedDog) {
      axios
        .get(`https://dog.ceo/api/breed/${selectedDog}/images`)
        .then((res) => {
          const dogs = res.data.message;
          setSelectedDogImages(dogs);
          console.info(JSON.stringify(dogs));
        });
    }
  }, [selectedDog]);

  return (
    <s.container>
      <s.title>
        We both know why you are here. <br />
        Select from the dropdown below the good boys that you want to see.
      </s.title>
      <s.dropdownContainer>
        <Dropdown values={dogs} onChange={(dog) => setSelectedDog(dog)} />
      </s.dropdownContainer>
      <s.imagePanelContainer>
        {selectedDog && (
          <ImagePanel dogImages={selectedDogImages} selectedDog={selectedDog} />
        )}
      </s.imagePanelContainer>
    </s.container>
  );
};
