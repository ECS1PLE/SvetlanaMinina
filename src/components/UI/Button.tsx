import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export type FormValues = {
  fullName: string;
  contactMethod: "phone" | "whatsapp" | "telegram";
  phone: string;
  telegramHandle?: string;
  email?: string;
  agree: boolean;
};

interface ButtonProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export default function UIButtonWithForm({
  children,
  style,
  onClick,
}: ButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [busy, setBusy] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormValues>({
    defaultValues: {
      fullName: "",
      contactMethod: "phone",
      phone: "",
      telegramHandle: "",
      email: "",
      agree: false,
    },
  });

  const contactMethod = watch("contactMethod");

  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY || window.pageYOffset;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.overflow = "hidden";
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
      if (top) {
        const scrollY = parseInt(top || "0") * -1;
        window.scrollTo(0, scrollY);
      }
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  async function onSubmit(data: FormValues) {
    setBusy(true);
    setServerError(null);
    setSuccessMessage(null);

    try {
      const resp = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!resp.ok) {
        const text = await resp.text().catch(() => null);
        throw new Error(text || `Server returned ${resp.status}`);
      }

      const json = await resp.json().catch(() => ({}));
      setSuccessMessage(json?.message || "Заявка успешно отправлена");
      reset();
      setTimeout(() => setIsOpen(false), 900);
    } catch (err: any) {
      console.error("send-email error:", err);
      setServerError(err?.message || "Ошибка отправки. Попробуйте позже.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      <a
        className="btn"
        style={style}
        onClick={(e) => {
          setIsOpen((p) => !p);
          onClick?.(e as any);
          setServerError(null);
          setSuccessMessage(null);
        }}
      >
        {children}
      </a>

      {isOpen && (
        <div
          className="modal-overlay"
          role="dialog"
          aria-modal="true"
          onClick={() => setIsOpen(false)}
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2 className="modal-title">Оставить заявку</h2>

            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className="form-row">
                <label className="form-label">Фамилия Имя</label>
                <input
                  className="form-input"
                  {...register("fullName", {
                    required: "Пожалуйста, укажите Фамилию и Имя",
                    minLength: { value: 2, message: "Слишком короткое имя" },
                  })}
                  placeholder="Иванов Иван"
                />
                {errors.fullName && (
                  <div className="error">{errors.fullName.message}</div>
                )}
              </div>

              <div className="form-row">
                <label className="form-label">Удобный способ связи</label>
                <select
                  className="form-select"
                  {...register("contactMethod", {
                    required: "Выберите способ связи",
                  })}
                >
                  <option value="phone">Телефон</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="telegram">Telegram</option>
                </select>
                {errors.contactMethod && (
                  <div className="error">{errors.contactMethod.message}</div>
                )}
                <div className="note">
                  Если выбран Telegram — появится поле для тега пользователя.
                </div>
              </div>

              <div className="form-row">
                <label className="form-label">Телефон</label>
                <input
                  className="form-input"
                  {...register("phone", {
                    required: "Пожалуйста, укажите телефон",
                    minLength: { value: 5, message: "Неверный номер телефона" },
                  })}
                  placeholder="+7 (___) ___-__-__"
                />
                {errors.phone && (
                  <div className="error">{errors.phone.message}</div>
                )}
              </div>

              {contactMethod === "telegram" && (
                <div className="form-row">
                  <label className="form-label">
                    Telegram тег (например @username)
                  </label>
                  <input
                    className="form-input"
                    {...register("telegramHandle", {
                      required: "Укажите Telegram тег, т.к. выбран Telegram",
                      minLength: { value: 2, message: "Слишком короткий тег" },
                      validate: (v) => {
                        if (!v || v.trim() === "")
                          return "Укажите Telegram тег";
                        const val = v.startsWith("@") ? v.slice(1) : v;
                        if (!/^[A-Za-z0-9_]{2,32}$/.test(val))
                          return "Неверный формат тега (разрешены буквы, цифры, _)";
                        return true;
                      },
                    })}
                    placeholder="@username"
                  />
                  {errors.telegramHandle && (
                    <div className="error">{errors.telegramHandle.message}</div>
                  )}
                </div>
              )}

              <div className="form-row">
                <label className="form-label">E-mail</label>
                <input
                  className="form-input"
                  {...register("email", {
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Неверный формат E-mail",
                    },
                  })}
                  placeholder="name@example.com"
                />
                {errors.email && (
                  <div className="error">{errors.email.message}</div>
                )}
              </div>

              <div className="form-row form-row-inline">
                <input
                  id="agree"
                  type="checkbox"
                  className="form-checkbox"
                  {...register("agree", {
                    required:
                      "Необходимо согласиться с политикой конфиденциальности",
                  })}
                />
                <label htmlFor="agree" className="form-label-inline">
                  Я согласен с{" "}
                  <a href="#" onClick={(e) => e.preventDefault()}>
                    политикой конфиденциальности
                  </a>
                </label>
              </div>
              {errors.agree && (
                <div className="error">{errors.agree.message}</div>
              )}

              {serverError && (
                <div className="error" style={{ marginBottom: 8 }}>
                  {serverError}
                </div>
              )}
              {successMessage && (
                <div className="success" style={{ marginBottom: 8 }}>
                  {successMessage}
                </div>
              )}

              <div className="form-actions">
                <button
                  type="button"
                  className="btn-ghost"
                  onClick={() => setIsOpen(false)}
                  disabled={busy}
                >
                  Отмена
                </button>
                <button type="submit" className="btn-primary" disabled={busy}>
                  {busy ? "Отправка..." : "Отправить"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
