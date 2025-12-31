import { ImageResponse } from '@vercel/og';

export const runtime = 'edge';

export async function GET(req) {
  const { searchParams } = new URL(req.url);

  const title =
    searchParams.get('title') || 'عنوان الخبر الرئيسي';

  const subtitle =
    searchParams.get('subtitle') || 'سطر توضيحي مختصر للخبر';

  const kicker =
    searchParams.get('kicker') || '#إسناد_نيوز';

  const image =
    searchParams.get('image') ||
    'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee';

  return new ImageResponse(
    (
      <div
        dir="rtl"
        style={{
          width: '1080px',
          height: '1080px',
          position: 'relative',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'flex-start',
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          fontFamily: 'Cairo',
          color: '#ffffff',
        }}
      >
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.25), rgba(0,0,0,0.05))',
          }}
        />

        {/* Texture Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage:
              'url(https://www.transparenttextures.com/patterns/asfalt-light.png)',
            opacity: 0.12,
          }}
        />

        {/* Content */}
        <div
          style={{
            position: 'relative',
            padding: '70px 80px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            gap: 20,
          }}
        >
          {/* Kicker */}
          <div
            style={{
              fontSize: 28,
              fontWeight: 700,
              opacity: 0.85,
            }}
          >
            {kicker}
          </div>

          {/* Title */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              lineHeight: 1.2,
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              fontSize: 38,
              fontWeight: 600,
              opacity: 0.9,
              maxWidth: '90%',
            }}
          >
            {subtitle}
          </div>
        </div>
      </div>
    ),
    {
      width: 1080,
      height: 1080,
    }
  );
}
