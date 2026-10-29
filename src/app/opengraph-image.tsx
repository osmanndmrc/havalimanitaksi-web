import { ImageResponse } from "next/og";
import { siteData } from "@/data/data";

// Link paylaşıldığında (WhatsApp, Facebook, X) görünen önizleme görseli.
export const alt = `${siteData.brand.name} – 7/24 Resmi Havaalanı Taksisi`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#18181b",
          color: "white",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 18,
              background: "#facc15",
              color: "#231b00",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            {siteData.brand.airportIata}
          </div>
          <div style={{ fontSize: 30, color: "#facc15", fontWeight: 700 }}>
            {siteData.brand.slogan}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.05 }}>
            {siteData.brand.name}
          </div>
          <div style={{ fontSize: 34, color: "#d4d4d8" }}>
            Terminal çıkışında 7/24 hazır taksi · İlçe ve şehirlerarası transfer
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 40, fontWeight: 800 }}>
          <div
            style={{
              display: "flex",
              padding: "14px 28px",
              borderRadius: 16,
              background: "#facc15",
              color: "#231b00",
            }}
          >
            {siteData.contact.phoneLandline}
          </div>
        </div>
      </div>
    ),
    size
  );
}
