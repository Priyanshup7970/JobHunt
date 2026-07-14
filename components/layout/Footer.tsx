export function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border py-8 mt-auto">
      <div className="max-w-[1440px] mx-auto px-8 text-center text-text-secondary text-[14px]">
        &copy; {new Date().getFullYear()} JobHunt. All rights reserved.
      </div>
    </footer>
  );
}
