import 'tailwindcss/tailwind.css';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 absolute bottom-0 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Shop Now. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
