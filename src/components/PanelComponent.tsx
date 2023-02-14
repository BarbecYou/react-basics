import React, { PropsWithChildren, ReactNode, useState } from 'react'
import '../styles/panel.css'

interface Props {
    children: ReactNode;
}

export default function ({ children }: PropsWithChildren) {

    return (
        <div className="panelDiv">
            {children}
        </div>
    )
}