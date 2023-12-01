import {
  QueryClient
} from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

import React from 'react';


const persister = createSyncStoragePersister({
  storage: typeof window !== 'undefined' ? window.localStorage : null,
})

const queryClient = new QueryClient();

export default function Provider({ children }: { children: React.ReactNode }) {


  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}
    >
      <ReactQueryDevtools initialIsOpen />
      {children}
    </PersistQueryClientProvider>
  )
}