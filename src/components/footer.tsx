// components/Footer.tsx
"use client";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="fixed bottom-0 w-full bg-gray-100 dark:bg-gray-800 p-1">
      <div className="container mx-auto">
        <span className="block text-sm text-black sm:text-center dark:text-gray-400">
          © {year} -{" "}
          <a href="https://med-aifia.me/" className="hover:underline">
            Med Amine Aifia
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
