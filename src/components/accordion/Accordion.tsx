import React from "react";
import classNames from "classnames";
import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import { accordion as accordionTheme } from "@tailus/themer-accordion"

const AccordionUI = () => (
    <Accordion.Root className="w-full min-w-[28rem] max-w-md" type="single" defaultValue="item-1" collapsible>
        <AccordionItem value="item-1">
            <AccordionTrigger>Is it accessible?  </AccordionTrigger>
            <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
            <AccordionTrigger>Is it unstyled?</AccordionTrigger>
            <AccordionContent>Yes. It's unstyled by default, giving you freedom over the look and feel.</AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Can it be animated?</AccordionTrigger>
            <AccordionContent>Yes! You can animate the Accordion with CSS or JavaScript.</AccordionContent>
        </AccordionItem>
    </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Item className={classNames(accordionTheme.item, className)} {...props} ref={forwardedRef}>
        {children}
    </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Header className="flex">
        <Accordion.Trigger className={classNames(accordionTheme.trigger.parent, className)} {...props} ref={forwardedRef}>
            {children}
            <ChevronDownIcon className={classNames(accordionTheme.trigger.icon, className)} aria-hidden />
        </Accordion.Trigger>
    </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }: any, forwardedRef) => (
    <Accordion.Content className={classNames(accordionTheme.content, className)}  {...props} ref={forwardedRef}>
        <div className="pb-3">{children}</div>
    </Accordion.Content>
));

export default AccordionUI;