import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "profio.id — Company Profile Agency #1 Indonesia"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #005cdf 0%, #0047ab 60%, #1e3a8a 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", marginBottom: "28px" }}>
          <span style={{ color: "white", fontSize: "52px", fontWeight: 900, letterSpacing: "-1px" }}>
            profio
          </span>
          <span style={{ color: "#7dd3fc", fontSize: "52px", fontWeight: 900, letterSpacing: "-1px" }}>
            .id
          </span>
        </div>
        <p
          style={{
            color: "white",
            fontSize: "38px",
            fontWeight: 700,
            textAlign: "center",
            margin: "0 0 20px",
            lineHeight: 1.25,
            maxWidth: "900px",
          }}
        >
          Company Profile Agency #1 Indonesia
        </p>
        <p
          style={{
            color: "rgba(255,255,255,0.75)",
            fontSize: "22px",
            textAlign: "center",
            margin: "0 0 48px",
            maxWidth: "780px",
            lineHeight: 1.4,
          }}
        >
          AI-Powered · Bilingual · Draft Pertama 72 Jam · Garansi Ketepatan Waktu
        </p>
        <div style={{ display: "flex", gap: "20px" }}>
          {["500+ Company Profile", "12 Industri", "98% Kepuasan"].map((stat) => (
            <div
              key={stat}
              style={{
                background: "rgba(255,255,255,0.15)",
                border: "1px solid rgba(255,255,255,0.25)",
                borderRadius: "12px",
                padding: "14px 28px",
                color: "white",
                fontSize: "18px",
                fontWeight: 600,
              }}
            >
              {stat}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  )
}
