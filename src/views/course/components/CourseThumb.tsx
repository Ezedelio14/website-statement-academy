import { Button } from "@/components/common/button/Button";
import { Section } from "@/components/common/section/Section";
import React from "react";
import { useComponentsTr } from "../../../../locales/utils/useComponentsTr";
import PlayVideoSvg from "@/assets/svg/PlayVideoSvg";
import ShareSvg from "@/assets/svg/ShareSvg";
import ReactPlayer from "react-player";

interface Props {
  title?: string;
  trailer?: string;
  lessons?: number;
  description?: string;
  duration?: number;
  mentor?: string;
  open?: boolean;
  onOpenTrailer: () => void;
}

export function CourseThumb({ onOpenTrailer, ...props }: Props) {
  const { componentsTr } = useComponentsTr();

  return props?.open ? (
    <div className="relative z-50 h-[722px] flex justify-center items-center">
      <ReactPlayer
        width="100%"
        height="100%"
        playing={true}
        controls={true}
        url={props?.trailer}
      />
    </div>
  ) : (
    <Section className="relative z-50 h-[722px] flex justify-center items-center">
      <div className="flex flex-col items-center text-center w-[592px]">
        <span className="text-[56px]">{props?.title}</span>
        {props?.mentor && (
          <span className="font-[400]">
            Mentor: <span className="font-bold">{props.mentor}</span>
          </span>
        )}
        <span className="mt-[24px] w-[500px] text-center">
          {props?.description}
        </span>
        <div className="flex items-center justify-center mt-4">
          {props?.lessons} Aulas
          <div className="h-[24px] w-[1px] bg-white mx-3" />
          {props?.duration}h
        </div>

        <div className="flex justify-center mt-[32px] mb-[48px]">
          <Button label={componentsTr("components.Labels.create-account")} />
        </div>

        <div className="flex items-center justify-center w-full gap-x-[64px]">
          <button
            className="flex flex-col gap-y-4 items-center"
            onClick={onOpenTrailer}
          >
            <PlayVideoSvg />
            <span>{componentsTr("components.Labels.see-trailer")}</span>
          </button>

          <button className="flex flex-col items-center gap-y-4">
            <ShareSvg />
            <span>{componentsTr("components.Labels.share")}</span>
          </button>
        </div>
      </div>
    </Section>
  );
}
