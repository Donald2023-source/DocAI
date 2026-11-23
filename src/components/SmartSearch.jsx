import React from "react";

function SmartSearch({ onSelect }) {

  const suggestions = [
    "Admission Letter",
    "Find documents containing students' JAMB scores",
    "Show financial documents uploaded last month"
  ];

  // Document icon using SVG
  const DocumentIcon = () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
    </svg>
  );

  return (
    <section style={{
      width: "100%",
      marginTop: "20px"
    }}>

      <h4 style={{
        fontSize: "14px",
        fontWeight: "600",
        color: "#34313d",
        marginBottom: "14px",
        textAlign: "left",
        width: "100%"
      }}>
        Try a smart search
      </h4>
      
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
        gap: "12px"
      }}>

        {suggestions.map((item, index) => (

          <button
            key={index}
            type="button"
            onClick={() => onSelect?.(item)}
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid #e9e6ef",
              borderRadius: "12px",
              padding: "16px",
              minHeight: "95px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "14px",
              cursor: "pointer",
              textAlign: "left",
              fontFamily: "inherit",
              transition: "all 0.2s ease"
            }}

            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "#9251b5";
              e.currentTarget.style.backgroundColor = "#fcfaff";
            }}

            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "#e9e6ef";
              e.currentTarget.style.backgroundColor = "#ffffff";
            }}
          >

            <span style={{
              color: "#9251b5",
              display: "flex",
              alignItems: "center"
            }}>
              <DocumentIcon />
            </span>

            <span style={{
              fontSize: "12px",
              color: "#55515d",
              lineHeight: "1.5",
              fontWeight: "500"
            }}>
              {item}
            </span>

          </button>

        ))}

      </div>
    </section>
  );
}

export default SmartSearch;