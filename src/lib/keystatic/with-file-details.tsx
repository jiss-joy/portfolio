import type { fields } from '@keystatic/core'

type FileField = ReturnType<typeof fields.file>

function formatSize(bytes: number) {
  return bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / (1024 * 1024)).toFixed(1)} MB`
}

/**
 * Keystatic's file field only renders Choose/Remove/Download buttons, so picking a replacement file
 * looks like nothing happened. This shows the selected file's name and size under those buttons.
 */
export function withFileDetails<Field extends FileField>(field: Field): Field {
  return {
    ...field,
    Input(props: Parameters<Field['Input']>[0]) {
      return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <field.Input {...props} />
          {props.value
            ? (
                <span style={{ fontSize: 13, opacity: 0.7 }}>
                  {props.value.filename}
                  {' · '}
                  {formatSize(props.value.data.byteLength)}
                </span>
              )
            : null}
        </div>
      )
    },
  }
}
