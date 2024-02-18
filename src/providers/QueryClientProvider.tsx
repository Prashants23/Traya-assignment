import {
  QueryClient,
  QueryClientProvider as TanStackQueryClientProvider,
} from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    mutations: {
      retry: (failureCount, error: any) =>
        failureCount < 2 && error?.response?.status >= 500, // retry on 5xx errors for 3 times
      retryDelay: (attemptIndex) => Math.min(1000 * 3 ** attemptIndex, 20000), // retry after 1s, 3s, 9s, 27s, 81s, 243s, 729s, 2187s, 6561s, 20000s
    },
    queries: {
      retry: (failureCount, error: any) =>
        failureCount < 2 && error?.response?.status >= 500, // retry on 5xx errors for 3 times
      retryDelay: (attemptIndex) => Math.min(1000 * 3 ** attemptIndex, 20000), // retry after 1s, 3s, 9s, 27s, 81s, 243s, 729s, 2187s, 6561s, 20000s
    },
  },
});

const QueryClientProvider = ({ children }) => (
  <TanStackQueryClientProvider client={queryClient}>
    {children}
  </TanStackQueryClientProvider>
);

export default QueryClientProvider;
