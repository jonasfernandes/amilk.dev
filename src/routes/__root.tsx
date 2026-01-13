import { Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanstackDevtools } from '@tanstack/react-devtools';

import Header from '@/components/Header';
import { I18nProvider } from '@/context/I18nContext';
import Config from '@/components/Config';

export const Route = createRootRoute({
  component: RootDocument,
});

function RootDocument() {
  return (
    <I18nProvider>
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
      <Config />
    </I18nProvider>
  );
}
