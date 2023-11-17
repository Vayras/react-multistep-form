import { FormWrapper } from "../FormWrapper"

type VideoType = {
  VideoType: string
}

type VideoTypeProps = VideoType & {
  updateFields: (fields: Partial<VideoType>) => void
}

const VideoTypeObj:Record<string, string>  ={
    "horizontal Video":"horizontal Video",
    "Vertical Video":"Vertical Video",
    "Square Video":"Square Video",
    "Channel Assets":"Channel Assets",
    "Other Video":"Other Video",
}

export function VideoType({
    VideoType,
  updateFields,
}: VideoTypeProps) {


  return (
    <FormWrapper title="Select Video Type">
     {Object.keys(VideoTypeObj).map((key) => (
        <div key={key}>
          <label>{key}</label>
          <input
            autoFocus
            required
            type="radio"
            value={VideoTypeObj[key]}
            name="VideoType"
            checked={VideoType === VideoTypeObj[key]}
            onChange={() => updateFields({ VideoType: VideoTypeObj[key] })}
          />
        </div>
      ))}
    </FormWrapper>
  )
}
