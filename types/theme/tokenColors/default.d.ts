declare const _default: {
    grammarColors: {
        tokens: ({
            scope: string[];
            settings: {
                foreground: string;
                fontStyle?: undefined;
            };
        } | {
            scope: string;
            settings: {
                foreground: string;
                fontStyle?: undefined;
            };
        } | {
            scope: string;
            settings: {
                foreground: string;
                fontStyle: string;
            };
        } | {
            scope: string[];
            settings: {
                foreground: string;
                fontStyle: string;
            };
        } | {
            scope: string;
            settings: {
                fontStyle: string;
                foreground?: undefined;
            };
        } | {
            scope: string[];
            settings: {
                foreground?: undefined;
                fontStyle?: undefined;
            };
        } | {
            scope: string[];
            settings: {
                fontStyle: string;
                foreground?: undefined;
            };
        })[];
    };
};
export default _default;
