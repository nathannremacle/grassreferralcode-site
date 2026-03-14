import { ImageResponse } from "next/og";
import { headers } from "next/headers";
import { SITE_URL } from "@/lib/constants";
import grassLogo from "./grass-logo.png";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

/**
 * Favicon — Official Grass logo on dark background (transparency preserved).
 */
export default async function Icon() {
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
          width={32}
          height={32}
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { ...size }
  );
}
