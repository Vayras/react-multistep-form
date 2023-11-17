import React from "react";
import { FormWrapper } from "../FormWrapper";
import Select from "react-select";

type VideoDetails = {
  FootageLength: string;
  FootageSize: string;
};

type VideoDetailsProps = VideoDetails & {
  updateFields: (fields: Partial<VideoDetails>) => void;
};

const options = [
  { value: 'Less than 3 minutes of new footage', label: 'Less than 3 minutes of new footage' },
  { value: '3 to 6 minutes of new footage', label: '3 to 6 minutes of new footage' },
  { value: '6 to 9 minutes of new footage', label: '6 to 9 minutes of new footage' },
  { value: '9 to 15 minutes of new footage', label: '9 to 15 minutes of new footage' },
  { value: 'More than 15 minutes of new footage', label: 'More than 15 minutes of new footage' },
];

const options2 = [
  { value: 'Less than 2 GB of new footage', label: 'Less than 2 GB of new footage' },
  { value: '2 to 4 GB of new footage', label: '2 to 4 GB of new footage' },
  { value: '4 to 7 GB of new footage', label: '4 to 7 GB of new footage' },
  { value: '7 to 10 GB of new footage', label: '7 to 10 GB of new footage' },
  { value: 'More than 10 GB of new footage', label: 'More than 10 GB of new footage' },
];

export function VideoDetails({
  FootageLength,
  FootageSize,
  updateFields,
}: VideoDetailsProps) {
  return (
    <FormWrapper title="Video Footage">
      <label>Footage Length</label>
      <Select
        options={options}
        value={options.find((opt) => opt.value === FootageLength)}
        onChange={(selectedOption: { value: string; label: string } | null) => {
          if (selectedOption) {
            updateFields({ FootageLength: selectedOption.value });
          }
        }}
      />
      <label>Footage Size</label>
      <Select
        options={options2}
        value={options2.find((opt) => opt.value === FootageSize)}
        onChange={(selectedOption: { value: string; label: string } | null) => {
          if (selectedOption) {
            updateFields({ FootageSize: selectedOption.value });
          }
        }}
      />
    </FormWrapper>
  );
}
