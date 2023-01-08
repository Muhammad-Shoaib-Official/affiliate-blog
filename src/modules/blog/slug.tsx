import { Box, Typography } from "@mui/material";
import React from "react";
import { blogSlugBg } from "../../../public/assets";
import Container from "../../components/container";

export default function BlogSlugModule() {
  return (
    <>
      <Box
        component="main"
        className="page-top"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.78), rgba(255, 255, 255, 1)), url(${blogSlugBg.src})`,
        }}
      >
        <section className="blog-single">
          <Container>
            <Typography className="main-heading" variant="h1">
              The trick to getting more done is to have the freedom to roam
              around
            </Typography>
            <Typography className="main-text">
              Vel lectus vel velit pellentesque dignissim nec id magna. Cras
              molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
              venenatis justo. Nullam felis augue, imperdiet at sodales. Nullam
              felis libero, congue quis ipsum et, lacinia maximus eros.
              Vestibulum ante ipsum primis in faucibus.
            </Typography>
          </Container>
        </section>
      </Box>
    </>
  );
}
