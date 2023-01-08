import { Box, List, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
// image imports
import { blogSlugBg, blogFeature } from "../../../public/assets";
// components imports
import Container from "../../components/container";
import { Tags } from "../../components/export";
// icon imports
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

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
            <Box className="tags">
              {["lifestyle", "eco", "business"].map((tag, i) => (
                <Tags name={tag} link={`#`} key={i} />
              ))}
            </Box>
            <hr className="borderline" />

            <List className="social">
              <ListItemIcon>
                <TwitterIcon />
              </ListItemIcon>
              <ListItemIcon>
                <FacebookIcon />
              </ListItemIcon>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
            </List>
          </Container>
        </section>
      </Box>
      {/* feature image */}
      <section className="featureImage">
        <Image src={blogFeature} alt={`feature image`} />
      </section>
      <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
        <Box gridColumn="span 8">
          
        </Box>
        <Box gridColumn="span 4">
          
        </Box>
      </Box>
    </>
  );
}
