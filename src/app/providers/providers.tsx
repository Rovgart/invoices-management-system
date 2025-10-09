import { SidebarProvider } from "@/components/ui/sidebar";
import { ThemeProvider } from "@/app/providers/theme-provider";
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
}
