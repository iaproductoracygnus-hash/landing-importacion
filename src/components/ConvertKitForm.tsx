"use client";

import Script from "next/script";

const CK_OPTIONS = JSON.stringify({
  settings: {
    after_subscribe: {
      action: "redirect",
      success_message: "Success! Now check your email to confirm your subscription.",
      redirect_url: "https://landing-importacion-gracias.vercel.app/",
    },
    analytics: {
      google: null,
      fathom: null,
      facebook: null,
      segment: null,
      pinterest: null,
      sparkloop: null,
      googletagmanager: null,
    },
    recaptcha: { enabled: false },
    return_visitor: { action: "show", custom_content: "" },
  },
  version: "5",
});

export function ConvertKitForm() {
  return (
    <>
      <Script
        src="https://f.convertkit.com/ckjs/ck.5.js"
        strategy="lazyOnload"
      />
      <form
        action="https://app.kit.com/forms/9275752/subscriptions"
        className="seva-form formkit-form w-full"
        method="post"
        data-sv-form="9275752"
        data-uid="6ed2ec8d2a"
        data-format="inline"
        data-version="5"
        data-options={CK_OPTIONS}
        style={{ maxWidth: "100%" }}
      >
        <div data-style="clean">
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          />
          <div
            data-element="fields"
            data-stacked="true"
            className="seva-fields formkit-fields"
          >
            <input type="hidden" name="fields[utm_campaign]" />
            <input type="hidden" name="fields[utm_content]" />
            <input type="hidden" name="fields[utm_medium]" />
            <input type="hidden" name="fields[utm_placement]" />
            <input type="hidden" name="fields[utm_source]" />
            <input type="hidden" name="fields[utm_country]" />
            <input type="hidden" name="fields[utm_city]" />

            <div className="formkit-field" style={{ marginBottom: 0 }}>
              <input
                className="formkit-input"
                name="email_address"
                aria-label="Deja aquí tu mejor correo..."
                placeholder="Deja aquí tu mejor correo..."
                required
                type="email"
                style={{
                  width: "100%",
                  backgroundColor: "white",
                  border: "1px solid rgb(227, 227, 227)",
                  borderRadius: "10px",
                  padding: "14px 16px",
                  color: "#333",
                  outline: "none",
                  fontSize: "15px",
                  fontWeight: 400,
                  marginBottom: "12px",
                }}
              />
            </div>

            <button
              data-element="submit"
              className="formkit-submit formkit-submit"
              style={{
                width: "100%",
                color: "rgb(255, 255, 255)",
                backgroundColor: "rgb(60, 177, 29)",
                borderRadius: "9999px",
                border: "none",
                padding: "15px 20px",
                fontSize: "15px",
                fontWeight: 700,
                cursor: "pointer",
                animation: "onda 1.5s infinite",
                display: "block",
              }}
            >
              <div className="formkit-spinner">
                <div />
                <div />
                <div />
              </div>
              <span>¡REGISTRARME AHORA AL EVENTO!</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
