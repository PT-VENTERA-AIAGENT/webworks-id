import { ImageResponse } from "next/og"

export const runtime = "edge"
export const size = { width: 180, height: 180 }
export const contentType = "image/png"

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#005cdf",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "36px",
          fontFamily: "sans-serif",
        }}
      >
        <span style={{ color: "white", fontSize: "100px", fontWeight: 900, letterSpacing: "-2px" }}>
          P
        </span>
      </div>
    ),
    { ...size }
  )
}
