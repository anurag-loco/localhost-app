import type { CSSProperties, FunctionComponent } from "react";

export type StayCardType = {
  className?: string;
  missisuagaAistream?: string;
  missisaugaOntarioCanada?: string;
  stayPricePerNight?: string;

  /** Style props */
  stayCardContainersBackgroundImage?: CSSProperties["backgroundImage"];
};

const StayCard: FunctionComponent<StayCardType> = ({
  className = "",
  stayCardContainersBackgroundImage,
  missisuagaAistream,
  missisaugaOntarioCanada,
  stayPricePerNight,
}) => (
  <article
    className={className}
    style={{
      display: "grid",
      gridTemplateColumns: "112px minmax(0, 1fr) auto",
      alignItems: "center",
      gap: 12,
      width: "100%",
      maxWidth: 620,
      minWidth: 300,
      padding: 8,
      border: "1px solid #acacac",
      borderRadius: 10,
      background: "#ffffff",
      color: "#111111",
      fontFamily: "sans-serif",
      boxSizing: "border-box",
    }}
  >
    <div
      style={{
        height: 86,
        borderRadius: 7,
        backgroundImage: stayCardContainersBackgroundImage,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <div style={{ minWidth: 0 }}>
      <div
        style={{
          fontSize: 14,
          lineHeight: "18px",
          fontWeight: 700,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {missisuagaAistream}
      </div>
      <div
        style={{
          marginTop: 3,
          fontSize: 11,
          lineHeight: "15px",
          color: "#7c7c7c",
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {missisaugaOntarioCanada}
      </div>
      <div
        style={{
          marginTop: 8,
          fontSize: 11,
          lineHeight: "15px",
          fontWeight: 700,
        }}
      >
        ★ 4.8
      </div>
    </div>
    <div
      style={{
        alignSelf: "stretch",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        justifyContent: "space-between",
        padding: "4px 4px 4px 8px",
        borderLeft: "1px solid #acacac",
      }}
    >
      <button
        type="button"
        aria-label="Save stay"
        style={{
          border: 0,
          background: "transparent",
          color: "#111111",
          fontFamily: "sans-serif",
          fontSize: 17,
          lineHeight: 1,
        }}
      >
        ♡
      </button>
      <div style={{ textAlign: "right" }}>
        <strong
          style={{ display: "block", fontSize: 14, lineHeight: "18px" }}
        >
          {stayPricePerNight}
        </strong>
        <span style={{ fontSize: 10, lineHeight: "14px", color: "#7c7c7c" }}>
          /night
        </span>
      </div>
    </div>
  </article>
);

export default StayCard;
