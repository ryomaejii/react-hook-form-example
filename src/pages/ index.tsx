import { SampleForm } from "../components/SampleForm";

export const TopPage = () => {
  return (
    <main className="w-full max-w-screen-sm mx-auto pt-10 p-4">
      <h1 className="text-2xl font-bold">
        React Hook Form コンポーネント設計例
      </h1>
      <div className="mt-10">
        <SampleForm />
      </div>
    </main>
  );
};
