"use client";
import { useEffect,useRef } from 'react';
export function Modal({title,onClose,children}:{title:string;onClose:()=>void;children:React.ReactNode}){const ref=useRef<HTMLDialogElement>(null);useEffect(()=>{const d=ref.current;d?.showModal();return()=>d?.close()},[]);return <dialog ref={ref} onCancel={onClose} className="modal"><div className="flex items-center justify-between gap-6"><h2>{title}</h2><button autoFocus className="btn-light" onClick={onClose} aria-label="关闭">关闭 ×</button></div>{children}</dialog>}
