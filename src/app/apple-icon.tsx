import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/constants";
import grassLogo from "./grass-logo.png";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/**
 * Apple touch icon — Official Grass logo on dark background (transparency preserved).
 */
export default async function AppleIcon() {
  const headersList = await headers();
  const host = headersList.get("host");
  const proto = headersList.get("x-forwarded-proto") ?? "https";
  const base = host ? `${proto}://${host}` : SITE_URL;
  const imageSrc = `${base}${grassLogo.src}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111111",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageSrc}
          alt=""
          width={180}
          height={180}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
