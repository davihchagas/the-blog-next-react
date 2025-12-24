import { MenuAdmin } from '@/components/admin/MenuAdmin';
import { requireLoginSectionOrRedirect } from '@/lib/login/manage-login';

type AdminPostLayoutProps = {
  children: React.ReactNode;
};

export default async function AdminPostLayout({
  children,
}: Readonly<AdminPostLayoutProps>) {

  await requireLoginSectionOrRedirect();
  return (
    <>
      <MenuAdmin />
      {children}
    </>
  );
}
