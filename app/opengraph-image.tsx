import { ImageResponse } from 'next/og';

export const alt = 'FORMA — Webdesign, maatwerk software en SEO in Zeeland';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px',
          backgroundColor: '#F3EEE4',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              transform: 'skewX(-12deg)',
              backgroundColor: '#B9C9B4',
              padding: '10px 20px',
            }}
          >
            <div style={{ display: 'flex', transform: 'skewX(12deg)', fontSize: 28, fontWeight: 900, color: '#17140F' }}>
              FORMA
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 64,
              fontWeight: 900,
              lineHeight: 1.05,
              color: '#17140F',
              maxWidth: '900px',
            }}
          >
            Webdesign, software &amp; SEO voor MKB in Zeeland
          </div>
          <div style={{ display: 'flex', fontSize: 28, color: '#17140F', opacity: 0.65 }}>
            Vaste prijs · Geen vakjargon · Middelburg
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
