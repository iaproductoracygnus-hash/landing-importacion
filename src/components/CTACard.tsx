"use client";

import Image from "next/image";

export function CTACard() {
  return (
    <section
      className="w-full flex flex-col items-center px-5 md:px-4 py-10 md:py-16"
      style={{ backgroundColor: "rgb(1, 6, 16)" }}
    >
      {/* Card */}
      <div
        className="w-full flex flex-col items-center gap-4 md:gap-6 p-6 md:p-10"
        style={{
          maxWidth: "900px",
          backgroundColor: "rgb(2, 20, 36)",
          border: "1px solid rgba(35, 222, 255, 0.3)",
          borderRadius: "16px",
        }}
      >
        {/* Info icon */}
        <div>
          <Image
            src="/images/info-icon.svg"
            alt="Info"
            width={40}
            height={40}
            className="w-8 h-8 md:w-10 md:h-10"
          />
        </div>

        {/* Heading */}
        <h2
          className="text-center text-[18px] md:text-[24px] leading-[1.5]"
        >
          <span className="text-white">Mi propósito con este evento es </span>
          <span style={{ color: "rgb(35, 222, 255)" }}>
            mostrarte que las importaciones pueden convertirse en un negocio
            rentable de verdad,
          </span>
          <strong className="text-white">
            {" "}
            sin que sientas que estás apostando tus ahorros, sin importar el
            punto en que te encuentres hoy.
          </strong>
        </h2>

        {/* Paragraph 1 */}
        <p className="text-white text-center text-[15px] md:text-[18px] leading-[1.7]">
          Si eres dueño de negocio y quieres mejorar tus márgenes, o eres
          empleado o emprendedor y buscas generar mejores ingresos, entonces
          esto es para ti.
        </p>

        {/* Paragraph 2 */}
        <p className="text-white text-center text-[15px] md:text-[18px] leading-[1.7]">
          La pregunta es: ¿Estás listo para importar con éxito y mejorar tus
          ingresos sin poner en riesgo lo que tienes?
        </p>
      </div>

      {/* CTA Button — outside card */}
      <div className="flex justify-center mt-6 md:mt-8 w-full px-1" style={{ maxWidth: "900px" }}>
        <button
          className="text-white font-bold cursor-pointer text-[15px] md:text-[16px]"
          onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
          style={{
            backgroundColor: "rgb(60, 177, 29)",
            borderRadius: "9999px",
            padding: "15px 20px",
            width: "100%",
            maxWidth: "500px",
            border: "none",
            animation: "onda 1.5s infinite",
          }}
        >
          QUIERO APRENDER A IMPORTAR
        </button>
      </div>
    </section>
  );
}
