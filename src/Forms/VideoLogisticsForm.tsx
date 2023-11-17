import { FormWrapper } from "../FormWrapper"
import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

type VideoLogistics = {
  VideoTitle: string
  PublishDate: string
  FinalLength:string
}

type VideoLogisticsProps = VideoLogistics & {
  updateFields: (fields: Partial<VideoLogistics>) => void
}

export function VideoLogisticsForm({
  VideoTitle,
  PublishDate,
  FinalLength,
  updateFields,
}: VideoLogisticsProps) {
  return (
    <FormWrapper title="Video logistics">
      <label>Video Title</label>
      <input
        autoFocus
        required
        type="text"
        value={VideoTitle}
        onChange={e => updateFields({ VideoTitle: e.target.value })}
      />
      <label>Publish Date (PST/GMT-7 Time)</label>
     
       <DatePicker selected={PublishDate} onChange={(date) => updateFields({ PublishDate: date })} />
      <label>Final Length</label>
      <input
        required
        type="text"
        value={FinalLength}
        onChange={e => updateFields({ FinalLength: e.target.value })}
      />
    </FormWrapper>
  )
}
