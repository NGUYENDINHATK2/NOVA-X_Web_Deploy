import { GuildSidebar } from "./components";

interface IGuildLayoutRootProps {
    children: React.ReactNode;
}


const GuildLayoutRoot  = ({ children }: IGuildLayoutRootProps) => {
  return (
    <div className="w-full h-screen flex flex-col">
        <div className="w-full flex items-center justify-center p-2">
            <span className="text-sm">Guild 1</span>
        </div>
        <div className="flex w-full h-full gap-2">
            <GuildSidebar />
            <div className="flex flex-1 border rounded-tl-md border-neutral-800 h-full overflow-y-auto">
                 {children}
            </div>
        </div>
    </div>
  );
};


export { GuildLayoutRoot };