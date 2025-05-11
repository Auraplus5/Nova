import { useState } from "preact/hooks";

interface Props {
  title: string;
  imageSrc: string;
  imageAlt: string;
  imageWidth?: string;
  imageHeight?: string;
  classnameForDiv?: string;
  classnameForImg?: string;
  children?: preact.ComponentChildren;
}

export default function ToggleDiv(
  {
    title,
    imageSrc,
    imageAlt,
    imageWidth,
    imageHeight,
    children,
    classnameForImg,
    classnameForDiv,
  }: Props,
) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col mx-auto m-16">
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="lg:text-4xl md:text-2xl text-xl font-[350] tracking-wider text-gray-800">
          {title}
        </h1>
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Collapse" : "Expand"}
        >
          {isOpen
            ? (
              <svg
                className="w-7 h-7 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m5 15 7-7 7 7"
                />
              </svg>
            )
            : (
              <svg
                className="w-7 h-7 text-gray-800"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 9-7 7-7-7"
                />
              </svg>
            )}
        </button>
      </div>

      {isOpen && (
        <div
          className={classnameForDiv ||
            "pt-12 flex xl:flex-row flex-col justify-start xl:gap-[15vw] items-center"}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            width={imageWidth}
            height={imageHeight}
            className={classnameForImg}
          />
          <div className="text-gray-700 max-w-3xl text-left">{children}</div>
        </div>
      )}

      <hr className="h-px bg-gray-600 border-0 my-1" />
    </div>
  );
}
