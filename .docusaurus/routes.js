import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '59a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'e8c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '7b8'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '0da'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'de9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '641'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '014'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '542'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '046'),
    exact: true
  },
  {
    path: '/blog/release-0-9-0',
    component: ComponentCreator('/blog/release-0-9-0', '098'),
    exact: true
  },
  {
    path: '/blog/release-0-9-4',
    component: ComponentCreator('/blog/release-0-9-4', 'ba6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '189'),
    exact: true
  },
  {
    path: '/blog/tags/features',
    component: ComponentCreator('/blog/tags/features', 'c09'),
    exact: true
  },
  {
    path: '/blog/tags/fonts',
    component: ComponentCreator('/blog/tags/fonts', '8a1'),
    exact: true
  },
  {
    path: '/blog/tags/sounds',
    component: ComponentCreator('/blog/tags/sounds', 'e0b'),
    exact: true
  },
  {
    path: '/blog/why',
    component: ComponentCreator('/blog/why', '6c7'),
    exact: true
  },
  {
    path: '/contact',
    component: ComponentCreator('/contact', '611'),
    exact: true
  },
  {
    path: '/download',
    component: ComponentCreator('/download', '586'),
    exact: true
  },
  {
    path: '/privacy-policy',
    component: ComponentCreator('/privacy-policy', 'a5c'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '200'),
    routes: [
      {
        path: '/docs/changelog',
        component: ComponentCreator('/docs/changelog', 'fe5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features',
        component: ComponentCreator('/docs/features', '073'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/intro',
        component: ComponentCreator('/docs/intro', 'aed'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/settings',
        component: ComponentCreator('/docs/settings', 'b61'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '013'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
