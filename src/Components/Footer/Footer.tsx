import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo-text.png";

const Footer = () => {
  return (
    <footer id="about" className="border-t border-slate-100 bg-white">
      <div className="container mx-auto grid gap-10 px-4 py-12 md:grid-cols-[1.6fr_1fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2 font-extrabold">
            <img
                src={Logo}
                alt="Dev Stack Logo"
                className="h-136.2 w-32 object-contain"
              />
          </div>
          <p className="mt-4 max-w-xs text-xs leading-6 text-slate-400">
            Curated tools, technologies, and resources for developers building modern software.
          </p>
          <div className="mt-5 flex gap-4 text-slate-500">
            <a href="#" aria-label="GitHub"><FaGithub /></a>
            <a href="#" aria-label="Twitter"><FaTwitter /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-extrabold uppercase tracking-wider text-slate-700">Product</h3>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block hover:text-slate-700" href="#">Home</a>
            <a className="block hover:text-slate-700" href="#technologies">Technologies</a>
            <a className="block hover:text-slate-700" href="#">Projects</a>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-extrabold uppercase tracking-wider text-slate-700">Company</h3>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block hover:text-slate-700" href="#about">About</a>
            <a className="block hover:text-slate-700" href="#">Contact</a>
            <a className="block hover:text-slate-700" href="#">Careers</a>
          </div>
        </div>

        <div>
          <h3 className="text-[14px] font-extrabold uppercase tracking-wider text-slate-700">Legal</h3>
          <div className="mt-4 space-y-3 text-xs text-slate-400">
            <a className="block hover:text-slate-700" href="#">Privacy Policy</a>
            <a className="block hover:text-slate-700" href="#">Terms of Service</a>
          </div>
        </div>
      </div>

      <div className=" container mx-auto flex max-w-6xl flex-col gap-3 border-t border-slate-200 px-5 py-6 text-[10px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 Dev Stack. All rights reserved.</span>
        <div className="flex gap-6"><a href="#">Privacy</a><a href="#">Terms</a></div>
      </div>
    </footer>
  );
}

export default Footer;