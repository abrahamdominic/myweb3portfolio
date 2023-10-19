export const Card = ({ children,h=false }) => {
    return (
        <div className="relative group w-full !font-bricolage">
            {/* <div
                className={`absolute transition-all duration-[0.2s] ease-in bg-[rgba(255,_255,_255,1)] top-0 left-0 group-hover:top-1 group-hover:left-1 ${h ? 'w-fit' : 'w-[428.66px]'} flex ${h ? 'h-fit' : 'h-[166px]'} items-center justify-center ${h ? 'px-2' :'px-6'}`}
                style={{ boxSizing: "border-box", border: "1.5px solid #121212", borderRadius: " 8px" }}
            /> */}
            <div className={`relative flex flex-col justify-center transition-all duration-[0.2s] ease-in bg-transparent items-center group-hover:-top-1 md:w-fit overflow-hidden px-10 h-[66px] md:h-[100px]`}>
                {children}
            </div>
        </div>
    )
}