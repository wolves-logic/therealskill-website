import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
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
          borderRadius: '34px',
        }}
      >
        <svg width="112" height="112" viewBox="0 0 20 20">
          <polygon points="11,2 5,11 9,11 9,18 15,9 11,9" fill="#7EE8A2" />
        </svg>
      </div>
    ),
    { ...size }
  )
}
