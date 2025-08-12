import Link from "next/link";
import { GuildSidebarItem } from "./GuildSidebarItem";
import routerApp from "@/router";

const GuildSidebar: React.FC = () => {
  return (
    <div className="flex flex-col h-full overflow-auto scrollbar-hide">
      <div className="flex flex-col gap-3 py-4 px-2">
        {[...Array(30)].map((_, i) => (
          <Link
            key={i}
            href={`${routerApp.guilds.guilds}/${Math.floor(Math.random() * 100)}`}
          >
            <GuildSidebarItem
              child={
                <img
                  src="https://cdn-media.sforum.vn/storage/app/media/wp-content/uploads/2021/08/huong-dan-naraka-bladepoint-1.jpg"
                  alt="Guild"
                  className="w-full h-full object-cover"
                />
              }
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export { GuildSidebar };
