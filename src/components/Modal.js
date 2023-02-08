import React from 'react';
import "./modal.css";

function Modal(props) {
    
    const {open, close} = props;

    return (
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        title
                        <button className='close' onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>
                        contents
                    </main>
                    <footer>
                        <button className='close' onClick={close}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    )
}

export default Modal;