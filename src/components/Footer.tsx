import logo from "@/assets/logo-dynamic.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <img src={logo} alt="Dynamic Idiomas" className="h-10 w-auto opacity-70" />
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Dynamic Idiomas. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
