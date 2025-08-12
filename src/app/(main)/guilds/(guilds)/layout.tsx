import { GuildChannelLayoutRoot } from "@/common/layouts";

export default function GuildChannelLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
     <GuildChannelLayoutRoot>
        {children}
     </GuildChannelLayoutRoot>
  );
}