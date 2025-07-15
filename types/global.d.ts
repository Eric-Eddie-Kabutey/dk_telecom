// types/global.d.ts
interface Window {
    googleTranslateElementInit?: () => void; // allow undefined
    google: {
      translate: {
        TranslateElement: {
          new (
            options: {
              pageLanguage: string;
              includedLanguages: string;
              layout: any;
              autoDisplay: boolean;
            },
            elementId: string
          ): void;
          InlineLayout: {
            SIMPLE: any;
          };
        };
      };
    };
  }
  