import { useState } from "preact/hooks"

interface Props {
    title: string
    imageSrc: string,
    imageAlt: string,
    imageWidth: string,
    imageHeight: string,
    classnameForDiv?: string,
    classnameForImg?: string,
    children?: preact.ComponentChildren;
}

export default function ToggleDiv({ title, imageSrc, imageAlt, imageWidth, imageHeight, children, classnameForImg, classnameForDiv }: Props) {
    const [isOpen, setIsOpen] = useState(false);


    return (
        <div className="flex flex-col mx-auto m-16">
            <div className="flex flex-row justify-between items-center w-full">
                <h1 className="lg:text-5xl md:text-4xl text-2xl font-[350] tracking-wider text-gray-800">
                    {title}
                </h1>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? (
                        <svg className="w-[34px] h-[34px] text-gray-800" aria-hidden="true"
                             xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                        </svg>

                    ) : (
                        <svg
                            className="w-[34px] h-[34px] text-gray-800"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                        <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                            />
                        </svg>
                    )}
                </button>
            </div>

            {isOpen && (
                <div className={classnameForDiv || "mt-4 flex xl:flex-row flex-col justify-start xl:gap-[18vw] items-center"}>
                    <img
                        src={imageSrc}
                        alt={imageAlt}
                        width={imageWidth}
                        height={imageHeight}
                        className={classnameForImg}
                    />
                    <div className="text-gray-700 max-w-md lg:text-left text-center">{children}</div>
                </div>
            )}

            <hr className="h-px bg-gray-600 border-0 my-1" />
        </div>
    );
}
