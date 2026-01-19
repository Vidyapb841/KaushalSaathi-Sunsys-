"use client";

export default function NotFoundContent() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "sans-serif",
      }}
    >
      <h1 style={{ fontSize: "2rem", marginBottom: "10px" }}>404 – Page Not Found</h1>
      <p style={{ color: "#555" }}>
        The page you're looking for doesn't exist.
      </p>
    </div>
  );
}
