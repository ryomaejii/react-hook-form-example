import { RhfInput } from "../Input";
import { useSampleForm } from "./useSampleForm";

export const SampleForm = () => {
  const { control, handleSubmit } = useSampleForm();

  return (
    <div className="space-y-8">
      <form
        onSubmit={handleSubmit((data) => console.log(data))}
        className="space-y-4"
      >
        <RhfInput control={control} name="name" placeholder="名前" />
        <RhfInput control={control} name="email" placeholder="メールアドレス" />
        <RhfInput control={control} name="password" placeholder="パスワード" />
        <button
          type="submit"
          className="bg-blue-500 text-white rounded-lg px-4 py-2 mt-4"
        >
          送信
        </button>
      </form>
    </div>
  );
};
