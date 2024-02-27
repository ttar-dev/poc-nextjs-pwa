"use client";

import useSWR from "swr";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Offline</h1>
      <Video />
    </main>
  );
}

const Video = () => {
  const { data, error, isLoading } = useSWR(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    async (url) => {
      const response = await fetch(url);
      return response.blob();
    }
  );

  if (isLoading) return <div>Loading video...</div>;
  if (error) return <div>Error loading video</div>;

  const videoUrl = URL.createObjectURL(data as Blob);

  return (
    <>
      {!isLoading && (
        <video controls autoPlay={true}>
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}
    </>
  );
};
