import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";

const Questions = () => {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={'1rem'}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Lorem ipsum dolor sit amet?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={'1rem'}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Lorem ipsum dolor sit amet?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={'1rem'}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Lorem ipsum dolor sit amet?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={'1rem'}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Lorem ipsum dolor sit amet?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Lorem ipsum dolor sit amet?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Questions;
