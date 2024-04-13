import { ImageDetail } from "./components/image/image-detail";

export default function Home() {
  return (
    <main className="flex min-h-screen py-24 w-full justify-center overflow-auto">
      <ImageDetail item={""} />
    </main>
  );
}
