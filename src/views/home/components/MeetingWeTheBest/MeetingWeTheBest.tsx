import { Section } from "@/components/common/section/Section";
import { useHomeTr } from "../../../../../locales/utils/useHomeTr";
import { Button } from "@/components/common/button/Button";
import PlayVideoSvg from "@/assets/svg/PlayVideoSvg";

export function MeetingWeTheBest() {
  const { homeTr } = useHomeTr();
  return (
    <Section className="flex flex-col gap-y-[80px] items-center py-[80px]">
      <h2 className="text-[2rem] font-bold text-center md:text-left">
        {homeTr("home.Meeting-with-best.title")}
      </h2>
      <div className="relative bg-white w-full h-[716px] rounded-[8px]">
        <div className="w-full h-full relative">
          <div className="w-full  opacity-gradient-right absolute left-0 h-full" />
          <div className="h-full w-full flex flex-col items-center justify-center relative z-10 gap-y-6">
            <div>
              <span className="text-[1rem] text-centert bg-white text-gray-1 rounded-[16px] px-4 py-[6px]">
                {homeTr("home.Meeting-with-best.new")}
              </span>
            </div>

            <h3 className="text-[3rem] font-bold text-center md:text-left">
              {homeTr("home.Meeting-with-best.item.title")}
            </h3>

            <p className="text-lg text-white text-center md:text-left">
              {homeTr("home.Meeting-with-best.item.description")}
            </p>

            <Button
              variant="outline"
              onClick={() => alert()}
              leftElement={<PlayVideoSvg />}
              className="[&_div]:!text-white"
              label={homeTr("home.Meeting-with-best.item.see-trailer")}
            />
          </div>
        </div>
      </div>
    </Section>
  );
}
