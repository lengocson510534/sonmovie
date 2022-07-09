import { useState, useEffect, useRef } from 'react';

function Modal(props) {

  const [active, setActive] = useState(false)
  useEffect(() => {
    setActive(props.active);
  }, [props.active])

  return (
    <div id={props.id}
      className={`flex items-center justify-center z-[101] fixed inset-0 overflow-auto 
      bg-[rgba(13,13,17,0.6)] ${active ? `opacity-100 visible` : `opacity-0 invisible`}`}>
      {props.children}
    </div>
  );
}

export const ModalContent = props => {
  const contentRef = useRef(null)
  const modal = document.querySelector(`#modal_${props.id}`);

  const closeModal = () => {
    contentRef.current.parentNode.classList.remove('opacity-1');
    contentRef.current.parentNode.classList.add('opacity-0');
    modal.classList.remove(`opacity-100`)
    modal.classList.add('invisible')
    if (props.onClose) props.onClose();
  }
  return (
    <div ref={contentRef}
      className="modal__content p-[2rem] bg-[#0f0f0f] w-full md:w-1/2 opacity-0 transition transform duration-700 ease-linear relative">
      {props.children}
      <div onClick={closeModal}>
        <button className='w-full bg-red-600 py-1 font-medium text-center hover:cursor-pointer '>Close</button>
      </div>
    </div>
  )
}


export default Modal;