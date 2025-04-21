export default function Header(){
    return (
        <div className="bg-auto text-white py-5">
            <div className="logo">

            </div>
            <div className="flex flex-wrap gap-8 md:justify-center md:w-full mt-4 md:mt-6">
                <a href="/about-us" className="text-white hover:text-blue-400">
                    About Us
                </a>
                <a href="/community-us" className="text-white hover:text-blue-400">
                    Community
                </a>
                <a href="/contact" className="text-white hover:text-blue-400">
                    Contact
                </a>
                <a
                    href="/privacy-policy"
                    className="text-white hover:text-blue-400"
                >
                    Privacy Policy
                </a>
                <a
                    href="/terms-of-service"
                    className="text-white hover:text-blue-400"
                >
                    Terms of Service
                </a>
        </div>
    )
}