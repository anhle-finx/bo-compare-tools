import { lazy, Suspense, LazyExoticComponent } from 'react';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Grid } from '@nextui-org/react';
import Loading from './pages/Loading';
import Header from './components/Header';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Compare = lazy(() => import('./pages/Compare'));
const ConfigsCompare = lazy(() => import('./pages/ConfigsCompare'));

function Page({ PAGE }: { PAGE: LazyExoticComponent<any> }) {
  return (
    <Suspense fallback={<Loading />}>
      <PAGE />
    </Suspense>
  );
}

export function RootApp() {
  return (
    <>
      <Header>
        <Grid.Container gap={1} justify="start">
          <Grid sm>
            <Outlet />
          </Grid>
        </Grid.Container>
      </Header>
    </>
  );
}

const router = createHashRouter([
  {
    path: '/',
    element: <RootApp />,
    children: [
      {
        path: '/',
        element: <Page PAGE={Dashboard} />,
      },
      {
        path: 'compare/:id',
        element: <Page PAGE={Compare} />,
      },
      {
        path: 'loader',
        element: <Loading />,
      },
      {
        path: 'configs-compare',
        element: <Page PAGE={ConfigsCompare} />,
      },
    ],
  },
  {
    path: '/loading',
    element: <Loading />,
  },
]);

export default function App() {
  return <RouterProvider router={router}></RouterProvider>;
}
