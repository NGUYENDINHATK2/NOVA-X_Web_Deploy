import type { IGuildSidebarItemProps } from "./GuildSidebar.type";

const GuildSidebarItem: React.FC<IGuildSidebarItemProps> = (props) => {
  const { child } = props;
  return (
    <div className="flex items-center cursor-pointer pl-3 pr-2 group relative space-x-2">
      <span
        className="absolute left-0 top-0 w-[5px] h-full bg-white scale-y-[0.2] origin-center transition-transform duration-300 group-hover:scale-y-100
                    rounded-tr-full rounded-br-full"/>

      <div className="w-10 h-10 bg-gray-200 rounded-xl overflow-hidden flex items-center justify-center">
        {child}
      </div>
    </div>
  );
};

export { GuildSidebarItem };
