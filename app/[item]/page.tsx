import { ImageDetail } from "@/components/image/image-detail";

const ItemPage = async ({ params }: { params: { item: string } }) => {
  return (
    <main className="flex min-h-screen py-24 w-full justify-center overflow-auto">
      <ImageDetail item={params.item} />
    </main>
  );
};

export default ItemPage;
