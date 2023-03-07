import React from "react";
import {useRef, useEffect, useState} from 'react'
export interface ICanvasBoard {
    height: number;
    width: number;
}


const CanvasBoard = ({height, width} : ICanvasBoard) => {

    const canvasRef = useRef<HTMLCanvasElement | null>(null)
    const [context, setContext] = 
    (useState < CanvasRenderingContext2D) | (null > null)

    useEffect(() => {
        setContext(canvasRef.current && canvasRef.current.getContext('2d'))
    }, [context])
    
    return (
        <canvas
        ref={canvasRef}
        style ={{border: '3x solid darkgrey'}}
        height={height}
        width={width}
        />
    )
}

export default CanvasBoard;