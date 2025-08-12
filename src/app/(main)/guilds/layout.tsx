import { GuildLayoutRoot } from "@/common/layouts";

export default function GuildLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
     <GuildLayoutRoot>{children}</GuildLayoutRoot>
  );
}