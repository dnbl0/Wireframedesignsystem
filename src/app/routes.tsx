import { createBrowserRouter, Navigate } from 'react-router';
import Layout from './Layout';
import BuilderPage from './pages/BuilderPage';
import LayoutsPage from './pages/LayoutsPage';
import CompositionsPage from './pages/CompositionsPage';
import PagesPage from './pages/PagesPage';
import ComponentsPage from './pages/ComponentsPage';
import ComponentDetailPage from './pages/ComponentDetailPage';
import TokensOverviewPage from './pages/TokensOverviewPage';
import TokenSpacingPage from './pages/TokenSpacingPage';
import TokenColorsPage from './pages/TokenColorsPage';
import TokenTypographyPage from './pages/TokenTypographyPage';
import TokenBorderRadiusPage from './pages/TokenBorderRadiusPage';
import TokenResponsivePage from './pages/TokenResponsivePage';
import AccordionDocumentation from './pages/AccordionDocumentation';
import AccordionDemo from './pages/AccordionDemo';
import ChakraExamplePage from './pages/ChakraExamplePage';
import ChakraIntegrationDocsPage from './pages/ChakraIntegrationDocsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/builder" replace />,
      },
      {
        path: 'builder',
        element: <BuilderPage />,
      },
      {
        path: 'layouts',
        element: <LayoutsPage />,
      },
      {
        path: 'compositions',
        element: <CompositionsPage />,
      },
      {
        path: 'pages',
        element: <PagesPage />,
      },
      {
        path: 'components',
        element: <ComponentsPage />,
      },
      {
        path: 'components/:componentId',
        element: <ComponentDetailPage />,
      },
      {
        path: 'tokens',
        element: <TokensOverviewPage />,
      },
      {
        path: 'tokens/spacing',
        element: <TokenSpacingPage />,
      },
      {
        path: 'tokens/colors',
        element: <TokenColorsPage />,
      },
      {
        path: 'tokens/typography',
        element: <TokenTypographyPage />,
      },
      {
        path: 'tokens/border-radius',
        element: <TokenBorderRadiusPage />,
      },
      {
        path: 'tokens/responsive',
        element: <TokenResponsivePage />,
      },
      {
        path: 'accordion-documentation',
        element: <AccordionDocumentation />,
      },
      {
        path: 'accordion-demo',
        element: <AccordionDemo />,
      },
      {
        path: 'chakra-example',
        element: <ChakraExamplePage />,
      },
      {
        path: 'chakra-integration',
        element: <ChakraIntegrationDocsPage />,
      },
    ],
  },
]);