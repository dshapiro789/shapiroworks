import { ImageResponse } from 'next/og';

// Image metadata
export const size = {
    width: 180,
    height: 180,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            // ImageResponse JSX element
            <div
                style={{
                    fontSize: 120,
                    background: 'black',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#3B82F6', // Electric Blue (Primary)
                    borderRadius: '18%',
                }}
            >
                {/* Abstract "S" Monogram in Constellation Style */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="110"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    {/* Main S Path */}
                    <path d="M17 7H7a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h10a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H7" />

                    {/* Constellation Nodes (Dots) */}
                    <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="7" cy="7" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="7" cy="11" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="13" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="17" cy="17" r="1.5" fill="currentColor" stroke="none" />
                    <circle cx="7" cy="17" r="1.5" fill="currentColor" stroke="none" />
                </svg>
            </div>
        ),
        // ImageResponse options
        {
            ...size,
        }
    );
}
