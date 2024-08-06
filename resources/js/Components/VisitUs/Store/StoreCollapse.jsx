import { Opened } from "./Opened";
import { Closed } from "./Closed";


export const StoreCollapse = ({ isOpen, title }) => {
  return (
    <div className='w-full slide-in-left reveal-scroll'>
      {isOpen ? (
        <Opened image={'/blog/default.png'} title={title} />
      ) : (
        <Closed image={'/blog/open-soon.png'} title={title} />
      )}
    </div>
  );
};
