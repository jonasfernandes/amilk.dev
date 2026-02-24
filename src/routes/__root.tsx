import { Outlet, Scripts, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanstackDevtools } from '@tanstack/react-devtools';

import Header from '@/components/Header';
import { QueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootDocument,
});

async function activeScroll() {
  const LocomotiveScroll = (await import('locomotive-scroll')).default;
  new LocomotiveScroll();
}

function RootDocument() {
  useEffect(() => {
    activeScroll();
  }, []);

  return (
    <>
      <Header />
      <Outlet />
      <TanstackDevtools
        config={{
          position: 'bottom-left',
        }}
        plugins={[
          {
            name: 'Tanstack Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
        ]}
      />
      <Scripts />
    </>
  );
}
