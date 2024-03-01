import React from "react";
import Slider from "react-slick";
import { Box, Text, Image } from "@chakra-ui/react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const testimonios = [
    {
      autor: "Santiago Ulloa ",
      lugar: "Ceramicasa",
      testimonio:
        "“Nos sentimos muy agradecidos por la buena atención, precios de sus productos y el seguimiento diario de nuestras necesidades”.",
      imagen: "/img/Ellipse2.png",
    },
    {
      autor: "Eliana García ",
      lugar: "Sobremonte",
      testimonio:
        "“Nos parece una grifería con una buena relación precio-calidad. ¡¡Tienen muchos modelos para elegir!!”.",
      imagen: "/img/2docomentario.png",
    },
    {
      autor: "Carolina Madrigal",
      lugar: "DC griferías",
      testimonio:
        "“Los mejores productos, inmejorable precio y calidad, asesoramiento personalizado y gran variedad. Recomiendo 100%”.",
      imagen: "/img/3ercomentario.png",
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
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 768, // ajusta según tus necesidades
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 480, // ajusta según tus necesidades
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  //...settings
  return (
    <Box>
      <Slider {...settings}>
        {testimonios.map((testimonio, index) => (
          <Box key={index} width="420px" height="268px">
            <Box
              position="relative"
              borderRadius="8px"
              boxShadow="md"
              backgroundColor="rgba(0, 0, 0, 0.1)"
              margin="0 20px 5px 3px"
              overflow="visible"
            >
              <Image
                // src="/img/Ellipse2.png"
                src={testimonio.imagen}
                alt="Imagen testimonio"
                borderRadius="50%"
                position="absolute"
                top="-16px"
                left="0"
              />

              {/* Contenido de la tarjeta con el testimonio */}
              <Box p={2} mt={4} width="100%" height="200px">
                {" "}
                <Text
                  fontSize="18px"
                  fontWeight={"500"}
                  fontFamily={"Monserrat"}
                  fontStyle={"normal"}
                  mb={2}
                  textAlign="center"
                >
                  {testimonio.autor}
                </Text>
                <Text
                  fontFamily={"Monserrat"}
                  fontSize="xl"
                  fontWeight="700"
                  mb={2}
                  textAlign="center"
                  lineHeight={"16px"}
                >
                  {testimonio.lugar}
                </Text>
                <Text mt={4} lineHeight={"2rem"}>
                  {testimonio.testimonio}
                </Text>
              </Box>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Carousel;
