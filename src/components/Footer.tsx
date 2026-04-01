import Image from "next/image";

export function Footer() {
  return (
    <footer
      className="w-full flex flex-col items-center py-10 md:pt-[60px] md:pb-[40px]"
      style={{ backgroundColor: "rgb(1, 6, 16)" }}
    >
      <div className="flex flex-col items-center gap-5 md:gap-6 px-5 md:px-4 w-full">
        {/* Logo */}
        <Image
          src="/images/footer-logo.webp"
          alt="Plan Tu Primera Importación Rentable"
          width={200}
          height={80}
          className="w-[160px] md:w-[200px] object-contain"
          style={{ height: "auto" }}
        />

        {/* Copyright */}
        <p className="text-white text-center font-bold text-[14px] md:text-[16px]">
          Copyright &copy; 2026 Daniel Bonilla | Todos los derechos reservados
        </p>

        {/* Disclaimer */}
        <p
          className="text-center text-[13px] md:text-[14px] max-w-[600px] leading-[1.6]"
          style={{ color: "rgb(177, 177, 177)" }}
        >
          Este sitio no forma parte ni está respaldado por Meta. Facebook es una
          marca comercial de Meta Platforms, Inc
        </p>
      </div>
    </footer>
  );
}
