import { Box, List, ListItemIcon, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
// image imports
import { blogFeature, blogSlugBg } from "../../../public/assets/export";
// components imports
import Container from "../../components/container";
import { Tags } from "../../components/export";
// icon imports
import {
  LinkedIn,
  Twitter,
  Facebook,
  ControlPointDuplicate,
} from "@mui/icons-material";
const tagList = [
  {
    tag: "lifestyle",
    link: "#"
  },
  {
    tag: "eco",
    link: "#"
  },
  {
    tag: "health",
    link: "#"
  },
]
export default function BlogSlugModule() {
  return (
    <>
      <Box
        component="main"
        className="page-top"
        sx={{
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
            <Tags tagList={tagList} />
            <hr className="borderline" />

            <List className="social">
              <ListItemIcon>
                <Twitter />
              </ListItemIcon>
              <ListItemIcon>
                <Facebook />
              </ListItemIcon>
              <ListItemIcon>
                <LinkedIn />
              </ListItemIcon>
            </List>
          </Container>
        </section>
      </Box>
      {/* feature image */}
      <section className="featureImage">
        <Image src={blogFeature} alt={`feature image`} />
      </section>
      <Container>
        <Box
          className="single-blog-article"
          display="grid"
          gridTemplateColumns="repeat(12, 1fr)"
          gap={8}
        >
          <Box className="articale" gridColumn="span 8">
            <article>
              <p>
                Morbi ac nulla felis. Vestibulum maximus, mi eget finibus
                commodo, tellus ligula ultrices mauris, at condimentum erat
                risus id ante. Nullam pulvinar lorem eget luctus vestibulum.
                Vestibulum volutpat malesuada ante, eget tempor massa. Quisque
                maximus sagittis suscipit. Vivamus placerat, magna eget pulvinar
                sodales, sem nibh elementum justo, ac elementum ipsum lacus non
                tellus. In hac habitasse platea dictumst.
              </p>
              <ul>
                <li>
                  Proin magna dolor, vestibulum vitae orci dapibus, commodo
                  eleifend nulla. Integer tincidunt dictum neque ac tempus.
                </li>
                <li>
                  Proin magna dolor, vestibulum vitae orci dapibus, commodo
                  eleifend nulla. Integer tincidunt dictum neque ac tempus.
                </li>
                <li>
                  Proin magna dolor, vestibulum vitae orci dapibus, commodo
                  eleifend nulla. Integer tincidunt dictum neque ac tempus.
                </li>
              </ul>
              <h3>Nullam dignissim nec id</h3>
              <p>
                Vel lectus vel velit pellentesque dignissim nec id magna. Cras
                molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
                venenatis justo. Nullam felis augue, imperdiet at sodales a,
                sollicitudin nec risus. Integer felis velit, hendrerit at
                efficitur non, pellentesque ut eros. Nullam felis libero, congue
                quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce interdum erat ut augue egestas, eu auctor nisi
                facilisis. Phasellus dictum ullamcorper dui ac molestie.
              </p>
              <p>
                Sed faucibus quam viverra euismod sagittis. Curabitur mattis
                neque vel tortor semper dictum. Vestibulum aliquam molestie mi,
                quis condimentum ex. Nulla at placerat sapien. Sed lobortis nunc
                arcu, nec ornare eros fermentum ac.
              </p>
              <ul>
                <li>Proin magna dolor, vestibulum vitae orci dapibus,</li>
                <li>Proin magna dolor, orci dapibus.</li>
                <li>
                  Proin magna dolor, vestibulum vitae orci dapibus, commodo
                  eleifend nulla.
                </li>
              </ul>
              <figure>
                <Image src={blogFeature} alt={`image alt`} />
              </figure>
              <p>
                Sed faucibus quam viverra euismod sagittis. Curabitur mattis
                neque vel tortor semper dictum. Vestibulum aliquam molestie mi,
                quis condimentum ex. Nulla at placerat sapien. Sed lobortis nunc
                arcu, nec ornare eros fermentum ac.
              </p>
              <h3>Nullam dignissim nec id</h3>
              <p>
                Vel lectus vel velit pellentesque dignissim nec id magna. Cras
                molestie ornare quam at semper. Proin a ipsum ex. Curabitur eu
                venenatis justo. Nullam felis augue, imperdiet at sodales a,
                sollicitudin nec risus. Integer felis velit, hendrerit at
                efficitur non, pellentesque ut eros. Nullam felis libero, congue
                quis ipsum et, lacinia maximus eros. Vestibulum ante ipsum
                primis in faucibus orci luctus et ultrices posuere cubilia
                curae; Fusce interdum erat ut augue egestas, eu auctor nisi
                facilisis. Phasellus dictum ullamcorper dui ac molestie.
              </p>
              <h6>
                I have my own definition of minimalism, which is that which is
                created with a minimum of means
              </h6>
              <p>
                In interdum, augue nec pharetra rhoncus, purus velit viverra
                eros, quis venenatis sem magna consequat mi. Vestibulum urna
                nulla, tincidunt eget volutpat sit amet, laoreet eget libero.
                Donec aliquam commodo magna, vitae convallis ex lacinia vel.
                Duis sed tellus quam. Sed eget metus a eros mattis auctor quis
                ac risus. Ut luctus non lectus nec iaculis. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Sed vel velit metus. Ut lobortis nibh a ornare
                fringilla. Cras gravida tincidunt mi. Fusce at tellus a felis
                pulvinar mollis. Nulla ac sapien nec velit euismod fermentum non
                ut enim.
              </p>
            </article>
            {/* social share  */}
            <SocialShare />
          </Box>
          <Box className="sidebar" gridColumn="span 4">
            <aside>sidebar</aside>
          </Box>
        </Box>
      </Container>
    </>
  );
}

const SocialShare = () => {
  return (
    <>
      <List className="social-share">
        <ListItemIcon>
          <Twitter />
        </ListItemIcon>
        <ListItemIcon>
          <Facebook />
        </ListItemIcon>
        <ListItemIcon>
          <LinkedIn />
        </ListItemIcon>
        <ListItemIcon>
          <ControlPointDuplicate />
        </ListItemIcon>
      </List>
    </>
  );
};
