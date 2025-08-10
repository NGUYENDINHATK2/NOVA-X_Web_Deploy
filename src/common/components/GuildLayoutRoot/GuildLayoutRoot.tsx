import { GuildSidebar } from "./components";

interface IGuildLayoutRootProps {
    children: React.ReactNode;
}


const GuildLayoutRoot  = ({ children }: IGuildLayoutRootProps) => {
  return (
    <div className="w-full h-full">
        <div className="w-full flex items-center justify-center p-2">
            <span className="text-sm">Máy chủ 1</span>
        </div>
        <div className="flex w-full">
            <GuildSidebar />
            <div className="flex flex-1">
                 {children}
            </div>
        </div>
    </div>
  );
};


export { GuildLayoutRoot };