import React from "react";
import Slider from "react-slick";
import { Box, Text, Image } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const testimonios = [
    {
      autor: "Santiago Ulloa Ceramicasa",
      testimonio:
        "“Nos sentimos muy agradecidos por la buena atención, precios de sus productos y el seguimiento diario de nuestras necesidades”.",
    },
    {
      autor: "Lorem Ipsum 2",
      testimonio:
        "“Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris maecenas felis. Id eget est tellus bibendum sit dolor vitae mauris”",
    },
    {
      autor: "Lorem Ipsum 3",
      testimonio:
        "“Lorem ipsum dolor sit amet consectetur. Feugiat dignissim eu iaculis mauris maecenas felis. Id eget est tellus bibendum sit dolor vitae mauris”",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "5%", // Ajusta según tus necesidades
  };
  //...settings
  return (
    <Box>
      <Slider {...settings}>
        {testimonios.map((testimonio, index) => (
          <Box key={index} width="300px" height="200px">
            <Box
              position="relative"
              borderRadius="8px"
              boxShadow="md"
              backgroundColor="rgba(0, 0, 0, 0.1)"
              margin="0 20px 5px 3px"
              overflow="visible"
            >
              <Image
                src="/img/Ellipse.png"
                alt="Imagen testimonio"
                borderRadius="50%"
                position="absolute"
                top="-15px"
                left="10px"
              />

              {/* Contenido de la tarjetacon el testimonio */}
              <Box p={4} mt={4} width="100%" height="100%">
                {" "}
                <Text fontSize="xl" fontWeight="bold" mb={2} textAlign="center">
                  {testimonio.autor}
                </Text>
                <Text mt={2}>{testimonio.testimonio}</Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
