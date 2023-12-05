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
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={"1rem"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿A quiénes venden sus productos?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          La venta de nuestros productos está dirigida únicamente a casas de
          Sanitarios y Ferreterías ubicadas en la provincia de Mendoza.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={"1rem"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Realizan ventas minoristas?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          No, únicamente realizamos ventas mayoristas. En caso de querer
          adquirir nuestros productos al por menor, podés contactarnos a través
          de WhatsApp para que te brindemos información sobre los puntos de
          venta cercanos a tu ubicación.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={"1rem"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Cómo puedo acceder al catálogo de productos?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          En la página “Inicio” y “Nuestros productos” encontrarás un botón para
          descargar el catálogo en tu dispositivo.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px" borderTop="0" marginBottom={"1rem"}>
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Cómo puedo solicitar un presupuesto y realizar mi pedido?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Contactanos mediante WhatsApp y te brindaremos asesoramiento y la
          información que necesites.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px !important" borderTop="0">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Cuentan con local al público?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          No contamos con local al público. Vendemos a través de WhatsApp o de
          forma presencial en el local del cliente.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px !important" borderTop="0">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿De qué material son las griferías y bachas?
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          El material que predomina en nuestra griferías es metal y, dependiendo
          el modelo tienen cierre cerámico y ABS. Para mayor información sobre
          cada modelo, podés ingresar a nuestro catálogo. En tanto, nuestras
          bachas artesanales de cerámica están realizadas con arcilla blanca con
          chamote.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem borderBottom="2px !important" borderTop="0">
        <h2>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" fontWeight={600}>
              ¿Tienen stock de todos los productos? 
            </Box>
            <AccordionIcon fontSize={"1.5rem"} />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          Contamos con stock permanente de la mayoría de nuestros productos.
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default Questions;
