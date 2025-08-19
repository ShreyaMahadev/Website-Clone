'use client';
import SecondaryNavbar from '@/components/layout/SecondaryNavbar';

const tabs = [
  { label: 'Billing Manager', path: '/general-settings/billing-manager' },
  { label: 'Staff Manager', path: '/general-settings/staff-manager' },
];

export default function GeneralSettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SecondaryNavbar tabs={tabs} />
      {children}
    </>
  );
}