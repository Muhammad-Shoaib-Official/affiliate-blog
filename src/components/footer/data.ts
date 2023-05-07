import { FacebookRounded, Twitter, Instagram, YouTube } from '@mui/icons-material';
interface IFooterData {
  title: string;
  links: {
    label: string;
    link: string;
    icon?: any;
  }[];
};

export const footerData: IFooterData[] = [
  {
    title: "Social",
    links: [
      {
        label: "Facebook",
        link: "",
        icon: FacebookRounded
      },
      {
        label: "Twitter",
        link: "",
        icon: Twitter
      },
      {
        label: "Instagram",
        link: "",
        icon: Instagram
      },
      {
        label: "YouTube",
        link: "",
        icon: YouTube
      },
    ]
  },
  {
    title: "About",
    links: [
      {
        label: "Style Guide",
        link: "",
      },
      {
        label: "Features",
        link: "",
      },
      {
        label: "Contact",
        link: "",
      },
      {
        label: "404",
        link: "",
      },
    ]
  },
  {
    title: "Features",
    links: [
      {
        label: "Demos",
        link: "",
      },
      {
        label: "Light version",
        link: "",
      },
      {
        label: "Sepia version",
        link: "",
      },
      {
        label: "Dark version",
        link: "",
      },
    ]
  },
  {
    title: "Membership",
    links: [
      {
        label: "Editor’s Choice",
        link: "",
      },
      {
        label: "Membership",
        link: "",
      },
      {
        label: "Account Free",
        link: "",
      },
      {
        label: "Account Paid",
        link: "",
      },
    ]
  },
  {
    title: "Resources",
    links: [
      {
        label: "Sign in",
        link: "",
      },
      {
        label: "Sign up",
        link: "",
      },
      {
        label: "Tags",
        link: "",
      },
      {
        label: "Authors",
        link: "",
      },
    ]
  },
  {
    title: "Company",
    links: [
      {
        label: "fueko",
        link: "",
      },
      {
        label: "Showcase",
        link: "",
      },
      {
        label: "Get Theme",
        link: "",
      },
    ]
  },
]