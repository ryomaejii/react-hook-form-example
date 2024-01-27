import { RhfInput } from "components/Input";
import { RhfSelect } from "components/Select";
import { useState } from "react";
import { useSampleForm } from "./useSampleForm";

export const SampleForm = () => {
  const { control, handleSubmit } = useSampleForm();

  const [resultText, setResultText] = useState<string>();

  return (
    <div className="space-y-10">
      <form
        onSubmit={handleSubmit((data) => setResultText(JSON.stringify(data)))}
        className="space-y-4"
      >
        <RhfInput control={control} name="name" placeholder="名前" />
        <RhfInput control={control} name="email" placeholder="メールアドレス" />
        <RhfInput control={control} name="password" placeholder="パスワード" />
        <RhfSelect
          control={control}
          name="gender"
          options={[
            {
              value: "male",
              label: "男性",
            },
            {
              value: "female",
              label: "女性",
            },
            {
              value: "other",
              label: "その他",
            },
          ]}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2.5 px-5 rounded-lg"
        >
          送信
        </button>
      </form>
      {resultText && (
        <div className="space-y-2">
          <h3>送信結果</h3>
          <p className="text-xs bg-gray-100 p-4 rounded">{resultText}</p>
        </div>
      )}
    </div>
  );
};
