import { FormWrapper } from "../FormWrapper"

type AddonData = {
  Addon: string
}

type AddonFormProps = AddonData & {
  updateFields: (fields: Partial<AddonData>) => void
}

export function AddonForm({
  Addon,
  updateFields,
}: AddonFormProps) {
  return (
    <FormWrapper title="Addon">
      <label>Premier Pro</label>
      <input
        autoFocus
        required
        type="radio"
        value={Addon}
        onChange={e => updateFields({ Addon: "Premier Pro" })}
      />
    </FormWrapper>
  )
}
