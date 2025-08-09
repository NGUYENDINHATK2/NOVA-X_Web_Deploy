const GuildLayoutRoot: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="w-full h-full">
        <div className="w-full flex items-center justify-center p-2">
            Máy chủ 1
        </div>
        <div className="flex w-full">
            <div>
                jhgfd
            </div>
            <div className="flex flex-1">
                 {children}
            </div>
        </div>
    </div>
  );
};


export { GuildLayoutRoot };