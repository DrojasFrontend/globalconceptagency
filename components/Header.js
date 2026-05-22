'use client';

import StaggeredMenu from '@/components/StaggeredMenu/StaggeredMenu';

const menuItems = [
  { label: 'Inicio', ariaLabel: 'Ir al inicio', link: '/' },
  { label: 'Servicios', ariaLabel: 'Ver servicios', link: '/#servicios' },
  { label: 'Proyectos', ariaLabel: 'Ver proyectos', link: '/#proyectos' },
  { label: 'Blog', ariaLabel: 'Ir al blog', link: '/blog/optimizando-operaciones' },
  { label: 'Contacto', ariaLabel: 'Contactar', link: '/contacto' },
];

const socialItems = [
  { label: 'LinkedIn', link: 'https://linkedin.com' },
  { label: 'Instagram', link: 'https://instagram.com' },
];

export default function Header() {
  return (
    <StaggeredMenu
      isFixed
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials
      displayItemNumbering
      logoUrl="/img/logo-global.svg"
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen
      colors={['#a7dd3c', '#0a0a0a']}
      accentColor="#a7dd3c"
      closeOnClickAway
    />
  );
}
