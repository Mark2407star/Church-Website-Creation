import QRCodeLib from "qrcode";

type QRCodeProps = {
  text: string;
  size?: number;
};

export default async function QRCode({ text, size = 200 }: QRCodeProps) {
  let dataUrl: string;
  try {
    dataUrl = await QRCodeLib.toDataURL(text, {
      width: size,
      margin: 2,
      color: {
        dark: "#1a0533",
        light: "#ffffff",
      },
    });
  } catch {
    // Fallback: render a placeholder
    return (
      <div
        style={{ width: size, height: size }}
        className="bg-gray-200 rounded flex items-center justify-center text-gray-500 text-sm"
      >
        QR unavailable
      </div>
    );
  }

  return (
    <img
      src={dataUrl}
      alt="QR Code for offering payment"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
