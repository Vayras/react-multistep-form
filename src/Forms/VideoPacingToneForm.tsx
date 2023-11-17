import { FormWrapper } from "../FormWrapper"
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type VideoPacingTone = {
  VideoPace: string
  VideoTone: string
}

type VideoPacingToneProps = VideoPacingTone & {
  updateFields: (fields: Partial<VideoPacingTone>) => void
}

const VideoPaceObj:Record<string, string>={
  "Slow-paced ":"Slow-paced ",
  "Medium-paced" :"Medium-paced ",
  "Fast-paced":"Fast-paced"
}

const VideoToneObj:Record<string, string>={
  "Funny  ":"Funny  ",
  "Serious " :"Serious  ",
  "Professional ":"Professional ",
  "Elegant ":"Elegant   ",
  "Casual  " :"Casual   ",
  "Informational  ":"Informational  ",
  "Entertaining ":"Entertaining ",
}

export function VideoPacingToneForm({
  VideoPace,
  VideoTone,
  updateFields,
}: VideoPacingToneProps) {
  return (
    <FormWrapper title="Video logistics">
      <h1>Video Pace </h1>
      <br />
      {Object.keys(VideoPaceObj).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            autoFocus
            required
            type="radio"
            value={VideoPaceObj[key]}
            name="VideoType"
            checked={VideoPace === VideoPaceObj[key]}
            onChange={() => updateFields({ VideoPace: VideoPaceObj[key] })}
          />
        </div>
      ))}
      <br />
       <h1>Video Tone </h1>
      <br />
      {Object.keys(VideoToneObj).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            autoFocus
            required
            type="radio"
            value={VideoToneObj[key]}
            name="VideoType"
            checked={VideoTone === VideoToneObj[key]}
            onChange={() => updateFields({ VideoTone: VideoToneObj[key] })}
          />
        </div>
      ))}
    </FormWrapper>
  )
}
