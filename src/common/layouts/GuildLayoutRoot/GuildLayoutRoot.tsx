import { GuildSidebar } from "./components";

interface IGuildLayoutRootProps {
    children: React.ReactNode;
}


const GuildLayoutRoot  = ({ children }: IGuildLayoutRootProps) => {
  return (
    <div className="w-full h-screen flex flex-col overflow-auto">
        <div className="w-full flex items-center justify-center p-2">
            <span className="text-sm">Guild 1</span>
        </div>
        <div className="flex flex-1 w-full overflow-hidden">
            <GuildSidebar />
            <div className="flex flex-1 flex-col h-full p-2">
                 <div className="border rounded-2xl h-full border-bgNeutralTonalDefault overflow-hidden">
                  {children}
                 </div>
            </div>
        </div>
    </div>
  );
};


export { GuildLayoutRoot };