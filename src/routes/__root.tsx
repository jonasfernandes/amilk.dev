import { Outlet, Scripts, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { TanstackDevtools } from '@tanstack/react-devtools';

import Header from '@/components/Header';
import Cursor from '@/components/Cursor';
import { I18nProvider } from '@/context/I18nContext';

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
      <Cursor />
      <Scripts />
    </I18nProvider>
  );
}
