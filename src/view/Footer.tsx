export default function Footer() {
  return (
    <footer className="bg-auto text-amber-600 py-5">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-wrap items-start justify-left">
          {/* Company Info - Left */}
          <div className="flex-1/2 text-left">
            <h4 className=" text-amber-600 mt-1 text-xs font-bold">
              &copy; {new Date().getFullYear()} LUNARIST. All rights reserved.
            </h4>
          </div>

          {/* Footer Links - Right */}
          <div className="flex gap-4 flex-wrap items-center text-xs">
            <a href="/about-us" className="text-amber-600 hover:text-amber-800">
              About Us
            </a>
            <a href="/community-us" className="text-amber-600 hover:text-amber-800">
              Community
            </a>
            <a href="/contact" className="text-amber-600 hover:text-amber-800">
              Contact
            </a>
            <a
              href="/privacy-policy"
              className="text-amber-600 hover:text-amber-800"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-amber-600 hover:text-amber-800"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}