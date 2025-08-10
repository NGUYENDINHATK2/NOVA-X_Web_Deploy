import { withErrorHandling } from "@/common/hocs";
import HomePage from "@/modules/Home/page";
import type { Metadata } from "next";


function Home() {
  return <HomePage />;
}

export default withErrorHandling(Home, []);

export function generateMetadata(): Metadata {
  return {
    title: "Nova-X | Welcome",
    description:
      "Wellcome to Nova-X, the next generation communication platform.",
    openGraph: {
      title: "Nova-X",
      description:
        "Wellcome to Nova-X, the next generation communication platform.",
      type: "website",
      images: [
        {
          url: "/images/nova-x_logo_text.png",
          width: 800,
          height: 600,
          alt: "Nova-X Logo",
        },
      ],
    },
  };
}
