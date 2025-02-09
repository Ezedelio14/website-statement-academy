import FAQBtn from "./FAQBtn";
import React, { useState } from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";

export default function FAQ() {
  const [state, setState] = useState(1);
  const { componentsTr } = useComponentsTr();

  return (
    <div className="flex flex-col gap-y-[71px]">
      {Array(4)
        .fill(null)
        .map((_, index) => (
          <FAQBtn
            key={index}
            onClick={() => setState(index + 1)}
            label={componentsTr(
              `components.FAQ.question_and_answer.${index + 1}.question` as any
            )}
            description={componentsTr(
              `components.FAQ.question_and_answer.${index + 1}.answer` as any
            )}
            isSelected={index + 1 === state}
          />
        ))}
    </div>
  );
}
