import Image from "next/image";
import { ConvertKitForm } from "./ConvertKitForm";

export function HeroSection() {
  return (
    <section
      id="formulario"
      className="relative w-full"
      style={{ backgroundColor: "rgb(1, 6, 16)" }}
    >
      {/* ===== MOBILE ===== */}
      <div className="md:hidden relative h-[621px] overflow-hidden">
        {/* Hero image as <Image> for LCP priority tracking */}
        <div
          className="absolute top-0 h-auto pointer-events-none"
          style={{ left: "-200px", width: "160%" }}
        >
          <Image
            src="/images/hero-bg.webp"
            alt=""
            width={1919}
            height={723}
            priority
            sizes="160vw"
            className="w-full h-auto"
          />
        </div>

        {/* Content absolutely positioned at the bottom, overlapping the image */}
        <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center gap-4 px-5 pb-6">
          {/* Logo */}
          <Image
            src="/images/logo-plan.webp"
            alt="Plan Tu Primera Importación Rentable"
            width={188}
            height={70}
          />

          {/* Heading */}
          <h2
            className="text-white text-[24px] leading-[1.2] font-bold text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Descubre el método YUAN para construir un negocio rentable{" "}
            <span style={{ color: "rgb(35, 222, 255)" }}>
              importando directamente desde China.
            </span>
          </h2>

          <ConvertKitForm />
        </div>
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden md:flex items-center min-h-[700px] relative overflow-hidden">
        {/* Hero image as <Image> for LCP priority tracking */}
        <Image
          src="/images/hero-bg.webp"
          alt=""
          fill
          priority
          style={{ objectFit: "cover", objectPosition: "center" }}
        />

        <div className="relative z-10 w-full mx-auto px-6 py-24 flex flex-row items-center max-w-[1200px]">
          <div className="w-1/2 flex flex-col items-start gap-6">
            <Image
              src="/images/logo-plan.webp"
              alt="Plan Tu Primera Importación Rentable"
              width={267}
              height={99}
            />

            <h2
              className="text-white text-[39px] leading-[1.1] font-bold text-left"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Descubre el método YUAN para construir un negocio rentable{" "}
              <span style={{ color: "rgb(35, 222, 255)" }}>
                importando directamente desde China.
              </span>
            </h2>

            <div className="w-full max-w-[520px]">
              <ConvertKitForm />
            </div>
          </div>

          <div className="w-1/2" />
        </div>
      </div>
    </section>
  );
}
