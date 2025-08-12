import { ChannelSidebar } from "./components/ChannelSidebar";

interface IGuildLayoutRootProps {
    children: React.ReactNode;
}

const GuildChannelLayoutRoot: React.FC<IGuildLayoutRootProps> = ({ children }) => {
  return (
    <div className="flex h-full w-full">
        <ChannelSidebar />
      {children}
    </div>
  );
};


export { GuildChannelLayoutRoot };