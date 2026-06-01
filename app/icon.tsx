import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0A0A0F',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '6px',
        }}
      >
        <svg width="20" height="20" viewBox="0 0 20 20">
          <polygon points="11,2 5,11 9,11 9,18 15,9 11,9" fill="#7EE8A2" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
