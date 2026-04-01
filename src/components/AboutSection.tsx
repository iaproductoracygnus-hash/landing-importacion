"use client";

import Image from "next/image";

export function AboutSection() {
  return (
    <section
      className="relative w-full"
      style={{ backgroundColor: "rgb(1, 6, 16)" }}
    >
      {/* ===== MOBILE ===== */}
      <div className="md:hidden flex flex-col">
        {/* Text content */}
        <div className="flex flex-col gap-5 px-5 py-10">
          <div>
            <span
              className="inline-block text-white uppercase text-[14px]"
              style={{
                backgroundColor: "rgb(19, 19, 19)",
                padding: "6px 12px",
                borderRadius: "4px",
              }}
            >
              ¿QUIÉN SOY Y PORQUE PUEDO AYUDARTE?
            </span>
          </div>

          <h2
            className="text-white text-[30px]"
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontWeight: 400,
              lineHeight: "1.2",
            }}
          >
            ¡Hola! Soy{" "}
            <span style={{ color: "rgb(35, 222, 255)", fontWeight: 700 }}>
              Daniel Bonilla
            </span>
          </h2>

          <div className="flex flex-col gap-4">
            <p className="text-white text-[16px] leading-[1.7]">
              Empresario, importador y mentor. A través de mi experiencia en el
              mundo de las importaciones, he tenido la oportunidad de acompañar{" "}
              <strong>
                a miles de personas a crear negocios rentables y nuevas fuentes
                de ingresos
              </strong>{" "}
              importando de forma correcta,{" "}
              <strong>sin improvisar ni poner en riesgo sus ahorros.</strong>
            </p>

            <p className="text-white text-[16px] leading-[1.7]">
              Creo firmemente que muchas personas no fracasan en las
              importaciones porque el negocio no funcione,{" "}
              <strong>
                sino porque nunca les enseñaron cómo hacerlo bien desde el
                inicio.
              </strong>
            </p>

            <p className="text-white text-[16px] leading-[1.7]">
              Por eso, el verdadero problema no es el capital, ni el momento
              económico, o en &ldquo;no saber chino&rdquo;.{" "}
              <strong style={{ color: "rgb(35, 222, 255)" }}>
                El problema es no contar con un método claro
              </strong>{" "}
              que te permita avanzar con seguridad.
            </p>

            <p className="text-white text-[16px] leading-[1.7]">
              Mi propósito con este evento es mostrarte que sí es posible hacer
              de las importaciones{" "}
              <strong style={{ color: "rgb(35, 222, 255)" }}>
                un negocio sólido y rentable, sin que sientas que estás
                &ldquo;apostando&rdquo; tus ahorros.
              </strong>
            </p>

            <p className="text-white text-[16px] leading-[1.7]">
              La pregunta es:{" "}
              <strong>
                ¿Estás listo/a para importar directamente desde China y
                construir un negocio rentable, sea cual sea el punto en el que
                te encuentras hoy?
              </strong>
            </p>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              className="text-white font-bold cursor-pointer w-full text-[15px]"
              onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
              style={{
                backgroundColor: "rgb(60, 177, 29)",
                borderRadius: "9999px",
                padding: "15px 20px",
                border: "none",
                animation: "onda 1.5s infinite",
              }}
            >
              QUIERO APRENDER A IMPORTAR
            </button>
          </div>
        </div>

        {/* Daniel photo BELOW the button */}
        <div
          className="w-full h-[420px] bg-no-repeat overflow-hidden"
          style={{
            backgroundImage: "url('/images/daniel-about.webp')",
            backgroundPosition: "-160px top",
            backgroundSize: "280% auto",
          }}
        />
      </div>

      {/* ===== DESKTOP ===== */}
      <div
        className="hidden md:block relative w-full min-h-[810px] bg-no-repeat"
        style={{
          backgroundImage: "url('/images/daniel-about.webp')",
          backgroundPosition: "50% 50%",
          backgroundSize: "auto",
        }}
      >
        <div className="relative z-10 flex justify-end w-full min-h-[810px]">
          <div className="w-[55%] flex flex-col justify-center gap-6 px-12 py-16">
            <div>
              <span
                className="inline-block text-white uppercase"
                style={{
                  backgroundColor: "rgb(19, 19, 19)",
                  fontSize: "18px",
                  padding: "8px 16px",
                  borderRadius: "4px",
                }}
              >
                ¿QUIÉN SOY Y PORQUE PUEDO AYUDARTE?
              </span>
            </div>

            <h2
              className="text-white"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "1.2",
              }}
            >
              ¡Hola! Soy{" "}
              <span style={{ color: "rgb(35, 222, 255)", fontWeight: 700 }}>
                Daniel Bonilla
              </span>
            </h2>

            <div className="flex flex-col gap-4">
              <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                Empresario, importador y mentor. A través de mi experiencia en el
                mundo de las importaciones, he tenido la oportunidad de acompañar{" "}
                <strong>
                  a miles de personas a crear negocios rentables y nuevas fuentes
                  de ingresos
                </strong>{" "}
                importando de forma correcta,{" "}
                <strong>sin improvisar ni poner en riesgo sus ahorros.</strong>
              </p>

              <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                Creo firmemente que muchas personas no fracasan en las
                importaciones porque el negocio no funcione,{" "}
                <strong>
                  sino porque nunca les enseñaron cómo hacerlo bien desde el
                  inicio.
                </strong>
              </p>

              <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                Por eso, el verdadero problema no es el capital, ni el momento
                económico, o en &ldquo;no saber chino&rdquo;.{" "}
                <strong style={{ color: "rgb(35, 222, 255)" }}>
                  El problema es no contar con un método claro
                </strong>{" "}
                que te permita avanzar con seguridad.
              </p>

              <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                Mi propósito con este evento es mostrarte que sí es posible hacer
                de las importaciones{" "}
                <strong style={{ color: "rgb(35, 222, 255)" }}>
                  un negocio sólido y rentable, sin que sientas que estás
                  &ldquo;apostando&rdquo; tus ahorros.
                </strong>
              </p>

              <p className="text-white" style={{ fontSize: "18px", lineHeight: "1.7" }}>
                La pregunta es:{" "}
                <strong>
                  ¿Estás listo/a para importar directamente desde China y
                  construir un negocio rentable, sea cual sea el punto en el que
                  te encuentras hoy?
                </strong>
              </p>
            </div>

            <div className="flex justify-center">
              <button
                className="text-white font-bold cursor-pointer"
                onClick={() => document.getElementById("formulario")?.scrollIntoView({ behavior: "smooth" })}
                style={{
                  backgroundColor: "rgb(60, 177, 29)",
                  fontSize: "16px",
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
          </div>
        </div>
      </div>
    </section>
  );
}
