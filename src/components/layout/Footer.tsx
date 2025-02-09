"use client";
import React from "react";
import FAQ from "../shared/faq/FAQ";
import { StartToday } from "../shared/start-today/StartToday";
import { Section } from "../common/section/Section";

export function Footer() {
  return (
    <Section>
      {/* <FAQ /> */}
      <StartToday />
    </Section>
  );
}
