import { ImageResponse } from "next/og";

export const alt = "Fotsing Ndigue Devy — DevOps Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          backgroundColor: "#0a0e14",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ color: "#00ff9c", fontSize: 32, marginBottom: 20 }}>
          $ whoami
        </div>
        <div
          style={{
            color: "#e6edf3",
            fontSize: 72,
            fontWeight: 700,
            marginBottom: 20,
          }}
        >
          Fotsing Ndigue Devy
        </div>
        <div
          style={{
            background: "linear-gradient(135deg, #00ff9c 0%, #22d3ee 100%)",
            backgroundClip: "text",
            color: "transparent",
            fontSize: 42,
            marginBottom: 40,
          }}
        >
          DevOps Engineer
        </div>
        <div style={{ color: "#8b949e", fontSize: 28 }}>
          Linux · Docker · Kubernetes · Terraform · AWS
        </div>
      </div>
    ),
    { ...size }
  );
}
