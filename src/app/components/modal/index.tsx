'use client'
import { Dialog, Transition } from '@headlessui/react'
import { useState, Fragment, useEffect, ReactNode } from 'react';
import { Statement } from 'typescript';

interface iCard {
    isOpen: boolean;
    closeModal: () => void;
	titleModal: ReactNode | string;
    contentModal: ReactNode | string;
    
}

const Modal = ({ isOpen, closeModal, titleModal, contentModal }: iCard ) => {

    const openModal = () => {
        openModal();
    };

    useEffect(() => {
        setContent(contentModal);
    }, [contentModal])

    const [content, setContent] = useState<any>('')

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-image bg-no-repeat p-6 text-left align-middle shadow-xl transition-all">
                                <Dialog.Title
                                    as="h3"
                                    className="text-lg font-medium leading-6 text-white w-full border-b-2 border-solid border-b-white"
                                >
                                    {titleModal}
                                </Dialog.Title>
                                <div className="mt-2">
                                    <p className="text-sm text-white leading-6">
                                        {content}
                                    </p>
                                </div>

                                <div className="mt-4 flex w-full justify-center">
                                    <button
                                        type="button"
                                        className="inline-flex justify-center rounded-full border border-transparent
                                         bg-cardContent px-4 py-2 text-sm font-medium text-white
                                         hover:duration-500 hover:ease-in-out
						                 hover:ring-2 hover:ring-mouseHoverNav
						                 ring-offset-4 ring-offset-cardContent"
                                        onClick={closeModal}
                                    >
                                        Sair
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}


export default Modal;