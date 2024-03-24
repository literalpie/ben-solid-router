import { QueryClient, QueryClientProvider } from "@tanstack/solid-query";
import "./app.css";

import { Suspense, type Component, createMemo } from "solid-js";
import { createQueries, createQuery } from "@tanstack/solid-query";

const CreateQueryComponent: Component = () => {
  const query1 = createQuery(() => ({
    queryKey: ["simple1"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1000));
      return "hello 1";
    },
  }));
  const query2 = createQuery(() => ({
    queryKey: ["simple2"],
    queryFn: async () => {
      await new Promise((res) => setTimeout(res, 1000));
      return "hello 2";
    },
  }));
  return (
    <div>
      <div>createQuery 1: {query1.data}</div>
      <div>createQuery 2: {query2.data}</div>
    </div>
  );
};

const CreateQueriesComponent: Component = () => {
  const queries = createQueries(() => ({
    queries: [
      {
        queryKey: ["simpleQueries1"],
        queryFn: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          return "Simple 1";
        },
      },
      {
        queryKey: ["simpleQueries2"],
        queryFn: async () => {
          await new Promise((res) => setTimeout(res, 1000));
          return "Simple 2";
        },
      },
    ],
  }));
  return (
    <div>
      <div>createQueries 1: {queries[0].data}</div>
      <div>createQueries 2: {queries[1].data}</div>
    </div>
  );
};

export default function App() {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <Suspense fallback="loading query">
        <CreateQueryComponent />
      </Suspense>
      <Suspense fallback="loading queries">
        {/* commenting this component out allows the app to load */}
        <CreateQueriesComponent />
      </Suspense>
    </QueryClientProvider>
  );
}
