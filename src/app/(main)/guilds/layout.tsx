import { GuildLayoutRoot } from "@/common/components";

export default function GuildLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
     <GuildLayoutRoot>{children}</GuildLayoutRoot>
  );
}
