import { ENV } from "@/utils/routes";
import ReactGA from "react-ga4";

interface IAnalyticsParams {
  type: "pageview" | "event";
  page?: {
    title: string;
    path: string;
  };
  event?: {
    category: string;
    action: string;
    label?: string;
    value?: any;
    nonInteraction?: boolean;
  };
}

export const handleSendPageView = (params: IAnalyticsParams) => {
  return ReactGA.send({
    hitType: "pageview",
    page: params?.page?.path,
    title: params?.page?.title,
  });
};

export const handleRegisterEvent = (params: IAnalyticsParams) => {
  return ReactGA.event({
    category: params?.event?.category as string,
    action: params?.event?.action as string,
    label: params?.event?.label,
    value: params?.event?.value,
    nonInteraction: params?.event?.nonInteraction,
  });
};

export function useConfigAnalytics() {
  if (ENV === "prod")
    ReactGA.initialize(process.env.FIREBASE_MEASUREMENT_ID ?? "");
}
