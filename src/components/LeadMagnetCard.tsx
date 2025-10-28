import { LightBulbIcon } from "@heroicons/react/24/outline";
import { Lightbulb } from "lucide-react";
import { FC } from "react";

const LeadMagnetCard: FC = () => (
  <div
    className="card-base card-hover rounded-lg p-6"
    style={{
      marginTop: 24,
      background: "linear-gradient(135deg,#FFFBEA, #FFF7ED)",
      border: "1px solid #FED7AA",
    }}
  >
    <div style={{ display: "flex", gap: 16 }}>
      <div
        style={{
          background: "rgb(217 119 6)",
          padding: 8,
          borderRadius: 8,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "48px",
          height: "48px",
          marginTop: "10px",
        }}
      >
        <Lightbulb style={{ color: "white" }} />
      </div>

      <div style={{ flex: 1 }}>
        <h3 className="title-strong" style={{ marginBottom: 8 }}>
          «5 вопросов, после которых вы перестанете быть главным исполнителем»
        </h3>
        <p className="muted" style={{ marginBottom: 8 }}>
          Вы устали «тушить пожары» вместо того, чтобы развивать бизнес? Этот
          гайд поможет...
        </p>
        <p className="muted" style={{ fontWeight: 600, marginBottom: 8 }}>
          В подарок вы получите:
        </p>
        <ul className="muted" style={{ marginBottom: 12, paddingLeft: 16 }}>
          <li>Чек-лист «Готов ли ваш сотрудник к делегированию?»</li>
          <li>Cкрипт первой сессии с командой без микроменеджмента</li>
        </ul>
        <div
          style={{ display: "flex", gap: 8 }}
          className="LeadManagedFormAdapt"
        >
          <input className="input" placeholder="Ваш email" />
          <button className="btn btn-secondary" style={{ border: 0 }}>
            Получить гайд
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default LeadMagnetCard;
