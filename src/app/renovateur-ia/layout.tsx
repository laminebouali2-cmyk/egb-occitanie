export default function RenovateurLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // This layout removes the main EGB header/footer
  // The renovateur-ia page has its own header and footer
  return <>{children}</>;
}
