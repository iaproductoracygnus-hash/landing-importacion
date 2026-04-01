import Image from "next/image";

interface ClassItem {
  imageLeft: boolean;
  imageSrc: string;
  badgeSrc: string;
  badgeAlt: string;
  titleParts: { text: string; cyan: boolean }[];
  date: string;
  imageAlt: string;
}

const classes: ClassItem[] = [
  {
    imageLeft: true,
    imageSrc: "/images/clase1-thumb.webp",
    badgeSrc: "/images/clase1-badge.svg",
    badgeAlt: "Clase #1",
    imageAlt: "Clase 1 thumbnail",
    titleParts: [
      { text: "Cómo saber ", cyan: false },
      { text: "si una importación va a funcionar", cyan: true },
      { text: " antes de pagar un solo dólar.", cyan: false },
    ],
    date: "Lunes 30 de Marzo a las 20:00 Hora Ecuador | 19:00 Hora México",
  },
  {
    imageLeft: false,
    imageSrc: "/images/clase2-thumb.webp",
    badgeSrc: "/images/clase2-badge.svg",
    badgeAlt: "Clase #2",
    imageAlt: "Clase 2 thumbnail",
    titleParts: [
      { text: "Cómo ", cyan: false },
      { text: "calcular, pagar y traer", cyan: true },
      { text: " tu carga desde china sin sorpresas.", cyan: false },
    ],
    date: "Martes 31 de Marzo a las 20:00 Hora Ecuador | 19:00 Hora México",
  },
  {
    imageLeft: true,
    imageSrc: "/images/clase3-thumb.webp",
    badgeSrc: "/images/clase3-badge.svg",
    badgeAlt: "Clase #3",
    imageAlt: "Clase 3 thumbnail",
    titleParts: [
      {
        text: "El plan completo para rentabilizar tus importaciones y ",
        cyan: false,
      },
      { text: "convertirlas en un negocio real", cyan: true },
    ],
    date: "Miércoles 1 de Abril a las 20:00 Hora Ecuador | 19:00 Hora México",
  },
];

export function ClassesSection() {
  return (
    <section
      style={{ backgroundColor: "rgb(1, 6, 16)" }}
      className="w-full py-10 md:py-[60px]"
    >
      <div className="mx-auto w-full max-w-[1200px] px-5 md:px-6">
        {/* Header */}
        <div className="mb-10 md:mb-12 flex flex-col items-center text-center">
          <h2
            className="mb-4 leading-snug text-[24px] md:text-[32px]"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <span className="font-normal text-white">
              A lo largo del Plan
              <br />
            </span>
            <span
              className="font-bold"
              style={{ color: "rgb(35, 222, 255)" }}
            >
              &ldquo;Tu Primera Importación Rentable&rdquo;
            </span>
          </h2>
          <p
            className="mx-auto max-w-[800px] text-white text-[16px] md:text-[18px]"
          >
            <strong>
              Te revelaré el Método que necesitas para importar desde China,
            </strong>{" "}
            sin caer en estafas, sin perder dinero y a lograr construir un
            negocio rentable en los próximos meses.
          </p>
        </div>

        {/* Class items */}
        <div className="flex flex-col gap-10 md:gap-[60px]">
          {classes.map((cls, index) => {
            const imageBlock = (
              <div className="flex flex-shrink-0 items-center justify-center">
                <Image
                  src={cls.imageSrc}
                  alt={cls.imageAlt}
                  width={400}
                  height={225}
                  className="rounded-xl object-cover w-full md:w-[400px]"
                />
              </div>
            );

            const textBlock = (
              <div className="flex flex-col justify-center gap-2 md:gap-3">
                <div>
                  <Image
                    src={cls.badgeSrc}
                    alt={cls.badgeAlt}
                    width={137}
                    height={30}
                    className="mb-2 md:mb-3"
                  />
                  <h3 className="text-[20px] md:text-2xl font-bold leading-snug">
                    {cls.titleParts.map((part, i) =>
                      part.cyan ? (
                        <span key={i} style={{ color: "rgb(35, 222, 255)" }}>
                          {part.text}
                        </span>
                      ) : (
                        <span key={i} className="text-white">
                          {part.text}
                        </span>
                      )
                    )}
                  </h3>
                </div>
                <p className="text-[15px] md:text-[18px]" style={{ color: "rgb(177, 177, 177)" }}>
                  {cls.date}
                </p>
              </div>
            );

            return (
              <div key={index}>
                {/* Mobile: always image on top, text below */}
                <div className="flex flex-col gap-4 md:hidden">
                  {imageBlock}
                  {textBlock}
                </div>
                {/* Desktop: alternate image left / right */}
                <div className="hidden md:flex md:flex-row md:items-center md:gap-10">
                  {cls.imageLeft ? (
                    <>
                      <div className="w-[400px] flex-shrink-0">{imageBlock}</div>
                      <div className="flex-1">{textBlock}</div>
                    </>
                  ) : (
                    <>
                      <div className="flex-1">{textBlock}</div>
                      <div className="w-[400px] flex-shrink-0">{imageBlock}</div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
