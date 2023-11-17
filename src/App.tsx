import { FormEvent, useState } from "react"
import { VideoLogisticsForm } from "./Forms/VideoLogisticsForm"
import { AddonForm } from "./Forms/AddonForm"
import { useMultistepForm } from "./useMultistepForm"
import { VideoDetails } from "./Forms/VideoDetails"
import {VideoType} from "./Forms/SelectVideoType" 
import { createClient } from '@supabase/supabase-js';
import { VideoUploadForm } from "./Forms/VideoUpload"
import {VideoPacingToneForm}from "./Forms/VideoPacingToneForm"




type FormData = {
  VideoType:string
  FootageLength: string
  FootageSize: string
  Addon: string
  VideoTitle: string
  PublishDate: string
  FinalLength: string
  VideoPace: string
  VideoTone: string
 
}

const INITIAL_DATA: FormData = {
  VideoType:"",
  FootageLength: "",
  FootageSize: "",
  Addon: "",
  VideoTitle: "",
  PublishDate: "",
  FinalLength: "",
  VideoPace: "",
  VideoTone: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <VideoType {...data} updateFields={updateFields}/>,
      <VideoDetails {...data} updateFields={updateFields} />,
      <AddonForm {...data} updateFields={updateFields} />,
      <VideoLogisticsForm {...data} updateFields={updateFields} />,
      <VideoPacingToneForm {...data} updateFields={updateFields} />,
      <VideoUploadForm/>
    ])

  function onSubmit(e: FormEvent) {
    console.log(data)
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
    
  }

  return (
    <div
      style={{
        position: "relative",
        background: "white",
        border: "1px solid black",
        padding: "2rem",
        margin: "1rem",
        borderRadius: ".5rem",
        fontFamily: "Arial",
        maxWidth: "max-content",
      }}
    >
      <form onSubmit={onSubmit}>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIndex + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  )
}

export default App
