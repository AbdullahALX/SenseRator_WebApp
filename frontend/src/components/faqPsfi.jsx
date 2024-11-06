import React from 'react';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { Icon } from '@iconify/react';
import features from './psfiData';

const FeaturesAccordion = () => {
  return (
    <section className="mx-auto w-full max-w-6xl py-20 sm:px-6 sm:py-32 lg:px-8 lg:py-20">
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 lg:flex-row lg:items-start lg:gap-12">
        <h2 className="px-2 text-3xl leading-7">
          <span className="inline-block lg:hidden">Features</span>
          <h2 className="hidden bg-gradient-to-br from-foreground-800 to-foreground-500 bg-clip-text pt-4 text-5xl font-semibold tracking-tight text-transparent dark:to-foreground-200 lg:inline-block">
            Pedestrian
            <br />
            Safety
            <br />
            Features
          </h2>
        </h2>
        <Accordion
          fullWidth
          keepContentMounted
          className="gap-3"
          itemClasses={{
            base: 'px-0 sm:px-6',
            title: 'font-medium',
            trigger: 'py-6 flex-row-reverse',
            content: 'pt-0 pb-6 text-base text-default-500',
          }}
          items={features}
          selectionMode="multiple"
        >
          {features.map((feature, i) => (
            <AccordionItem
              key={i}
              indicator={<Icon icon="lucide:plus" width={24} />}
              title={
                <div className="flex items-center gap-3">
                  <Icon icon={feature.icon} width={24} />
                  {feature.title}
                </div>
              }
            >
              {feature.content}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FeaturesAccordion;
