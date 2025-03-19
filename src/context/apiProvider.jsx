import { ApiContext, defaultApiUrl } from "./apiContext";

export function ApiContextProvider({ children }) {
    return (
        <ApiContext.Provider
            value={
                import.meta.env.PROD
                    ? "https://buzz-my-day-app-xaqh.onrender.com"
                    : defaultApiUrl
            }
        >
            {children}
        </ApiContext.Provider>
    );
}
