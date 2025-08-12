const ChannelSidebar: React.FC = () => {
  return (
    <div className="w-80 h-full border-r border-bgNeutralTonalDefault overflow-y-auto scrollbar-hide">
      <div className="p-2 h-[12000px]">
        <span className="text-sm">Channel 1</span>
      </div>
      <div className="p-2">
        <span className="text-sm">Channel 2</span>
      </div>
    </div>
  );
};

export { ChannelSidebar };
