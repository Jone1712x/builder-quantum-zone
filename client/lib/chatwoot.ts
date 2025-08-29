declare global {
  interface Window {
    chatwootSDK?: any;
    chatwootSettings?: any;
  }
}

export function initChatwoot(baseUrl?: string, websiteToken?: string) {
  if (!baseUrl || !websiteToken) return;
  if ((window as any).CHATWOOT_INITIALIZED) return;
  (window as any).CHATWOOT_INITIALIZED = true;

  window.chatwootSettings = {
    hideMessageBubble: false,
    position: "right",
    locale: "ru",
    type: "standard",
  };

  (function (d, t) {
    const g = d.createElement(t) as HTMLScriptElement;
    const s = d.getElementsByTagName(t)[0];
    g.src = `${baseUrl}/packs/js/sdk.js`;
    g.defer = true;
    g.async = true;
    g.onload = () => {
      window.chatwootSDK.run({ websiteToken, baseUrl });
    };
    s.parentNode?.insertBefore(g, s);
  })(document, "script");
}
