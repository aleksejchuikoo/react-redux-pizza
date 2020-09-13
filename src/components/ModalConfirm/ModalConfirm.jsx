import React from 'react';
import Button from '../Button';
import './ModalConfrim.sass';

function ModalConfirm({ open, confirm }) {
  const ref = React.useRef();

  const handleOutsideClick = (e) => {
    const path = e.path || (e.composedPath && e.composedPath()); // для браузера Firefox
    console.log(ref);
    if (!path.includes(ref.current)) {
      confirm(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick);
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal_confirm" ref={ref}>
        <div className="modal_confirm-title">Вы действительно хотите {open}?</div>
        <div className="modal_confirm-btns">
          <Button onClick={() => confirm(true)}>Да</Button>
          <Button onClick={() => confirm(false)}>Отмена</Button>
        </div>
      </div>
    </div>
  );
}

export default ModalConfirm;
