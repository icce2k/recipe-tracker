import { Link } from 'react-router';
import { PlusIcon, ScrollText } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="bg-base-300 border-b border-base-content/15">
      <div className="mx-auto max-w-6xl p-5">
        <div className="flex items-center justify-between">
          <Link to={"/"} className="text-4xl font-bold text-accent font-sans tracking-tighter">Recipe Tracker</Link>
          <div className="flex items-center gap-4">
            <Link to={"/all"} className="btn btn-neutral">
              <ScrollText className="size-5" />
              <span>Show All</span>
            </Link>
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5" />
              <span>New Recipe</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
