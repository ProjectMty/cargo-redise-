'use client'

interface AlertProps {
  onClose?: (result: boolean) => void;
}

export default function AlertDialog({ onClose }: AlertProps) {

  return (
<>
 <div className="bg-slate-600 fixed top-0 left-0 w-full h-full" onClick={()=> onClose}></div>
      <div className="fixed left-1/2 top-1/2 translate-x-1/2">
        <button className="close-button" onClick={()=>onClose}>
          Close
        </button>
      </div>
</>
  );
};
