import { UserIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 8,
            marginBottom: 12,
          }}
        >
          <div
            style={{
              width: 40,
              height: 40,
              background: "#F97316",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <UserIcon style={{ width: 16, height: 16, color: "#fff" }} />
          </div>
          <span style={{ fontWeight: 700 }}>Светлана Минина</span>
        </div>

        <p style={{ color: "#9CA3AF", marginBottom: 12 }}>
          Эксперт по системному управлению для руководителей и собственников
          бизнеса
        </p>
        <p style={{ color: "#6B7280", fontSize: 12 }}>
          © {new Date().getFullYear()} Светлана Минина. Все права защищены.
        </p>
        <div className="flex" style={{ justifyContent: "center", gap: "8px" }}>
          <p>Разработка: </p>
          <a
            href="https://ecs1ple-dev.vercel.app"
            style={{
              marginTop: "auto",
              marginBottom: "auto",
              color: "white",
              textDecoration: "none",
            }}
          >
            Artyom Vavilov
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
