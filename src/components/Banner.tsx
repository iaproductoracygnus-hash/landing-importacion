export function Banner() {
  return (
    <div
      className="w-full flex items-center justify-center h-[62px]"
      style={{ backgroundColor: "rgb(22, 158, 254)" }}
    >
      <p className="text-center text-[14px] md:text-[24px] font-[family-name:var(--font-montserrat)]">
        <span style={{ color: "rgb(255, 255, 255)", fontWeight: 400 }}>
          EVENTO ONLINE Y SIN COSTO
        </span>
        <span style={{ color: "rgb(255, 255, 255)", fontWeight: 700 }}>
          {" "}DEL 30 DE MARZO AL 1 DE ABRIL
        </span>
      </p>
    </div>
  );
}
